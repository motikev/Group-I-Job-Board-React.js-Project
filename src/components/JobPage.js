import { useState, useEffect } from "react"
import Header from "./Header"
import JobList from "./JobList"

function JobPage(){
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/jobPostings`)
        .then((response)=>response.json())
        .then((data)=>setJobs(data))
    },[])

    return (
        <>
        <Header/>
        <JobList jobs={jobs}/>
        </>
    )
}
export default JobPage