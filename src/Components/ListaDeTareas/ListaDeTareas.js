import React from 'react'
import data from "../../data.json"
import ListaTareas from "../ListaDeTareas/ListaTareas";
import '../../App.css';
import FormDeCreacion from "../ListaDeTareas/FormDeCreacion";
import { useState } from 'react';

const ListaDeTareas = () => {
    const[tareas, setTareas]=useState(data)
    console.log(tareas)
  
    const handleCheck= (id)=>{
      // console.log("tarea numero: ", id)
  
     setTareas( tareas && tareas.map((elem, )=>{
      return elem.id === Number(id) ? {...elem, hecho: !elem.hecho} : {...elem}
    }))
    }
  
    const handleClick= (id)=>{
  //  console.log("click ", id)
   const filtro = [...tareas].filter((elem)=> elem.id !== id)
   setTareas(filtro)
    }
  
    const addTarea= (nuevasTareas)=>{
      // console.log("Nueva tarea ", nuevasTareas)
      const nuevoItem= {id : +new Date(), tarea: nuevasTareas, hecho: false}
  
      setTareas([...tareas, nuevoItem]);
    }
  
    return (
   
      <div className="container">
        <h1>Lista de Tareas:</h1>
       <ListaTareas tareas={tareas} handleCheck={handleCheck} handleClick={handleClick}/>
       <FormDeCreacion addTarea={addTarea}/>
      </div>
     
    );
}

export default ListaDeTareas