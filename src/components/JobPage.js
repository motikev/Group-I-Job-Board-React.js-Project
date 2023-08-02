import { useState, useEffect } from "react"
import Header from "./Header"
import JobList from "./JobList"
import "./JobPage.css"

function JobPage(){
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/jobPostings`)
        .then((response)=>response.json())
        .then((data)=>setJobs(data))
    },[])

    const [selectedLanguage, setSelectedLanguage]=useState([])

    function addLanguage(data){
        if(!selectedLanguage.includes(data)){
            setSelectedLanguage([...selectedLanguage, data])
        }
    }

    return (
        <>
        {selectedLanguage.length>0 && <Header language={selectedLanguage} />}
        <JobList jobs={jobs} selectLanguage={addLanguage}/>
        </>
    )
}
export default JobPage