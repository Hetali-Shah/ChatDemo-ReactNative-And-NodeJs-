/**
 * @providesModule Screen
 */

import React, { Component } from 'react';
import { Content } from 'native-base';
import { ImageBackground, StatusBar } from 'react-native';
import LayoutStyle from '../assets/style/layout';
import AppImages from '../assets/images/index';

export default class Screen extends Component {
    render () {
        const {children, style, footer = null, ...rest} = this.props;
        return(

                <Content {...rest} style={[LayoutStyle.content, style]}>
                    <StatusBar
                        translucent
                        backgroundColor="transparent"
                        barStyle="light-content"
                    />
                    {children}
                </Content>
        )
    }
}
