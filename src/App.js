import React, { useEffect, useState} from 'react'

import BarchartRace from './components/BarchartRace'
import Loading from './components/Loading'
import fetchData from './helper/data'

function App() {
  
  const [view, setView] = useState('loading');

  const [dayData, setDayData] = useState(null);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {

    async function getData(){
      const daySpendDataURL = "https://docs.google.com/spreadsheets/d/1J4ivHKK5Ttj0-3ME1KQPt4wVwlkrfGkenyEhlo1OnOg/export?format=csv"
      const eventDashboardURL = "https://docs.google.com/spreadsheets/d/1UkvW4wmthdvaaWvvJS_R5CUiCJZXz6fPDlIKE3ulmjM/export?format=csv"
      await setDayData(await fetchData(daySpendDataURL))
      await setEventData(await fetchData(eventDashboardURL))
      await setView('barchart')
    }
    getData()
  }, [])
  
  return (
    <div className="App">
      {view === 'loading' && <Loading  />}
      {view === 'barchart' && <BarchartRace data={dayData} eventData={eventData} />}
    </div>
  )

}

export default App;