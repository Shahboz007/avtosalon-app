import React from 'react'
import styles from "../styles/Icon.module.css";

export const  Person = ({style})=> {
  const classes = [
    styles.icon, 
    styles.person
  ];
  return (
    <i className={classes.join(' ')} style={style}></i>
  )
}
