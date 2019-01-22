import React, { Component, PureComponent } from "react";
import { Container, Text, Header, Left, Button, Icon, Body, Right, Title } from 'native-base'

export default class Chat extends PureComponent{
    constructor(props){
        super(props);      
    };

    render(){
    return(
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.navigation.getParam('title')}</Title>
                </Body>
                <Right />
            </Header>

            <Text style = {{fontSize: 20, alignSelf: "center"}}> This is Chat Screen </Text>
        </Container>
    )}
}