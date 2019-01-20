import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import RecentChat from './recent_chat_creen/RecentChat';
import Contacts from './contacts_screen/Contacts'
import Groups from './groups_screen/Groups'
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
                <BadgeFooterTabBar navigation = {props.navigation} ></BadgeFooterTabBar>
            );
        }
    }
);

export default Route = createAppContainer(TabNavigator);