import React, { Component } from "react";
import { Container } from 'native-base'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import ListConversation from  './components/ListConversation';
import TopBar from '../global_components/TopBar'
import Contacts from '../contacts_screen/Contacts'
import Groups from '../groups_screen/Groups'
import BadgeFooterTab from '../global_components/BadgeFooterTab'

class RecentChat extends Component{
    constructor(props){
        super(props);      
    };

    render(){
    return(
        <Container>
            <TopBar userID = "0"></TopBar>
            <ListConversation></ListConversation>
        </Container>
    )}
}

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
                <BadgeFooterTab navigation = {props.navigation} ></BadgeFooterTab>
            );
        }
    }
);

export default createAppContainer(TabNavigator);