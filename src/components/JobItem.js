function JobItem({data}){
    return(
        <div className="job-container">
            <div>
                <h2>{data.title}</h2>
                <h4>{data.company}</h4>
                <h5>Location: {data.location}</h5>
                <p>{data.description}</p>
                <span>{data.level}</span>
                <span>{data.contract}</span>
            </div>
            <div>
                {data.languages.map((language, id)=>(<button key={id}>{language}</button>))}
            </div>

        </div>
    )

}

export default JobItem