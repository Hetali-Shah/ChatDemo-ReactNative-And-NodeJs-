import React, { Component } from 'react';
import {View, FlatList, ScrollView, TouchableOpacity, Image, Text} from 'react-native';
import {DisplayChatScreen} from '../assets/style'
import {Screen} from '../elements';
import withAddChatUser from '../common/withAddChatUser';
import {Actions} from 'react-native-router-flux';
import {ROUTE_MAP} from '../common/global';

class DisplayChat extends Component {
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

  componentWillReceiveProps(nextProps) {
    console.log("next0", nextProps)
  }

  _onPressPerson = (personDetails) => {
    const {chatUser} = this.props;

    chatUser(personDetails);

    Actions[ROUTE_MAP[2]]();
  };

  _displayChatList = ({item}) => {
    const {name, img } = item
    return (
      <View style={DisplayChatScreen.singlePeopleResultView}>
        <TouchableOpacity onPress={() => this._onPressPerson(item)}>
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
  };

  render() {
    const { chatResult } = this.state;
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


export default withAddChatUser(DisplayChat);
