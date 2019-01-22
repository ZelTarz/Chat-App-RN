import React, { Component, PureComponent } from "react";
import { Text } from 'native-base'

export default class Groups extends PureComponent{
    constructor(props){
        super(props);

    };

    render(){
       return(
           
        <Text style = {{fontSize: 20, alignSelf: "center"}}> This is Groups Screen </Text>
        
    )}
}