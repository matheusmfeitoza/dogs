import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={styles.input}
        type={props.type}
        id={props.id}
        name={props.name}
      />
      <p className={styles.erro}>Erro</p>
    </div>
  );
};

export default Input;
