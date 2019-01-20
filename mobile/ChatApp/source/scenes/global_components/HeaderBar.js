import React, { Component } from "react";
import { Header, Thumbnail,Item, Icon, Input } from 'native-base'
import UserService from '../../services/UserService'

export default class HeaderBar extends Component{
    constructor(props){
        super(props);

        this.state={
            userAvatar: null
        }  
    }
    
    componentDidMount(){
        this.getUserAvatar(this.props.userID).then(result => {
            this.setState({userAvatar: result});
        });
    }

    async getUserAvatar(userID){
        var userInfo = UserService.getUserInfo(userID);
        return userInfo.avatarLink;
    }

    render(){
        return(
            <Header searchBar rounded>
                <Thumbnail small style={{marginRight: 10, alignSelf: "center"}}  source={{uri: this.state.userAvatar}}></Thumbnail>
                <Item>
                    <Icon name="md-search" />
                    <Input placeholder="Search friends, messages,..." />
                </Item>
            </Header>)
    }
}

