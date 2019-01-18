import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class BadgeFooterTabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            recentChatTab: true,
            contactTab: false,
            groupTab: false,
            recentChatBadge: 0,
            contactBadge: 0,
            groupBadge: 0,
        };
    };

    toogleRecentChatTab(){
        this.setState({
            recentChatTab: true,
            contactTab: false,
            groupTab: false
        });

        const {navigate} = this.props.navigation
        navigate("RecentChat");
    };

    tooglecontactTab(){
        this.setState({
            recentChatTab: false,
            contactTab: true,
            groupTab: false
        });

        const {navigate} = this.props.navigation
        navigate("Contacts");
    };

    tooglegroupTab(){
        this.setState({
            recentChatTab: false,
            contactTab: false,
            groupTab: true
        });

        const {navigate} = this.props.navigation
        navigate("Groups");
    };

    render() {
    return (
        <Footer>
          <FooterTab style = {{backgroundColor: 'white'}}>
            <Button 
              active={this.state.recentChatTab}
              onPress={() => this.toogleRecentChatTab()}
              badge 
              vertical>
              <Badge><Text>{this.state.recentChatBadge}</Text></Badge>
              <Icon active={this.state.recentChatTab} type="MaterialIcons" name="chat" />
              {this.state.recentChatTab && <Text>Messages</Text>}
            </Button>

            <Button
              active={this.state.contactTab}
              onPress={() => this.tooglecontactTab()}
              badge
              vertical>
              <Badge ><Text>{this.state.contactBadge}</Text></Badge>
              <Icon active={this.state.contactTab} type="MaterialIcons" name="contacts" />
              {this.state.contactTab && <Text>Contact</Text>}
            </Button>

            <Button 
              active={this.state.groupTab}
              onPress={() => this.tooglegroupTab()} 
              badge 
              vertical>
              <Badge ><Text>{this.state.groupBadge}</Text></Badge>
              <Icon active={this.state.groupTab} type="FontAwesome" name="group" />
              {this.state.groupTab && <Text>Group</Text>}
            </Button>

          </FooterTab>
        </Footer>
    );
  }
}