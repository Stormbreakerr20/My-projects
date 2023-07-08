import React from 'react'
import styles from "./Btn.module.css";

function Btn(props) {
    const {dark,text,icon,...rest} = props;
  return (
    <>
    <button {...rest} className={dark ? styles.btn : styles.btnwhite}> {icon} {text}</button>
    </>
  )
}

export default Btn