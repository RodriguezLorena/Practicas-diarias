import {useState} from "react"
import data from "./data.json"
import ListaTareas from "./Components/ListaTareas";
import './App.css';

function App() {
  const[tareas, setTareas]=useState(data)
  console.log(tareas)

  const handleCheck= (id)=>{
    // console.log("tarea numero: ", id)

   setTareas( tareas && tareas.map((elem, )=>{
    return elem.id === Number(id) ? {...elem, hecho: !elem.hecho} : {...elem}
  }))
  }

  const handleClick= (id)=>{
 console.log("click ", id)
  }
  return (
    <div className="container">
     <ListaTareas tareas={tareas} handleCheck={handleCheck} handleClick={handleClick}/>
    </div>
  );
}

export default App;
