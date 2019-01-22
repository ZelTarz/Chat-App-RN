import React, { Component } from "react";
import { StyleProvider } from 'native-base';
import { FlatList } from 'react-native'
import ConversationItem from './ConversationItem'
import ConversationService from '../../../services/ConversationService'
import getTheme from '../../../native-base-theme/components';
import customTextFont from '../../../native-base-theme/variables/customTextFont';

export default class ListConversation extends Component{
    constructor(props){
        super(props);
        this.state = {
            conversation: [],
            renderData: [],
        }
    };

    shouldComponentUpdate(nextState){
        if(this.state.renderData === nextState.renderData){
            return false;
        }
        return true;
    }

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
                conversationID: item.conversationID,
                image: item.conversationImage,
                title: item.conversationName,
                message: lastMessage.message,
                time: lastMessage.createdAt
            })
        })

        return renderDataList;
    };

    handleConversationClick = (conversationID, title) => {
        this.props.handleConversationClick (conversationID, title);
    }

    renderConversation = ({item}) =>(
        <ConversationItem
          conversationID = { item.conversationID }
          image = {item.image}
          title = {item.title}
          message = {item.message}
          time = {item.time}
          handleConversationClick = {this.handleConversationClick}>
        </ConversationItem>
    );

    keyExtractor = (item, index) => index.toString();

    render(){
    return(
        <StyleProvider style={getTheme(customTextFont)}>
            <FlatList
              data = { this.state.renderData }
              renderItem = { this.renderConversation }
              keyExtractor = { this.keyExtractor }>            
            </FlatList>
        </StyleProvider>
    )}
}