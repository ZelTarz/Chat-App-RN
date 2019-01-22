import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import RecentChat from './recent_chat_creen/RecentChat';
import Contacts from './contacts_screen/Contacts'
import Groups from './groups_screen/Groups'
import Chat from './chat_sceen/Chat'

import BadgeFooterTabBar from './global_components/BadgeFooterTabBar'

const TabNavigator = createBottomTabNavigator(
    {
    RecentChat: {screen: RecentChat},
    Contacts: {screen: Contacts},
    Groups: {screen: Groups}
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarComponent: props => {
            return(
                <BadgeFooterTabBar navigation = {props.navigation}></BadgeFooterTabBar>
            );
        }
    }
);

const TabBar = createAppContainer(TabNavigator);

const Route = createStackNavigator(
    {
        TabBar,
        Chat
    },
    {
      headerMode: "none",
      initialRouteName: 'TabBar'
    }
);


export default createAppContainer(Route);