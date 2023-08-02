import './Header.css'
function Header({selected, removeSelected, clearAll}){
    console.log(selected)
    const myLanguages =selected.map((language)=>{
        return (
        
         <ul>
          <li key={language}>{language}
           <button className='close'   onClick={()=>removeSelected(language)}>
            x
           </button>
          </li>
         </ul>
        )
    })
return (
    <div className="header">
       {myLanguages}
       <label onClick={()=>clearAll()}>Clear</label>
    </div>
)
}

export default Header