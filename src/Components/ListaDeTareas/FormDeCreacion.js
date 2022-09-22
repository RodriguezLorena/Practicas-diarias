import React from 'react'
import { useState } from 'react'

const FormDeCreacion = ({addTarea}) => {
 const [nuevaTarea, setNuevaTarea]= useState("")

 const handleForm= (e)=>{
    console.log(e)
    setNuevaTarea(e.target.value)

 }

 const handleSubmit= (e)=>{
    e.preventDefault()
    if(nuevaTarea.trim() !== ""){
        addTarea(nuevaTarea);
        setNuevaTarea("")
    }
 }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={nuevaTarea} onChange={handleForm}/>
            <button>Crear Tarea</button>
        </form>
    </div>
  )
}

export default FormDeCreacion