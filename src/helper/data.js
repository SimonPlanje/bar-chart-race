import * as d3 from "d3"



const fetchData = (setbarRaceState) =>{

    const daySpendDataURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpwttasVjXReLn69FtOXSrwWxYjKqVSKiRenwS9xU76b_-NX6-YRYfRQEwm0ipV3sLAiNPrCz3uO7D/pub?gid=161211961&single=true&output=csv"


async function fetch(url) {
    const data = await d3.csv(url)
    setbarRaceState(data)
    console.log(data)
}

async function dayData() {
    const dayDashboard = await fetch(daySpendDataURL);
    console.log(dayDashboard)
    return dayDashboard;
}

dayData()


} 

export default fetchData