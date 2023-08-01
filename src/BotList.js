import { useState, useEffect } from "react"

function BotList(){
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch()
        .then((r)=>r.json)
        .then((data)=>setJobs(data))
    })
    return
}
export default BotList