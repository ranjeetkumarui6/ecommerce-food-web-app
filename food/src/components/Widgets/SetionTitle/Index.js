import React from 'react'
import styles from './index.module.css'
const SectionTitle = ({name,img,handlecategory}) => {
  return (
    <>
      <div className={styles.SectionTitle} onClick={handlecategory}>
        <div className={styles.content}>
        <img src={`http://localhost:7000/${img}`} alt="categorypic" />
        <h2>{name}</h2>
        </div>
      </div>
    </>
  )
}

export default SectionTitle
