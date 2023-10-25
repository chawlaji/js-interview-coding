 import {React,useState,useEffect,useRef,useCallback} from 'react';
 const useTimer = (time)=>{
let timer =useRef(null);

  const [isRunning,setIsR] = useState(false);
  const [seconds,setSeconds] =useState(time);
  const start =useCallback(()=>{
    setIsR(true);
   timer.current = setInterval(() => {
      setSeconds((state)=> state -1);
    }, 1000);
  }
  ,[setIsR,setSeconds])
  const stop =useCallback (()=>{
    clearInterval(timer.current);
    setIsR(false);
    setSeconds(time);

  },[setIsR,setSeconds,time])

  const pause =useCallback (()=>{
    clearInterval(timer.current);
    setIsR(false);
  },[setIsR])
  
  useEffect(()=>{
    if(seconds < 1){
      stop();
    }
  },[seconds,stop])

   useEffect(()=>{
    return ()=>timer && clearInterval(timer.current);
  },[])
return {
  isRunning,
  start,
  stop,
  pause,
  seconds
}
}
export default useTimer;
