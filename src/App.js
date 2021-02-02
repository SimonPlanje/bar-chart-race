import React, { useEffect, useState, useRef} from 'react'

import BarchartRace from './components/BarchartRace'
import fetchData from './helper/data'

function App() {

  const [barRaceState, setbarRaceState] = useState(null)

  
  useEffect(() => {
    fetchData(setbarRaceState)
      }, [])


  return (
    <div className="App">
   <BarchartRace barRaceState={barRaceState}/>
    </div>
  );
}

export default App;
