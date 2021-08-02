import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet,View, Text, TouchableOpacity, } from "react-native";
import { Slider } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import {TimerContext} from '../context/TimerContext'


 


export default function Stopwatch({currentTime, forceRender}) {
    const {
        isActive,
        startTime,
        timeSeconds, setTimeSeconds,
        timeMinutes, setTimeMinutes,
        timeHours, setTimeHours,
        stopwatchTimer, currentColor
        } =  useContext(TimerContext)


    const countRef = useRef(null);
    const secondsRef = useRef(null);
    const correctionRef = useRef(null);

    secondsRef.current= timeSeconds

    //
    // function recalibrateTimer
    //
    useEffect(() => {
        if(isActive){
            correctionRef.current = setInterval(() => {
                let now = Date.now()
                let timer = now - startTime + stopwatchTimer[currentColor]
                // console.log("start correction")
                // console.log({timer, b:now-startTime, a:stopwatchTimer[currentColor]})
                loadTime(timer)
            }, 1000);
        }
        if(!isActive){
            clearInterval(correctionRef.current)
        }
        // if (prevArray && someArray && prevArray.someArray !== someArray || !someArray[position]) {
        //   clearInterval(timer);
        // }
        return () => clearInterval(correctionRef.current);
      }, [isActive, startTime]);

    
    function increaseSecond(){
        // console.log({timeSeconds, timeMinutes, ref:secondsRef.current})
        secondsRef.current+=1
        if(secondsRef.current>=60){
            increaseMinute()
            secondsRef.current = 0
            // console.log({timeSeconds, timeMinutes, ref:secondsRef.current})
        }
        setTimeSeconds(secondsRef.current)
    }

    function increaseMinute(){
        if(timeMinutes>=59){
            setTimeHours(hour=> hour+1)
        }
        setTimeMinutes(min=> (min+1)%60)
    }




    const formatTime = (timer) => {
        // console.log(timer)
        timer = Math.floor(timer/1000)
        const getSeconds = Math.floor(timer % 60)
        const minutes = (timer- getSeconds) / 60
        const getMinutes = minutes %60
        const getHours = Math.floor(minutes/60)
        // console.log({getHours, getMinutes, getSeconds, timer})
        return {getHours, getMinutes, getSeconds}
    }
  
    function loadTime(timer){
        const {getHours, getMinutes, getSeconds} = formatTime(timer)
        setTimeHours(getHours)
        setTimeMinutes(getMinutes)
        setTimeSeconds(getSeconds)
    }

  // function handlePause(){
  //   if(!checked) return
  //   setChecked(current=>!current)
  //   setStopwatchStart(current=>!current)
  //   console.log("pause")
  // }
  
    function handleStop(){
        setChecked(false)
        // setStopwatchReset(current=>!current)
        setStopwatchReset(true)
        setStopwatchStart(false)
        // setStartTime(0)
    }

    useEffect(()=>{
        const {getHours, getMinutes, getSeconds} = formatTime(currentTime)
        setTimeHours(getHours)
        setTimeMinutes(getMinutes)
        setTimeSeconds(getSeconds)
    },[forceRender])

    useEffect(()=>{
        if(isActive){
            countRef.current = setInterval(() => {
                increaseSecond()
            }, 1000)
        } else {
            clearInterval(countRef.current)
        }

    },[isActive])


    function addZero(num){
        if(num<10){
            return "0"+num
        }
        return num
    }


    return (   
    <View style={styles.container}>

        <Text style={styles.text}>{addZero(timeHours)}:{addZero(timeMinutes)}
        </Text>
        <Text style={styles.seconds}>:{addZero(timeSeconds)}</Text>
      </View>
    )

    
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'transparent',
    padding: 5,
    flexDirection:"row",
    flexBasis:"auto"
    // borderRadius: 5,
  },
  text: {
    flex:0,
    fontSize: 70,
    color: '#000',
    fontWeight:'bold',
    marginLeft: 5,
    marginBottom: 5,
  },
  seconds:{
    flex:1,
    fontSize: 35,
    color: '#000',
    fontWeight:'bold',
    marginLeft: 5,
    marginBottom: 5,
    alignSelf:"flex-end"
  }
  });