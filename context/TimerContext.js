import color from "color";
import React, {useContext, useState, useRef, useEffect} from "react";



const TimerContext = React.createContext();

function TimerProvider ({children}) {
  const [currentColor, setCurrentColor] = useState('#ff280f'); 
  const [stopwatchTimer, setStopwatchTimer] = useState({
    "#ff280f":0,
    "#1f08fc":0,
    "#3afc97":0,
    "#fcdc21":0,
    "#f310ff":0,
    "#0bf9f9":0,
    "#b5f93d":0,
    "#f98e23":0
  });
  const [currentTime, setCurrentTime] = useState(0)
  const [startTime, setStartTime] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isDefaultState, setIsDefaultState] = useState(true)

  const [isPaused, setIsPaused] = useState(false)
  const [forceRender, triggerForceRender] = useState(0)


  const [timeSeconds, setTimeSeconds] = useState(57)
  const [timeMinutes, setTimeMinutes] = useState(55)
  const [timeHours, setTimeHours] = useState(0)

  const [isSliderDisabled, setIsSliderDisabled]= useState(false)
  const [sliderValue, setSliderValue]= useState([0])


  function saveTimerData(){
    // let time = (timeSeconds + timeMinutes*60 + timeHours*3600) * 1000
    let timer = Date.now() - startTime + stopwatchTimer[currentColor]
    stopwatchTimer[currentColor] = timer
  }

  function resetTimerData(){
    let temp = new Object()
    for(let index in stopwatchTimer){
      temp[index] = 0;
    }
    setStopwatchTimer(temp)
    // setStopwatchTimer({
    //   "#ff280f":0,
    //   "#1f08fc":0,
    //   "#3afc97":0,
    //   "#fcdc21":0,
    //   "#f310ff":0,
    //   "#0bf9f9":0,
    //   "#b5f93d":0,
    //   "#f98e23":0
    // })
    setCurrentTime(0)
    // setTimeSeconds(0)
    // setTimeMinutes(0)
    // setTimeHours(0)
    setIsDefaultState(true)
    triggerForceRender(count=>count+1)
  }





  function loadSelectedColorTimer(color){
    // console.log(`saving data from ${currentColor}`)
    // save current color timer
    if(isActive){
      saveTimerData()
    }
    // console.log(`loading data from ${color}`)
    // console.log(stopwatchTimer[color])
    setCurrentTime(stopwatchTimer[color])
    setStartTime(()=>Date.now())
    triggerForceRender(count=>count+1)

  }


  const colorList = [
    "#ff280f",
    "#1f08fc",
    "#3afc97",
    "#fcdc21",
    "#f310ff",
    "#0bf9f9",
    "#b5f93d",
    "#f98e23"
  ]




  return (
    <TimerContext.Provider value={{
        currentColor, 
        setCurrentColor,
        stopwatchTimer,
        setStopwatchTimer,
        colorList,
        loadSelectedColorTimer,
        currentTime, setCurrentTime,
        startTime, setStartTime,
        isActive, setIsActive,
        isPaused, setIsPaused,
        forceRender, triggerForceRender,
        timeSeconds, setTimeSeconds,
        timeMinutes, setTimeMinutes,
        timeHours, setTimeHours,
        resetTimerData,
        isDefaultState, setIsDefaultState,
        isSliderDisabled, setIsSliderDisabled,
        sliderValue, setSliderValue,
        saveTimerData
      }} >

        {children}



    </TimerContext.Provider>
  );
};


export {TimerProvider, TimerContext}