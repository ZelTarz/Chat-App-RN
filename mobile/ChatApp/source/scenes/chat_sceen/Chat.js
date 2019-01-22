import React, { Component } from "react";
import { Container, Text, Header, Left, Button, Icon, Body, Right, Title } from 'native-base'

export default class Chat extends Component{
    constructor(props){
        super(props);      
    };

    render(){
    const {navigation} = this.props;
    const title = navigation.getParam('title');
    return(
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right />
            </Header>

            <Text style = {{fontSize: 20, alignSelf: "center"}}> This is Chat Screen </Text>
        </Container>
    )}
}