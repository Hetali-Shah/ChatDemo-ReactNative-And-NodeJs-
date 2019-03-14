import React, { Component } from 'react';
import { Router, Scene, Modal, Actions } from 'react-native-router-flux';
import { ROUTE_MAP, getUser } from './common/global';
import SignUp from './pages/SignUp';
import ChatScreen from './pages/Chat';
import DisplayChat from './pages/DisplayChat'

export default () => {
    return <Router>
        <Modal>
            <Scene key="root" hideNavBar={true}>
                <Scene type="replace" index={0} key={ROUTE_MAP[0]} component={SignUp}
                       panHandlers={null} hideNavBar={true} />

              <Scene type="replace" index={1} key={ROUTE_MAP[1]} component={DisplayChat}
                     panHandlers={null} hideNavBar={true} />
              <Scene type="replace" index={2} key={ROUTE_MAP[2]} component={ChatScreen}
                     panHandlers={null} hideNavBar={true} />
            </Scene>
        </Modal>
    </Router>;
};
