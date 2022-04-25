import React from "react";
import styles from "./Error.module.css";

const Error = (props) => {
  return <p className={styles.error}>{props.error}</p>;
};

export default Error;
