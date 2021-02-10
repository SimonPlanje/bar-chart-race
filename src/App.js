import React, { useEffect, useState} from 'react'

import BarchartRace from './components/BarchartRace'
import fetchData from './helper/data'

function App() {

  const [barRaceState, setbarRaceState] = useState(null)
  const [eventState, setEventState] = useState(null)

  
  useEffect(() => {

      fetchData(setbarRaceState, setEventState)

      }, [])





  return (
    <div className="App">
   <BarchartRace barRaceState={barRaceState}/>
    </div>
  );
}

export default App;
