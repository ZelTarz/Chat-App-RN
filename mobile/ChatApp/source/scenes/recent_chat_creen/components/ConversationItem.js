import React, { Component } from 'react';
import { ListItem, Text, Thumbnail, Left, Right, Body, } from 'native-base';

export default class ConversationItem extends Component{
    constructor(props){
        super(props);
    };

    handleClick = () => {
        this.props.handleConversationClick(this.props.conversationID, this.props.title);
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
                    <Text numberOfLines={1} note>
                        {this.props.message}
                    </Text>
                </Body>
                <Right style = {{height: 80}}>
                <Text note>
                    {this.props.time}
                </Text>
                </Right>
            </ListItem>
        )
    }
}