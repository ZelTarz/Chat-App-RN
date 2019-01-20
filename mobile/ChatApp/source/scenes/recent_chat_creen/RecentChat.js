import React, { Component } from "react";
import { Container } from 'native-base'
import ListConversation from  './components/ListConversation';
import HeaderBar from '../global_components/HeaderBar'

export default class RecentChat extends Component{
    constructor(props){
        super(props);      
    };

    render(){
    return(
        <Container>
            <HeaderBar userID = "0"></HeaderBar>
            <ListConversation></ListConversation>
        </Container>
    )}
}