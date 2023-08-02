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

    function removeLanguage(data){
        const newSelectedLanguages = selectedLanguage.filter((language)=> language!==data)
        setSelectedLanguage(newSelectedLanguages)
    }

    function clearAll(){
        setSelectedLanguage([])
    }

    return (
        <>
        {selectedLanguage.length>0 && <Header selected={selectedLanguage} 
        removeSelected={removeLanguage} 
        clearAll={clearAll}/>}
        <JobList languages={selectedLanguage} jobs={jobs} selectLanguage={addLanguage}/>
        </>
    )
}
export default JobPage