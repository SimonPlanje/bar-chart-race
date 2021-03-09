import React, { Component } from 'react'

import BarchartRace from './components/BarchartRace'
import Loading from './components/Loading'
import fetchData from './helper/data'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      view: 'loading',
      dayData: null,
      eventData: null
    }
  }

  componentDidMount() {
    this.getData()
  }
  
  async getData(){
    const urlParams = new URLSearchParams(window.location.search);
    const version = urlParams.get('version');
    
    let daySpendDataURL = "https://docs.google.com/spreadsheets/d/1zBQlY4VlalwP2sXshquH8zwrWmLfS5F0K5cF8RJKyNU/export?format=csv"
    if (version === 'person') {
      daySpendDataURL = "https://docs.google.com/spreadsheets/d/1B_qKfhHgFp96MpAuwQA_XHmEVYi22WE2RLKYIpnQFVA/export?format=csv"
    }
    
    const eventDashboardURL = "https://docs.google.com/spreadsheets/d/1UkvW4wmthdvaaWvvJS_R5CUiCJZXz6fPDlIKE3ulmjM/export?format=csv"
    this.setState({
      dayData: await fetchData(daySpendDataURL),
      eventData: await fetchData(eventDashboardURL),
      view: 'barchart'
    });
  }
  
  render() {
    if (this.state.view === 'loading') {
      return (<div className="App"><Loading /></div>);
    } else {
      return (<div className="App"><BarchartRace data={this.state.dayData} eventData={this.state.eventData} /></div>);
      
    }
   }

}

export default App;