import React, { Component } from 'react';
import {View} from 'react-native';
import { ListItem, Thumbnail, Left, Right, Body,Text } from 'native-base';

export default class ContactItem extends Component{
    constructor(props){
        super(props);
    };

    handleClick = () => {
        console.warn("Conversation " + this.props.userID + " clicked");
    };

    render(){
        return(
            <ListItem avatar button onPress={ this.handleClick }>

                <Left style = {{height: 80}}>
                    <Thumbnail source={{uri: this.props.image}} />
                </Left>

                <Body style = {{height: 80, alignContent: "space-between", justifyContent: "space-between"}}>
                    <Text>
                        {this.props.title}
                    </Text>
                </Body>
                
                <Right style = {{height: 80}}>
                </Right>
            </ListItem>
        )
    }
}
