import * as d3 from "d3"



const fetchData = (setbarRaceState, setEventState) =>{

    const daySpendDataURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpwttasVjXReLn69FtOXSrwWxYjKqVSKiRenwS9xU76b_-NX6-YRYfRQEwm0ipV3sLAiNPrCz3uO7D/pub?gid=161211961&single=true&output=csv"
    const eventDashboardURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ispSJft5GVxwMtalNZLqlwrk6j9Ig2azCOlGp0IGfrDbKTFBinaOpgGou1Nyz-_w2-sIqii0_DwK/pub?gid=0&single=true&output=csv"

    d3.csv(eventDashboardURL).then(data => {
        console.log(data)
        setEventState(data)
    })

    d3.csv(daySpendDataURL).then(data => {
        console.log(data)
        setbarRaceState(data)
    })

// async function fetch(url) {
//     const data = await d3.csv(url)
//     console.log(data)

//     return data
// }

// fetch(daySpendDataURL)

// async function dayData() {
//     const response = await fetch(daySpendDataURL);
//     // console.log(response)
//     // return response;
// }

// dayData()


} 

export default fetchData