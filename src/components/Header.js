function Header({selected, removeSelected, clearAll}){
    console.log(selected)
    const myLanguages =selected.map((language)=>{
        return<ul>
             <li key={language}>{language}
        <button onClick={()=>removeSelected(language)}>
            <img src="./images/3b5b217ce258702c0956cbf3b146acba_t.jpeg" alt="delete-icon"/>
        </button>
        </li>
        </ul>
    })
return (
    <div className="header">
       {myLanguages}
       <a href="#" onClick={()=>clearAll()}>Clear</a>
    </div>
)
}

export default Header