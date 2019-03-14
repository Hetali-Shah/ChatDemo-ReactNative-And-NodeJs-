import React, { Component } from 'react';
import {View, FlatList, ScrollView, TouchableOpacity, Image, Text} from 'react-native';
import {DisplayChatScreen} from '../assets/style'
import {Screen} from '../elements';
import AppImages from "../assets/images";

export default class DisplayChat extends Component {
  constructor(props){
    super(props);
    this.state = {
      chatResult: [
        {
          id:1,
          img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
          name:'Hetali Shah',
        },
        {
          id:2,
          img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
          name:'Vixita',
        },
        {
          id:3,
          img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
          name:'Sonika',
        },
        {
          id:4,
          img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
          name:'Hinal',
        },
        {
          id:5,
          img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
          name:'Monika',
        },
        {
          id:6,
          img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
          name:'nirav',
        },
        {
          id:7,
          img:'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
          name:'Hiren Bhai',
        },
      ]
    }
  }

  _displayChatList = ({item}) => {
    console.log("item", item)
    const {name, img, id} = item
    return (
      <View style={DisplayChatScreen.singlePeopleResultView}>
        <TouchableOpacity>
          <View style={DisplayChatScreen.flexRow}>
            <View style={DisplayChatScreen.flexRow}>
              <View style={DisplayChatScreen.peopleImageView}>
                <Image
                  style={DisplayChatScreen.peopleImageStyle}
                  source={{uri:img}}
                  //source={AppImages.person1}
                />
              </View>

              <View style={DisplayChatScreen.peopleTextView}>
                <Text style={DisplayChatScreen.nameStyle}>{name}</Text>
              </View>

            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }


  render() {
    const { chatResult } = this.state;
    console.log("chatResult", chatResult)
    return (
      <Screen scrollEnabled={true} style={DisplayChatScreen.container}>
        <ScrollView
          contentContainerStyle={DisplayChatScreen.contentContainerStyle}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          bounces={false}>
          <View style={DisplayChatScreen.peopleMainView}>
            <FlatList
              data={chatResult}
              renderItem={this._displayChatList}
            />
          </View>
        </ScrollView>
      </Screen>
    );
  }
}


