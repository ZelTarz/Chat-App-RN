import React, { Component } from "react";
import { Container } from 'native-base'
import ListConversation from  './components/ListConversation';
import HeaderBar from '../global_components/HeaderBar'

export default class RecentChat extends Component{
    constructor(props){
        super(props);      
    };

    handleConversationClick = (conversationID, title) => {

        console.warn("Conversation " + conversationID + " clicked");
        const {navigate} = this.props.navigation;

        console.log("navigate: ", navigate);
        console.log("props: ", this.props);

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