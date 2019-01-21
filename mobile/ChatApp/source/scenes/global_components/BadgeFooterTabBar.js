import React, { Component } from "react";
import { Footer, FooterTab, Button, Icon, Text, Badge, Container, Card, CardItem } from 'native-base';
import { Keyboard, View } from 'react-native';

export default class BadgeFooterTabBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            recentChatBadge: 0,
            contactBadge: 0,
            groupBadge: 0,

            visible: true
        };

    };

    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    };
    

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    };
    
    _keyboardDidShow () {
        this.setState({ visible: false });        
    };
    
    _keyboardDidHide () {
        this.setState({ visible: true });
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
        this.state.visible && 
        <View style = {{backgroundColor: "white", 
                        elevation: 10,
                        shadowColor: "#000",
                        shadowOffset: {width: 0, height: 5},
                        shadowRadius: 5,
                        shadowOpacity: 0.75,
                        overflow: "visible"}}>
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
        </View>
    );
  }
}