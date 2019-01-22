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

    shouldComponentUpdate(nextState){
        if(this.state.renderData === nextState.renderData){
            return false;
        }
        return true;
    }

    componentDidMount(){
        this.getFriendList(0).then(result => {
            this.setState({friendList: result});

            this.createRenderSection().then(result => {
                this.setState({renderData: result});
            })
        });
    };

    async createRenderSection(){

        const friendList = this.state.friendList;
        var renderDataList = new Array();
  
        friendList.forEach(function(data, index, object){
  
          var flagFound = false;

          renderDataList.forEach(function(section, indexs, objects){
            if( data.displayName.charAt(0) === section.title ){
              flagFound = true;
              objects[indexs].data.push(data);
            }
          })
  
          if(flagFound === false)
          {
            renderDataList.push({title: data.displayName.charAt(0), data: [data]});
          }
        });

        renderDataList.sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;});

        return renderDataList;
    }

    async getFriendList(userID){
        var conversations = ContactService.getAllContactOf(userID);
        return conversations;
    };

    renderFriendList = ({item}) =>(
        <ContactItem
          userID = {item.userID}
          image = {item.avatarLink}
          displayName = {item.displayName}
          userName = {item.userName}
         >
        </ContactItem>
    );

    keyExtractor = (item, index) => index.toString();

    render(){
    return(
        <StyleProvider style={getTheme(customTextFont)}>            
                <SectionList style={styles.container}
                    sections={this.state.renderData}
                    renderItem = { this.renderFriendList }                 
                    renderSectionHeader = {({section}) =>(
                        <View style={styles.sectionHeader}>
                            <Text>{section.title}</Text>
                        </View>
                    )}      
                    keyExtractor = {this.keyExtractor}>            
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