import React, { Component } from "react";
import { Container, Text } from 'native-base'

export default class Groups extends Component{
    constructor(props){
        super(props);      
    };

    render(){
    return(
        <Container>
            <Text style = {{alignSelf: "center"}}> This is Groups Screen! </Text>
        </Container>
    )}
}