import React from 'react'

const TareaItem = ({tarea, handleCheck, handleClick}) => {

  
    const getStyle=()=>{
        return{
            textDecoration: tarea.hecho ? "line-through" : "none",
            margin: "20px",
            border: "1px solid #ffff",
            backgroundColor: "#ffff"

        }
    }

    return (
    <div style={getStyle()}>
        <input type="checkbox" checked={tarea.hecho} onChange={()=> handleCheck(tarea.id)}/>
        {
            tarea.tarea
        }
        <button className='add-btn' onClick={()=>{handleClick(tarea.id)}}>X</button>
    </div>
    )
}

export default TareaItem