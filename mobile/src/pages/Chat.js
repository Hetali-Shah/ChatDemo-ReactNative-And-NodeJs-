
import React, {Component} from 'react';
import { FlatList, Text, View, TextInput } from 'react-native';
import SocketUtils from '../utils/socket';
import { ChatScreenStyle } from '../assets/style';
import { Screen } from '../elements';
import withUser from '../common/withUser';

class Chat extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: []
    }
  }

  componentWillMount() {
    SocketUtils.joinRoom('send-message', this._receiveMessage)
  }

  componentWillUnmount() {
    // SocketUtils.leaveRoom();
  }

  _submitChatMessage() {
    const {chatMessage} = this.state;
    const {user} = this.props
    SocketUtils.sendMessage({
      message: chatMessage,
      userName: user
    })
    this.setState({
      chatMessage: ''
    })
  }

  _receiveMessage = (msg) => {
    console.log("message", msg)
    const {chatMessages} = this.state
    chatMessages.push(msg)
    this.setState({chatMessages})
  }

  // _chatMessages = (chatMessages) => {
  //   console.log(chatMessages)
  //   return (
  //     chatMessages.map((value, key) => {
  //       console.log("value-------", value.userName)
  //       return (
  //         <View style={{borderWidth:1, backgroundColor:'red'}}>
  //           <Text>{value.userName}</Text>
  //         </View>
  //       )})
  //   )
  // }

  render() {
    const {chatMessages} = this.state
    console.log("chat", chatMessages)
    return (
      <View style={{flex:1}}>
        <Text style={ChatScreenStyle.userName}>{this.props.user}</Text>
        <View style={ChatScreenStyle.container}>
          <View>
            {
              chatMessages && chatMessages.map((value, key) => (
                <View key={key} style={{paddingVertical:10}}>
                  <Text style={(value.userName === this.props.user) ?  ChatScreenStyle.chatReply : ChatScreenStyle.chatMsg }>{value.userName} : {value.message}</Text>
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

export default withUser(Chat);
