import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
const UserButton = ({name,bg,color,jump}) => {
  return (
    <>
     <Link to={jump}> <button style={{color:color,backgroundColor:bg}} className={styles.userbutton}>{name}</button></Link>
    </>
  )
}

export default UserButton
