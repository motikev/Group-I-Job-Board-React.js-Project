import './JobItem.css'

function JobItem({data, selectLanguage}){
    return(
        <div className="job-container">
            <div className="part-1">
                <h3>{data.title}</h3>
                <h4>{data.company}</h4>
                <div className='details'>
                <h5>Location: {data.location}</h5>
                <p>{data.description}</p>
                </div>
                <div className='specifications'>
                <span>&diams; </span>    
                <span> {data.level}</span>
                </div>
                <div className='specifications'>
                <span>&diams; </span>    
                <span> {data.contract}</span>
                </div>
            </div>
            <div className="part-2">
                {data.languages.map((language, id)=>(<div key={id} onClick={()=>selectLanguage(language)}><span>{language}</span></div>))}
            </div>

        </div>
    )

}

export default JobItem