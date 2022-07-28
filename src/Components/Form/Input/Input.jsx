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
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && <p className={styles.erro}>{props.error}</p>}
    </div>
  );
};

export default Input;
