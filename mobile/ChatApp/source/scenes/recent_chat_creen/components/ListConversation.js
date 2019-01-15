import React, { Component } from "react";
import { List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';
import ConversationService from '../../../services/ConversationServices'

export default class ListConversation extends Component{
    constructor(props){
        super(props);
        this.state = {
            conversation: [],
            renderData: [],
        }
    };

    componentDidMount(){

        this.getConversation(0).then(result => {
            this.setState({conversation: result});

            this.getRenderData().then(result => {
                this.setState({renderData: result})
            });
        });
    };

    async getConversation(userID){
        var conversations = ConversationService.getAllConversationofUser(userID);

        return conversations;
    };

    async getRenderData(){
        var lastMessage = {
            messageID: "",
            senderID: "",
            conversationID: "",
            message: "",
            createdAt: "",
            status: "",
            activeStatus: ""
        };
        var renderDataList = new Array();

        this.state.conversation.forEach(function(item, index, object){
            lastMessage = ConversationService.getLastMessageofConversation(item.conversationID);

            renderDataList.push({
                image: item.conversationImage,
                title: item.conversationName,
                message: lastMessage.message,
                time: lastMessage.createdAt
            })
        })

        console.log(renderDataList);
        return renderDataList;
    }

    render(){
    return(
        <List
            dataArray={this.state.renderData}
            renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={{uri: data.image}} />
                </Left>
                <Body>
                  <Text>
                    {data.title}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.message}
                  </Text>
                </Body>
                <Right>
                  <Text note>
                    {data.time}
                  </Text>
                </Right>
              </ListItem>}
        />
    )}
}