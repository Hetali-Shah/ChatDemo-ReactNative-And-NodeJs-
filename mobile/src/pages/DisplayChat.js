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
      allRooms: [
        {id:'R1', name:'Room 1'},
        {id:'R2', name:'Room 2'},
        {id:'R3', name:'Room 3'},
        {id:'R4', name:'Room 4'},
        {id:'R5', name:'Room 5'}
      ]
    }
  }

  _onPressPerson = (personDetails) => {
    const {chatUser} = this.props;
    chatUser(personDetails);
    Actions[ROUTE_MAP[2]]();
  };

  _displayChatList = ({item}) => {
    const {name} = item
    return (
      <View style={DisplayChatScreen.singlePeopleResultView}>
        <TouchableOpacity onPress={() => this._onPressPerson(item)}>
          <View style={DisplayChatScreen.flexRow}>
            <View style={DisplayChatScreen.flexRow}>
              {/*<View style={DisplayChatScreen.peopleImageView}>
                <Image
                  style={DisplayChatScreen.peopleImageStyle}
                  source={{uri:img}}
                  //source={AppImages.person1}
                />
              </View>*/}

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
    const { allRooms } = this.state;
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
              data={allRooms}
              renderItem={this._displayChatList}
            />
          </View>
        </ScrollView>
      </Screen>
    );
  }
}


export default withAddChatUser(DisplayChat);
