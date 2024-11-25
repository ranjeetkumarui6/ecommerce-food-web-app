import React from 'react'
import styles from './index.module.css'
import pic from '../../../../../assets/disses/biryani.jpg'
const Cart = ({Productname}) => {
  return (
    <>
     <div className={styles.cartcontainer}>
        <div className={styles.imgcontainer}>
            <img src={pic} alt="cartpics" />
        </div>
        <div className={styles.contentcontainer}>
            <h3 className={styles.name}>{Productname}</h3>
            <div className={styles.options}>
            <select>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
                <option value="1">1</option>
            </select>
            <select>
                <option value="Half">Half</option>
                <option value="Full">Full</option>
                <option value="Half">Half</option>
                <option value="Full">Full</option>
                <option value="Half">Half</option>
                <option value="Full">Full</option>
            </select>
            <h3 className={styles.offerprice}>₹200-/</h3>
                <h3 className={styles.price}>₹199-/</h3>
            </div>
            <div className={styles.pricecontent}>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className={styles.addtocart}>
                <button>Add to Cart</button>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Cart
