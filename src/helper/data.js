import * as d3 from "d3"

async function fetchData(setDataState){

    if(localStorage.data){
        console.log('all clear')
        setDataState('finished')

        return
    }else{
        const daySpendDataURL = "https://docs.google.com/spreadsheets/d/1zBQlY4VlalwP2sXshquH8zwrWmLfS5F0K5cF8RJKyNU/export?format=csv"
        const eventDashboardURL = "https://docs.google.com/spreadsheets/d/1UkvW4wmthdvaaWvvJS_R5CUiCJZXz6fPDlIKE3ulmjM/export?format=csv"
    
        async function getData(name){
            const data = await d3.csv(name)
            return data
        }
    
        async function getAllData() {
                const dayData = await getData(daySpendDataURL)
                const eventData = await getData(eventDashboardURL)

                localStorage.setItem("data", JSON.stringify(dayData))
                localStorage.setItem("eventData", JSON.stringify(eventData))
                setDataState('finished')



                console.log(dayData)
                console.log(eventData)
        }
    
        getAllData().catch((err) => {
            console.log(err)
            console.log("handled!") 
        })
    }

} 

export default fetchData