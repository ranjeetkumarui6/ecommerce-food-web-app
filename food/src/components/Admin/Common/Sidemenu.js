import React from 'react'
import styles from './sidemenu.module.css'
import {Link} from "react-router-dom"
import Conntainer from '../../../Container'
const Sidemenu = () => {
  return (
    <>
      <div className={styles.sidemenuContainer}>
        <ul className={styles.foodContainer}>
         <Link to="/category"><li className={styles.foodItem}><i  className={styles.foodA}>  SECTION </i></li></Link>
          <Link to="/subcategory"><li className={styles.foodItem}><i  className={styles.foodA}>  SUBSECTION </i></li></Link>
         <Link to="/Product"> <li className={styles.foodItem}><i  className={styles.foodA}> FOOD_ITEMS </i></li></Link>
        </ul>
      </div>
    </>
  )
}

export default Sidemenu
