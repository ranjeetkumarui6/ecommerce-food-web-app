import React from 'react'
import styles from './index.module.css'
const Cart = ({Productname,pic,price,oprice,desc}) => {
  return (
    <>
     <div className={styles.cartcontainer}>
        <div className={styles.imgcontainer}>
            <img src={`http://localhost:7000/${pic}`} alt="cartpics" />
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
            <h3 className={styles.offerprice}>₹{price}</h3>
                <h3 className={styles.price}>₹{oprice}</h3>
            </div>
            <div className={styles.pricecontent}>
                <p>{desc}</p>
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
