import React from "react";
import styles from "./FormHeading.module.css";

function FormHeading(props) {
    return <h3 className={styles.heading}>{props.children}</h3>;
}

export default FormHeading;
