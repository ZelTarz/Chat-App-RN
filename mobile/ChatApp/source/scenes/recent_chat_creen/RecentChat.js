import React, { Component } from "react";
import { Container } from 'native-base'
import ListConversation from  './components/ListConversation';
import TopBar from '../global_components/TopBar'

export default class RecentChat extends Component{
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