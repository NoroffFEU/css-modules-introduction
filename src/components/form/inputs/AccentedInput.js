import React from "react";
import styles from "./AccentedInput.module.css";

function AccentedInput(props) {
    return <input placeholder={props.placeholder} className={styles.accented} />;
}

export default AccentedInput;
