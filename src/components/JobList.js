import { useState, useEffect } from "react"
import JobItem from "./JobItem";

function JobList({jobs, selectLanguage, languages}){

    let [filteredData, setFilteredData] = useState([])
       useEffect(()=>{
        filteredJobs()

    },[languages])



    function filteredJobs(){
        if(languages.length>0){

            const newData = jobs.filter((job)=>{
                return languages.every((lang)=>{
                    return job.languages.includes(lang)
                })
            })
            
                setFilteredData(newData)

                }else{
            setFilteredData(jobs)
           }
   
    }

 

     const jobItems = filteredData.map((job)=>{
        return <JobItem key={job.id} data={job} selectLanguage={selectLanguage}/>
    })
    
    return(
        <div className="JobList-Container">
            {jobItems}
        </div>
    )
}
export default JobList