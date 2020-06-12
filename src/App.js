import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Setting from './Setting';
import Time from './Time';
import Ling from './Ling';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const [time, setTime] = useState(null);
  useInterval(() => {
    if (time >= 1) {
      setTime(time - 1);
    }
  }, 1000);
  const stop = () => {
    setTime(null);
  }
  const set = (time) => {
    setTime(time);
  }
  // useEffect(() => {
  //   console.log('useEffect')
  //   // setTimeoutid(setTimeout(up, 1000));
  //   // up();
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        {
          (() => {
            if (time == null) {
              return (
                <Setting set={set} />
              )
            } else if (time==0) {
              return (
                <Ling stop={stop} />
              )
            } else if (time > 0) {
              return (
                <Time stop={stop} time={time} />
              )
            }
          })()
        }
      </header>
    </div>
  );
}

export default App;
