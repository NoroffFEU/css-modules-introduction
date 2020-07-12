import React from "react";
import styles from "./PageHeading.module.css";

function PageHeading(props) {
    return <h2 className={styles.heading}>{props.children}</h2>;
}

export default PageHeading;
