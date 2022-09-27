import React from 'react'
import FormControlado from './Components/FormControlado/FormControlado'
import FormNoControl from './Components/FormNoControl/FormNoControl'
import ListaDeTareas from './Components/ListaDeTareas/ListaDeTareas'
import Titulo from './Components/Titulo'

const App = () => {
  return (
    <div>
      <Titulo/>
      <ListaDeTareas/>
      <FormNoControl/>
      <FormControlado/>
    </div>
  )
}

export default App



