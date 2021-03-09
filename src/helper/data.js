import * as d3 from "d3"

async function fetchData(link){
    async function getData(name){
        const data = await d3.csv(name)
        return data
    }

    async function getAllData() {
        const data = await getData(link)

        return data
    }

    return getAllData().catch((err) => {
        console.log(err)
    });

} 

export default fetchData