import React from 'react'
import styles from "./Btn.module.css";

function Btn(props) {
    const {dark,text,icon} = props;
  return (
    <>
    <button className={dark ? styles.btn : styles.btnwhite}> {icon} {text}</button>
    </>
  )
}

export default Btn