import React from 'react'
import TareaItem from './TareaItem'

const ListaTareas = ({tareas, handleCheck, handleClick}) => {
  return (
    <div>
        {
            tareas && tareas.map((tarea, i)=>(
              <TareaItem key={i} tarea ={tarea} handleCheck={handleCheck} handleClick={handleClick}/>
            ))
        }
    </div>
  )
}

export default ListaTareas