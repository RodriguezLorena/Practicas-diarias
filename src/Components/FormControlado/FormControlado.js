import React from "react";
import { useState } from "react";
import style from "./FormControlado.module.css"



const FormControlado = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loguearme(email, password);
    }

    const loguearme = (email, password)=>{
        if(email === "pruebaslorena@pruabas.com" && password === "12345"){
            alert("Login Correcto")
        }else{
            alert("Login incorrercto")
        }
    }

    const handleChange= (e)=>{
        setEmail(e.target.value)
    }
    const handleChangePass= (e)=>{
        setPassword(e.target.value)
    }
 
 
  return (
    <div className={style.content}>
      <h1>Formulario Controlado:</h1>
      <form onSubmit={handleSubmit} className={style.tagFrom}>
        <label>E-mail:</label>
        <input
          type="text"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleChange}
         
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Coloque su Contraseña"
          value={password}
          onChange={handleChangePass}
         
        />
        <button>
          Loguearme
        </button>
       
    
      </form>
    </div>
  );
};

export default FormControlado;
