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
            renderData: [],
        }
    };

    componentDidMount(){

        this.getFriendList(0).then(result => {
            this.setState({friendList: result});

            this.getRenderData().then(result => {
                this.setState({renderData: result})
            });
        });
    };

    async getFriendList(userID){
        var conversations = ContactService.getAllContactOf(userID);

        return conversations;
    };

    async getRenderData(){
        
        var renderDataList = new Array();

        this.state.friendList.forEach(function(user, index, object){
           
            renderDataList.push({
                userID: user.userID,
                image: user.avatarLink,
                title: user.displayName,
              
            })
        })

        console.log(renderDataList);
        return renderDataList;
    }

    renderConversation = ({item}) =>(
        <ContactItem
          userID = {item.userID}
          image = {item.image}
          title = {item.title}
         >
        </ContactItem>
    );

    render(){
    return(

        <StyleProvider style={getTheme(customTextFont)}>
         <SafeAreaView style={styles.container}>
            <SectionList
                sections={[
                    {title:'H',data:this.state.renderData}
                ]}
                renderItem = { this.renderConversation }       
              
                renderSectionHeader = {({section}) =>(
                    <View style={styles.sectionHeader}>
                        <Text>{section.title}</Text>
                    </View>
                )}      
              keyExtractor = {(item, index)=>index.toString()}>            
            </SectionList>
         </SafeAreaView>
            
        </StyleProvider>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },
    row:{
        paddingHorizontal:20,
        paddingVertical:10,
    },
    sectionHeader:{
        backgroundColor: '#efefef',
        paddingHorizontal:20,
        paddingVertical:10,
    }
});