import React from 'react'
import { useState } from 'react'


const FormNoControl = () => {
    const [search, setSeatch] = useState("")

    const submit= (e)=>{
        e.preventDefault()
        setSeatch(e.target.search.value)
       }
  return (
    <div>
        <h1>Formulario No controlado:</h1>
        <form onSubmit={submit}>
            <input type="text" name="search" autoComplete='off'/>
            <button type='submit'>Imprimir</button>

            <p>Se imprime: {search}</p>
        </form>
    </div>
  )
}

export default FormNoControl