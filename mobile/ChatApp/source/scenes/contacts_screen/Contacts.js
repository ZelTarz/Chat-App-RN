import React, { Component, PureComponent } from "react";
import { Container } from 'native-base'
import ListContact from  './components/ListContact';
import HeaderBar from '../global_components/HeaderBar'

export default class Contacts extends PureComponent{
    constructor(props){
        super(props);      
    };

    render(){
    return(
        <Container>
            <HeaderBar userID = "0"></HeaderBar>
            <ListContact></ListContact>
        </Container>
    )}
}