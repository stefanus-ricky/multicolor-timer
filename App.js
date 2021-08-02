import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import HomeScreen from './screen/HomeScreen'
import Sandbox from "./component/Sandbox"
import {TimerProvider} from "./context/TimerContext";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
      <TimerProvider>
        <HomeScreen />
        {/* <Sandbox/> */}
        <StatusBar style="auto" />
      </TimerProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 25 : 0
},
});
