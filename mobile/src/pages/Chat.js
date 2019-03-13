
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
    const {chatMessages} = this.state
    chatMessages.push(msg)
    this.setState({chatMessages})
    this._chatMessages(chatMessages)
  }

  _chatMessages = (chatMessages) => {
    return (
      chatMessages.map((value, key) => (
        <View>
          <Text key={key} style={ChatScreenStyle.chatText}>helolo</Text>
        </View>
      ))
    )
  }

  render() {
    return (
      <Screen
        style={ChatScreenStyle.container}
        disableKBDismissScroll={true}
        keyboardShouldPersistTaps='always'
        enableAutoAutomaticScroll={false}
      >
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
          <Text>{this.props.user}</Text>
        </View>
      </Screen>
    );
  }
}

export default withUser(Chat);
