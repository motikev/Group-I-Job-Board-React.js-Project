import { useState, useEffect } from "react"
import JobItem from "./JobItem";

function JobList({jobs, selectLanguage, languages}){

    const renderJobs = jobs.map((job)=>{
        return <JobItem key={job.id} data={job} selectLanguage={selectLanguage}/>
    })
    
    return(
        <div className="JobList-Container">
            {renderJobs}
        </div>
    )
}
export default JobList