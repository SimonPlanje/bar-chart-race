import * as d3 from "d3"



const fetchData = (setbarRaceState, setEventState) =>{

    const daySpendDataURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpwttasVjXReLn69FtOXSrwWxYjKqVSKiRenwS9xU76b_-NX6-YRYfRQEwm0ipV3sLAiNPrCz3uO7D/pub?gid=161211961&single=true&output=csv"
    const eventDashboardURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS0ispSJft5GVxwMtalNZLqlwrk6j9Ig2azCOlGp0IGfrDbKTFBinaOpgGou1Nyz-_w2-sIqii0_DwK/pub?gid=0&single=true&output=csv"

    async function getData(name){
        const data = await d3.csv(name)
        return data
    }


    async function getAllData() {
            const dayData = await getData(daySpendDataURL)
            const eventData = await getData(eventDashboardURL)

            console.log(dayData)
            console.log(eventData)

    }

    getAllData().catch((err) => {
        console.log(err)
        console.log("handled!")
    })


} 

export default fetchData