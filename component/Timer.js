import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import { StyleSheet,View, Text, TouchableOpacity } from "react-native";
import {TimerContext} from '../context/TimerContext'




export default function Timer({color, index, handleColorChange}) {
  const {currentColor, setCurrentColor, stopwatchTimer, setStopwatchTimer, loadSelectedColorTimer } =  useContext(TimerContext)
  const [bgColor, setBgColor]= useState(color)

  function timerPressHandler (){
    if(currentColor == color){
      console.log("current color, do nothing")
      return
    }
    // console.log("press")
    setCurrentColor(color)
    // load new color timer
    loadSelectedColorTimer(color)
  }
  return (
    <View style={styles.timerContainer}>
      <TouchableOpacity  onPress={timerPressHandler} style={[styles.timerButton]}>
          <View style={[styles.timerSquare , {backgroundColor: bgColor}]}>

          </View>

      </TouchableOpacity>

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
        width:66,
        height:66,
        
        borderRadius:10 , 
        borderWidth:4, 
        borderColor:"black", 
        flexShrink:0, 
    }
  });