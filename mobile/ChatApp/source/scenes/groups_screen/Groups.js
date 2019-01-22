import React, { Component } from "react";
import { Container } from 'native-base'
import { View,SectionList ,Text} from 'react-native'
export default class Groups extends Component{
    constructor(props){
        super(props);      
    };

    render(){
       return(
           
        <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={[
          {title: 'Title1', data: ['item1', 'item2']},
          {title: 'Title2', data: ['item3', 'item4']},
          {title: 'Title3', data: ['item5', 'item6']},
        ]}
        keyExtractor={(item, index) => item + index}
      />
        
    )}
}