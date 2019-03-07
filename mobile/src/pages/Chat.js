
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import io from "socket.io-client";


export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: []
    }
  }

  componentDidMount(){
    console.log("data=======> ")
    this.socket = io("http://192.168.1.39:3000");
    console.warn("in socket")
    this.socket.on("get users", function (data){
      console.log("data=======> ", data)
      //this.setState({chatMessages:data})
    });
    this.socket.on("chat message", msg => {
      this.setState({
        chatMessages : [...this.state.chatMessages, msg]
      })
    })


  }

  _submitChatMessage() {
    console.log("jj")
    this.socket.emit("chat message", this.state.chatMessage)
    this.setState({
      chatMessage: ''
    })
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage) => <Text key={chatMessage}>{chatMessage}</Text>)
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          onChangeText={chatMessage => {
            this.setState({ chatMessage })
          }}
          value={this.state.chatMessage}
          onSubmitEditing={() => this._submitChatMessage()}
          style={{height:40 , borderWidth:2}}
        />
        {chatMessages}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
