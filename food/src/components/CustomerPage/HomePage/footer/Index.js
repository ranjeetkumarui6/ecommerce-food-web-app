import React from 'react'
import styles from './index.module.css'
import Conntainer from '../../../../Container'
import { IoLocationOutline } from 'react-icons/io5'
import { MdHeadsetMic } from 'react-icons/md'
import { TfiEmail } from 'react-icons/tfi'
import { GiAlarmClock } from 'react-icons/gi'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import i1 from '../../../../assets/install1.jpg'
import i2 from '../../../../assets/inatall2.jpg'
import visa1 from '../../../../assets/visa.png'
import visa2 from '../../../../assets/visa2.png'
import visa3 from '../../../../assets/visa3.png'
import visa4 from '../../../../assets/visa4.png'

const Footer = ({categorydata,subcategorydata}) => {
  return (
    <>
      <Conntainer>
      <footer className={styles.footercontainer}>
        <div className={styles.links}>
          <div className={styles.leftprofile}>
            <div className={styles.foodcontent}>
              <span className={styles.food}>FastFood</span>
              <p>Awesome Foods store website</p>
              </div>
              <ul>
                <li>
                  <i><IoLocationOutline size={25}/></i>
                  <span className={styles.name}>Location:</span>
                  <span className={styles.value}>226202 BKT, Lucknow</span>
                  </li>
                <li>
                  <i><MdHeadsetMic size={20}/></i>
                  <span className={styles.name}>Calls-Us:</span>
                  <span className={styles.value}>(+91)6393792577</span>
                  </li>
                <li>
                  <i><TfiEmail size={18}/></i>
                  <span className={styles.name}>Email:</span>
                  <span className={styles.value}>ranjeetkumar78734@gmail.com</span>
                  </li>
                <li>
                  <GiAlarmClock size={25}/>
                  <span className={styles.name}>Time:</span>
                  <span className={styles.value}>10 Days</span>
                  </li>
              </ul>
              <div className={styles.socilameadiacontainer}>
                <span>Follow Us:</span>
                <div className={styles.socilameadia}>
                <i><BsInstagram size={20}/></i>
                <i><FaFacebook size={20}/></i>
                <i><BsLinkedin size={20}/></i>
                <i><FaGithub size={20}/></i>
                </div>
              </div>
          </div>
          <div className={styles.rightprofile}>
            <div className={styles.categorylinks}>
            <span>Category</span>
              <ul>

                {categorydata.map(it=>{
                  return <li>{it.Categoryname}</li>
                })}
              </ul>
            </div>
            <div className={styles.Subcategorylinks}>
              <span>SubCategory</span>
              <ul>
                {subcategorydata.map(it=>{
                  return <li>{it.SubCategoryname}</li>
                })}
                </ul>
            </div>
            <div className={styles.Accountcontainer}>
              <span>Account</span>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Vendors</li>
                <li>Login</li>
                <li>SignUp</li>
                <li>View Order</li>
                <li>Wishlist</li>
              </ul>
            </div>
            <div className={styles.installapp}>
              <span>Install APP</span>
                <p>From App Store And Play Store</p>
                <img src={i1} alt="playstore" />
                <img src={i2} alt="playstore" />
                <p>Secure Payment Gatway</p>
                <img src={visa1} alt="payment" />
            </div>
          </div>
        </div>
        <p className={styles.para}>All  Copyright@2024 Reserved by Ranjeet Kumar</p>
      </footer>

      </Conntainer>
    </>
  )
}

export default Footer
