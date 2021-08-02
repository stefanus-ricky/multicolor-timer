import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect, useRef} from 'react';
import { StyleSheet,View, Text, TouchableOpacity } from "react-native";
import {TimerContext} from '../context/TimerContext'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Square from './Square'




export default function CustomSlider({handleSwitch}) {
  const {currentColor, setCurrentColor, stopwatchTimer, setStopwatchTimer, loadSelectedColorTimer, 
    isSliderDisabled, setIsSliderDisabled,
    sliderValue, setSliderValue
    } =  useContext(TimerContext)
  const SLIDER_SPEED = 3
  const SLIDER_INTERVAL = 1
  // const [sliderValue, setSliderValue]= useState([0])
  // const [isSliderDisabled, setIsSliderDisabled]= useState(false)
  const valueRef = useRef(sliderValue[0]);

  // useEffect(()=>{
  //   if(value>0){
      
  //   }
  //   return
  // },[value])
  // function handleSliderChange (){
  // }
  


  function animationHandler(val){
    if(isSliderDisabled){
      return
    }
    let currentValue = val[0]
    // slide right if at least half
    setSliderValue(()=>val)
    valueRef.current = val[0]
    if(currentValue>50){
      // animate slide right
      slideRight();
    } else {
      // slide left
      slideLeft()
    }
  }

  function slideRight(){
    let sliding= setInterval(
      ()=>{
        if(valueRef.current>=100){
          console.log({value: sliderValue})
          setIsSliderDisabled(true)
          handleSwitch()

          clearInterval(sliding)
        }
        valueRef.current += SLIDER_SPEED
        setSliderValue( val=>[val[0]+SLIDER_SPEED])
      },
      SLIDER_INTERVAL
    )
  }
  function slideLeft(){
    let sliding= setInterval(
      ()=>{
        if(valueRef.current<=0){
          clearInterval(sliding)
        }
        valueRef.current -= SLIDER_SPEED
        setSliderValue( val=>[val[0]-SLIDER_SPEED])
      },
      SLIDER_INTERVAL
    )
  }


  return (
    <View 
    // style={{padding:2, backgroundColor:'black'}}
    
    >   
      <MultiSlider
        values={sliderValue}  
        min={0}
        max={100}
        style={[styles.black]} 
        trackStyle={styles.track}
        selectedStyle={{color:'black', backgroundColor:'white'}}
        onValuesChangeFinish={animationHandler}
        sliderLength={180}
        customMarker={Square}
        enabledOne={!isSliderDisabled}
        // markerStyle={{top:25}}

      />
          

    </View>
  );

    
}

const styles = StyleSheet.create({

  track:{
    width:100, 
    height:40,
    backgroundColor:'white',
    // borderColor:'black',
    // borderWidth:5,
  },
  black:{
    backgroundColor:'black',
    borderWidth:5,
    borderColor:'black'
  },
});