import React, { useEffect, useState} from 'react'

import BarchartRace from './components/BarchartRace'
import Loading from './components/Loading'
import fetchData from './helper/data'

function App() {


  const [dataState, setDataState] = useState('loading')


  useEffect(() => {

      async function getData(){
      await fetchData(setDataState)
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
   <BarchartRace />
    </div>
  )
  }


}

export default App;
