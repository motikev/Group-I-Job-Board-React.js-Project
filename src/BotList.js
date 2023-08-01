import { useState, useEffect } from "react"

function BotList(){
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch()
        .then((r)=>r.json)
        .then((data)=>setJobs(data))
    })
    return(
        <div>
            
        </div>
    )
}
export default BotList