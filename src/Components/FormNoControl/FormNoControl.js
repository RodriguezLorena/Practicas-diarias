import React from "react";
import { useState } from "react";
import style from "./FormNoControl.module.css";

const FormNoControl = () => {
  const [search, setSeatch] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSeatch(e.target.search.value);
  };
  return (
    <div className={style.content}>
      <h1>Formulario No controlado:</h1>
      <form onSubmit={submit}>
        <textarea
          type="text"
          name="search"
          autoComplete="off"
          className={style.area}
        />
        <button type="submit" className={style.btn}>
          Imprimir
        </button>
        <p className={style.span}>Se Imprime:</p>
        <p className={style.impresion}> {search}</p>
      </form>
    </div>
  );
};

export default FormNoControl;
