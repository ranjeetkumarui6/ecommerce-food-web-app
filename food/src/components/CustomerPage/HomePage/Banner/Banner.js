import React from 'react'
import styles from './Banner.module.css'
import { IoSearch } from "react-icons/io5";

const Banner = () => {
  return (
    <>
     <div className={styles.bannerContainer}>
        <p className={styles.aboutFood}>Food Any Substance consumed to provide nutritional support for the body</p>
        <div className={styles.inputFoodCon}>
        <span className={styles.inicon}><IoSearch className={styles.searchicon}/></span>
        <input type="text" placeholder='Search Your Favorite Food Here'  className={styles.inputFood}/>
        </div>
        </div> 
    </>
  )
}

export default Banner
