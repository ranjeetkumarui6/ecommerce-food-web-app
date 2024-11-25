import React from 'react'
import styles from './header.module.css'
import AdminBTN from '../../Widgets/Button/AdminBTN'
import { IoReorderThreeSharp } from "react-icons/io5";
import Conntainer from '../../../Container';
const Header = (props) => {
  return (
    <>
    <Conntainer>
      <div className={styles.headerContainer}>
        <div className={styles.toggleContainer} >
          <div className={styles.logoT}>
        <IoReorderThreeSharp onClick={props.togglefun} className={styles.toggle}/>
        </div>
        </div>
        <nav className={styles.navContainer}>
          <ul className={styles.listContainer}>
            <li className={styles.listItem} id={props.id} ><a href="#" className={styles.listA}>View Order</a></li>
            <li className={styles.listItem} id={props.id}><a href="#" className={styles.listA}>User Detail</a></li>
            <li className={styles.listItem} id={props.id}><a href="#" className={styles.listA}>Admin Detail</a></li>
          </ul>
          <AdminBTN/>
        </nav>
      </div>
      </Conntainer>
    </>
  )
}

export default Header
