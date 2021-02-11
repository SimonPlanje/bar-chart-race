import React, { useEffect, useState} from 'react'

import BarchartRace from './components/BarchartRace'
import Loading from './components/Loading'
import fetchData from './helper/data'

function App() {

  const [barRaceState, setbarRaceState] = useState(null)
  const [eventState, setEventState] = useState(null)
  const [dataState, setDataState] = useState('loading')


  useEffect(() => {

      async function getData(){
      await fetchData(setbarRaceState, setEventState, setDataState)
    }
getData()
      }, [])


if(dataState === 'loading'){
  return (
    <div className="App">
   <Loading  />
    </div>
  )
}else if(dataState === "finished"){

  return (
    <div className="App">
   <BarchartRace  barRaceState={barRaceState} eventState={eventState} />
    </div>
  )
  }
}

export default App;
