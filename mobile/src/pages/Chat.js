
import React, {Component} from 'react';
import { FlatList, Text, View, TextInput } from 'react-native';
import SocketUtils from '../utils/socket';
import { ChatScreenStyle } from '../assets/style';
import withUser from '../common/withUser';
import withAddChatUser from '../common/withAddChatUser';

class Chat extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
      userName: ''
    }
  }

  componentWillMount() {
    const {addChatUser:{name, id}} = this.props;
    SocketUtils.joinRoom(`message-${id}`, this._receiveMessage)
    this.setState({
      userName: name
    })
  }

  componentWillUnmount() {
    SocketUtils.leaveRoom();
  }

  _submitChatMessage() {
    const {chatMessage} = this.state;
    const {addChatUser:{id}, user} = this.props

    SocketUtils.sendMessage({
      message: chatMessage,
      roomId: id,
      userName: user
    });

    this.setState({
      chatMessage: ''
    })
  }

  _receiveMessage = (msg) => {
    const {chatMessages} = this.state;
    chatMessages.push(msg)
    this.setState({chatMessages})
  };

  render() {
    const {chatMessages} = this.state
    return (
      <View style={{flex:1}}>
        <Text style={ChatScreenStyle.userName}>{this.state.userName}</Text>
        <View style={ChatScreenStyle.container}>
          <View>
            {
              chatMessages && chatMessages.map((value, key) => (
                <View key={key} style={{paddingVertical:10}}>
                  <Text style={(value.userName === this.props.user) ?  ChatScreenStyle.chatReply : ChatScreenStyle.chatMsg }>{value.message}</Text>
                </View>
              ))
            }
          </View>
          <View style={ChatScreenStyle.chatInputView}>
            <TextInput
              placeholder="Type Message Here"
              changeSuccessColor={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={chatMessage => {
                this.setState({ chatMessage })
              }}
              placeholderStyle={ChatScreenStyle.placeHolderStyle}
              value={this.state.chatMessage}
              onSubmitEditing={() => this._submitChatMessage()}
              style={ChatScreenStyle.chatInputStyle}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default withUser(withAddChatUser(Chat));
