import React from "react";
import styles from "./Input.module.css";

function Input(props) {
    return <input placeholder={props.placeholder} className={styles.input} />;
}

export default Input;
