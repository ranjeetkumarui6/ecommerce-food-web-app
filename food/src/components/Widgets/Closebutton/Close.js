import React from 'react'
import styles from './close.module.css'
const Close = (props) => {
  return (
    <>
      <div className={styles.cbutton} onClick={props.close}>{props.name}</div>
    </>
  )
}

export default Close
