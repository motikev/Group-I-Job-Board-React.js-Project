import { useState, useEffect } from "react"
import JobItem from "./JobItem";

function JobList({jobs}){

    const renderJobs = jobs.map((job)=>{
        return <JobItem key={job.id} data={job}/>
    })
    
    return(
        <div className="JobList-Container">
            {renderJobs}
        </div>
    )
}
export default JobList