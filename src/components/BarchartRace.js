import * as d3 from "d3"

function BarchartRace(barRaceState) {

    if(barRaceState !== null){
        console.log(barRaceState)

        let partijLijst = []

        function getPartijen(data){
           let partijen = data.map(d => d.partij)
           partijLijst.push(partijen)
        }

        getPartijen(barRaceState)

        console.log.log(partijLijst)
    
    // console.log(partijen)
    }else{
        console.log('data is not loaded')
    }
  

    return (
      <div className="App">
     
      </div>
    );
  }
  
  export default BarchartRace;
  