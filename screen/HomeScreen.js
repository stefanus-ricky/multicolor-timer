import React, {useState, useEffect, useRef, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TimerList from '../component/TimerList'
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';
import SliderTimer from '../component/SliderTimer'
import {TimerContext} from '../context/TimerContext'



export default function HomeScreen() {
  const {currentColor, setCurrentColor, stopwatchTimer, setStopwatchTimer } =  useContext(TimerContext)


    return (
        <View style={{width:"100%", flex:1}}>

            {/* 
            
            Empty segment at the top. Only transparent background
            
            */}
            <View style={{backgroundColor:"transparent", flex:1}}>
            </View>

            
            <LinearGradient
                // Background Linear Gradient
                colors={['white', currentColor]}
                style={{flex:1}}

            >
            {/* 
            
            Middle segment. Slider and stopwatch segment 
            
            */}
            <View style={{backgroundColor:"transparent", flex:1}}>
                <SliderTimer />
            </View>


            </LinearGradient>
            {/* 
            
            Bottom segment. List of tier 
            
            */}
            <View style={{backgroundColor:"white", flex:1}}>
                <TimerList />
            </View>
            
            

        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        flexDirection:'collumn'
      },
      topspace:{
        flex:1,
        backgroundColor:"white"

      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
      },
      button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
      },
      text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
      },
    });
    