import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Cart from '../HomePage/Main/Cart/Index'
import Navbar from '../Navbar/Navbar'
import Banner from '../HomePage/Banner/Banner'
import Footer from '../HomePage/footer/Index'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SliceAction } from '../../Redux/Slices'
function OrderCart() {
    const [subcategorydata, setsubcategorydata] = useState([]);
  const [categorydata, setcategorydata] = useState([]);
  const productdata=useSelector(state=>state.Categoryid.productdata)
   const dispatch=useDispatch()
    const Categoyid= useSelector(state=>state.Categoryid.Categoryid)
   const jump= useParams()
    useEffect(()=>{
        getcategory();
        handlecategory();
        handleproduct();
    },[])


      const getcategory = async () => {
        const re = await fetch("http://localhost:7000/category", {
          method: "GET",
          headers: { "Content-Type": "Application/json" },
        });
        const data = await re.json();
        setcategorydata(data);
        console.log(data);
      };

    const handlecategory = async () => {
        const re = await fetch("http://localhost:7000/subcategory", {
          method: "PATCH",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({ Categoryid: Categoyid }),
        });
        const data = await re.json();
        setsubcategorydata(data);
      };
      const handleproduct = async () => {
        const re = await fetch("http://localhost:7000/productdata", {
          method: "PATCH",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({ SubCategoryid: jump.id }),
        });
        const data = await re.json();
        dispatch(SliceAction.getproductdata(data));
      };
  return (
    <>
    <div className={styles.ordercontainer}>

    <Navbar/>
    <div className={styles.bannercontainer}>
    <Banner/>
    <div className={styles.ordercartcotentcontainer}>
        {
            productdata.map(it=>{
                return <Cart Productname={it.Productname} />
            })
        }
    
    </div>
      <Footer categorydata={categorydata} subcategorydata={subcategorydata}/>
    </div>
    </div>
    </>
  )
}

export default OrderCart
