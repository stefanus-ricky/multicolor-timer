import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import { StyleSheet,View, Text, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'
import Timer from './Timer'
import {TimerContext} from '../context/TimerContext'


// const colorList = [
//     "#ff280f",
//     "#1f08fc",
//     "#3afc97",
//     "#fcdc21",
//     "#f310ff",
//     "#0bf9f9",
//     "#b5f93d",
//     "#f98e23"
// ]


export default function TimerList() {
  const {colorList} =  useContext(TimerContext)

  return (
    <View style={{flex:1, flexDirection:"row", margin:30}}>
        <View style={{flex:1, flexDirection:"row", flexWrap:"wrap",  justifyContent:"center", }}>
        {
            colorList.map( (color, index)=> <Timer color={color} key={index} index={index}  />)
        }
        </View>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundImage: LinearGradient("top top", "red", "white")
    },
    timerContainer:{
        flex:0, flexBasis:"25%", 
        flexShrink:0, 
        alignSelf:'center',  
        width:"100%", 
        height:"50%", 
        // backgroundColor:"yellow",
    },
    timerButton:{
        flex:0, 
        flexShrink:0, 
        justifyContent:"center", 
        alignItems:"center",  
        aspectRatio:1,  
        height:"66%", 
        flexBasis:"66%", 
        // backgroundColor:"green"
    },
    timerSquare:{
        flex:1,     
        flexBasis:"auto", 
        
        flex:0, 
        // width:"100%",
        // aspectRatio:1,  
        width:50,
        height:50,
        
        backgroundColor:"blue", 
        borderRadius:12 , 
        borderWidth:2, 
        borderColor:"black", 
        flexShrink:0, 
    }
  });
  