import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import Slider from './CustomSlider'


const App = () => {
  const [active, setActive] = useState(false)
  let transformX = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (active) {
      Animated.timing(transformX, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(transformX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }, [active]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [2, Dimensions.get('screen').width / 2]
  })


  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center'
    }}>
      <Slider/>
    </SafeAreaView>
  )
}
export default App