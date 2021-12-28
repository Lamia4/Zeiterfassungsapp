import React from 'react'

function Buttons({showDetails,clickedPerson,setClickedPerson, employees, setEmployees,baslatFunc,bitirFunc}) {


    



    return (
        <div className={showDetails} >
            <div className="buttons" >
          
          <button onClick={baslatFunc} > Start Work {clickedPerson.name} </button>
          
          <button onClick={bitirFunc} >Finish Work {clickedPerson.name} </button>
         
      </div>
        </div>
    )
}

export default Buttons