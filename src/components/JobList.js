import { useState, useEffect } from "react"

function JobList(){
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch()
        .then((r)=>r.json)
        .then((data)=>setJobs(data))
    })

    function handleClick(){
        return 
    }
    return(
        <div>
            
        </div>
    )
}
export default JobList