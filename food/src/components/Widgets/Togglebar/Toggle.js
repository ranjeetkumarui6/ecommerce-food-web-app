import React from 'react'
import styles from './Toggle.module.css'
import { BiSolidUserDetail } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Toggle = (props) => {

  return (
    <>
      <div className={styles.toggleContainer} style={{width:"0px",padding:"0px",overflow:"hidden"}}  id={props.id}>
        <ul className={styles.listcontainer}>
          <li className={styles.listItem}> <Link to="/category"><i onClick={props.hide}  className={styles.toggleA}><FaAddressCard className={styles.toggleicon}/></i></Link><span className={styles.toggleContent}>View Order</span></li>
          <li className={styles.listItem}><Link to="/subcategory"><i onClick={props.hide} className={styles.toggleA}><BiSolidUserDetail className={styles.toggleicon}/></i></Link><span className={styles.toggleContent}>User Detail</span></li>
          <li className={styles.listItem}><Link to="/product"><i onClick={props.hide} className={styles.toggleA}><MdManageAccounts className={styles.toggleicon}/></i></Link><span className={styles.toggleContent}>Admin Detail</span></li>
        </ul>
      </div>
    </>
  )
}

export default Toggle
