import React, { Component, PureComponent } from "react";
import { Container } from 'native-base'
import ListConversation from  './components/ListConversation';
import HeaderBar from '../global_components/HeaderBar'

export default class RecentChat extends PureComponent{
    constructor(props){
        super(props);      
    };

    handleConversationClick = (conversationID, title) => {

        const {navigate} = this.props.navigation;

        navigate("Chat", {conversationID: conversationID, title: title})
    };

    render(){
    return(
        <Container>
            <HeaderBar userID = "0"></HeaderBar>
            <ListConversation handleConversationClick = {this.handleConversationClick}></ListConversation>
        </Container>
    )}
}