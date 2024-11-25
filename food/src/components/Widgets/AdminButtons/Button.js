import React from 'react'
import styles from './button.module.css'
const Button = (props) => {
  return (
    <>
      <div className={styles.Abutton} onClick={props.savecategory}>{props.name}</div>
    </>
  )
}

export default Button
