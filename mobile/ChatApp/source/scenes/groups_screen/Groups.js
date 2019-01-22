import React, { Component } from "react";
import { Container } from 'native-base'
import { View,SectionList ,Text} from 'react-native'
export default class Groups extends Component{
    constructor(props){
        super(props);
        
        this.state = {
          data : ['Aaron Bennet', 'Ali Connors', 'Allen Lee', 'Andy Hertzfeld', 'Bradley Horowitz', 'Brian Swetland', 'Brittany Kelso', 'Caroline Aaron', 'Cendre Urbino', 'Claire Barclay'],
          section : [
            {
              title : "A", data : ['Aaron Bennet', 'Ali Connors', 'Allen Lee', 'Andy Hertzfeld']
            },
            {
              title : "B", data : ['Bradley Horowitz', 'Brian Swetland', 'Brittany Kelso']
            },
            {
              title : "C", data : ['Caroline Aaron', 'Cendre Urbino', 'Claire Barclay']
            }
          ]
        };
    };

    async componentDidMount(){
      const renderData = this.state.data;
      const renderSection = [];

      console.log("renderData: ", renderData);
      console.log("renderSection: ", renderSection);

      await renderData.forEach(function(data, index,object){

        console.log("title of data: ", data.charAt(0));

        var flagFound = false;
        renderSection.forEach(function(section, indexs, objects){
          if( data.charAt(0) == section.title ){
            flagFound = true;
            objects[indexs].data.push(data);
          }
        })

        if(flagFound === false)
        {
          renderSection.push({title: data.charAt(0), data: [data]});
        }
      });

      console.log("renderData after: ", renderData);
      console.log("renderSection after: ", renderSection);
      console.log("renderSection state: ", this.state.section);
    }

    render(){
       return(
           
        <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={this.state.section}
        keyExtractor={(item, index) => item + index}
      />
        
    )}
}