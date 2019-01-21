import React, { Component } from "react";
import { StyleProvider,Text } from 'native-base';
import {SectionList,StyleSheet ,SafeAreaView,View} from 'react-native'
import ContactItem from './ContactItem'
import ContactService from '../../../services/ContactService'
import getTheme from '../../../native-base-theme/components';
import customTextFont from '../../../native-base-theme/variables/customTextFont';

export default class ListContact extends Component{
    constructor(props){
        super(props);
        this.state = {
            friendList: [],
        }
    };

    componentDidMount(){
        this.getFriendList(0).then(result => {
            this.setState({friendList: result});
        });
    };

    async getFriendList(userID){
        var conversations = ContactService.getAllContactOf(userID);
        return conversations;
    };

    renderFriendList = ({item}) =>(
        <ContactItem
          userID = {item.userID}
          image = {item.avatarLink}
          title = {item.displayName}
         >
        </ContactItem>
    );

    render(){
    return(
        <StyleProvider style={getTheme(customTextFont)}>            
                <SectionList style={styles.container}
                    sections={[
                        {title:'H',data:this.state.friendList}
                    ]}
                    renderItem = { this.renderFriendList }                 
                    renderSectionHeader = {({section}) =>(
                        <View style={styles.sectionHeader}>
                            <Text>{section.title}</Text>
                        </View>
                    )}      
                    keyExtractor = {(item, index)=>index.toString()}>            
                </SectionList>  
        </StyleProvider>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },
    sectionHeader:{
        backgroundColor: '#efefef',
        paddingHorizontal:20,
        paddingVertical:10,
    }
});