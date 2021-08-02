import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet,View, Text, TouchableOpacity, Switch, } from "react-native";
import { Slider } from 'react-native-elements';
import { Icon } from 'react-native-elements';
// import { Stopwatch } from 'react-native-stopwatch-timer'
import Stopwatch  from './Stopwatch'
import {TimerContext} from '../context/TimerContext'

// import Switch from "react-switch";
// import ToggleSwitch from 'toggle-switch-react-native'
import useTimer from '../lib/useTimer';
import CustomSlider from './CustomSlider'




function Thumb (){
  return (   
    <Icon
      name="square"
      type="font-awesome"
      size={20}
      reverse
      containerStyle={{ bottom: 30, right: 30 }}
      color="transparent"
    />
  )
}








export default function SliderTimer() {
  // const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)
  const {
    currentTime, setCurrentTime, 
    stopwatchTimer,
    startTime, setStartTime, 
    isActive, setIsActive, 
    isPaused, setIsPaused, 
    forceRender, triggerForceRender,
    resetTimerData, saveTimerData,
    isDefaultState,setIsDefaultState,
    isSliderDisabled, setIsSliderDisabled,
    sliderValue, setSliderValue,
    loadSelectedColorTimer, currentColor
    } =  useContext(TimerContext)

  const [checked, setChecked] = useState(0)
  const [stopwatchStart, setStopwatchStart] = useState(false)


  function handleSwitch (){
    setChecked(true)
    setIsActive(true)
    setStartTime(()=>Date.now())
    // console.log({startTime})
    setIsDefaultState(false)
    // loadSelectedColorTimer(currentColor)
    
  }

  function handlePause(){
    if(!checked) return
    // console.log({startTime})

    setChecked(false)
    setIsActive(false)
    // reset slider
    setSliderValue(()=>[0])
    let time = Date.now() - startTime + stopwatchTimer[currentColor]
    stopwatchTimer[currentColor] = time
    // console.log({time})
    setIsSliderDisabled(false)
    // console.log("pause")
  }
  
  function handleStop(){
    setChecked(false)
    setIsActive(false)
    // reset the timer
    resetTimerData()
    // reset slider
    setSliderValue(()=>[0])
    setIsSliderDisabled(false)
    console.log("stop")
  }


// stopwatch options
const options = {
  container: {
    backgroundColor: 'transparent',
    padding: 5,
    // borderRadius: 5,
  },
  text: {
    fontSize: 55,
    color: '#000',
    marginLeft: 5,
    marginBottom: 5
  },
  startTime:{
    startTime
  }
};




    return (
      <View style={styles.mainContainer}>
          {/* timer and slider collumn */}
          <View style={styles.secondaryContainer}>
            <View style={styles.timerSliderContainer}>
              <View style={styles.timer}>
                <Stopwatch isActive={isActive} isPaused={isPaused} startTime={startTime} currentTime={currentTime} forceRender={forceRender}/>
                
              </View>

              <View style={styles.toggleSlider}>
                <CustomSlider  handleSwitch={handleSwitch}/>
              </View>
            </View>


            {/* pause and stop button collumn */}
            <View style={styles.pauseStopContainer}>
              {isDefaultState || 
              <TouchableOpacity style={{}}>
                <Icon
                  name="stop-circle"
                  type="font-awesome"
                  size={60}
                  containerStyle={{ margin:5,  }}
                  onPress={handleStop}
                />
              </TouchableOpacity>
              }
              {isDefaultState || 
              <TouchableOpacity style={{}}>
                <Icon
                  name="pause-circle"
                  type="font-awesome"
                  size={60}
                  containerStyle={{ margin:5,  }}
                  onPress={handlePause}
                />
              </TouchableOpacity>
              }
            </View>




            
          </View>
      </View>
    );

    
}

const styles = StyleSheet.create({
  mainContainer:{
    // alignSelf:"flex-end",
    height: "100%",
    flexDirection:"collumn",
    backgroundColor:"transparent",
    alignItems:"flex-start",
    // alignItems:"stretch",
    justifyContent: 'flex-end',
    flexWrap:"wrap"

  },
  secondaryContainer: {
    // flex: 1,
    flexDirection:"row",
    // flexBasis:"100%",
    width:"100%",
    height:"80%"
    // alignItems:"stretch",
    // flexWrap:"wrap", 
    // backgroundColor:"white"
  },
  timerSliderContainer:{
    flexDirection:"collumn",
    flexBasis:"70%",
    height:"100%"

  },
  pauseStopContainer:{
    flexBasis:"30%",
    marginTop:20
  },
    
  timer:{
    flex:1,
    flexBasis:"80%",
    // alignSelf:"flex-start",
    backgroundColor:"transparent",
    padding:10 ,
    height:100
  },
  toggleSlider:{
    backgroundColor:"transparent",
    flex:1,
    flexBasis:"100%",
    marginTop:33,
    marginBottom:20,
    marginLeft:50,
    height:"auto"
  }
  });