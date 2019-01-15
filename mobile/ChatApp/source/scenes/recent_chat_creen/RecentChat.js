import React, { Component } from "react";
import ListConversation from  './components/ListConversation';

export default class RecentChat extends Component{
    constructor(props){
        super(props);
        
    };

    render(){
    return(
        <ListConversation></ListConversation>
    )}
}