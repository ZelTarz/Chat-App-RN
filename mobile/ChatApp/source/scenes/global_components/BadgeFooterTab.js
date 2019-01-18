import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class BadgeFooterTabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            recentChatBadge: 0,
            contactBadge: 0,
            groupBadge: 0,
        };

    };

    toogleRecentChatTab(){

        const {navigate} = this.props.navigation
        navigate("RecentChat");

    };

    tooglecontactTab(){

        const {navigate} = this.props.navigation
        navigate("Contacts");

    };

    tooglegroupTab(){

        const {navigate} = this.props.navigation
        navigate("Groups");

    };

    render() {
    return (
        <Footer>
          <FooterTab style = {{backgroundColor: 'white'}}>
            <Button 
              active={this.props.navigation.state.index === 0}
              onPress={() => this.toogleRecentChatTab()}
              badge 
              vertical>
              <Badge><Text>{this.state.recentChatBadge}</Text></Badge>
              <Icon active={this.props.navigation.state.index === 0} type="MaterialIcons" name="chat" />
              {this.props.navigation.state.index === 0 && <Text>Messages</Text>}
            </Button>

            <Button
              active={this.props.navigation.state.index === 1}
              onPress={() => this.tooglecontactTab()}
              badge
              vertical>
              <Badge ><Text>{this.state.contactBadge}</Text></Badge>
              <Icon active={this.props.navigation.state.index === 1} type="MaterialIcons" name="contacts" />
              {this.props.navigation.state.index === 1 && <Text>Contact</Text>}
            </Button>

            <Button 
              active={this.props.navigation.state.index === 2}
              onPress={() => this.tooglegroupTab()} 
              badge 
              vertical>
              <Badge ><Text>{this.state.groupBadge}</Text></Badge>
              <Icon active={this.props.navigation.state.index === 2} type="FontAwesome" name="group" />
              {this.props.navigation.state.index === 2 && <Text>Group</Text>}
            </Button>

          </FooterTab>
        </Footer>
    );
  }
}