import React from 'react'
import styles from './navbutton.module.css'
import { Link } from 'react-router-dom'
const NavButton = (props) => {
  return (
    <>
       <li className={styles.lb}><Link to="/signup"> {props.name}</Link></li>
    </>
  )
}

export default NavButton
