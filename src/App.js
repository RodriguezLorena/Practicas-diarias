import React from 'react'
import FormNoControl from './Components/FormNoControl/FormNoControl'
import ListaDeTareas from './Components/ListaDeTareas/ListaDeTareas'
import Titulo from './Components/Titulo'

const App = () => {
  return (
    <div>
      <Titulo/>
      <ListaDeTareas/>
      <FormNoControl/>
    </div>
  )
}

export default App



