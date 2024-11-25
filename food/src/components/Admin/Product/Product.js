import React, { useEffect, useRef, useState } from 'react'
import styles from './product.module.css'
import Header from '../Common/Header'
import Sidemenu from '../Common/Sidemenu'
import Toggle from '../../Widgets/Togglebar/Toggle'
import SubCatContent from '../Subcategory/SubCatContent'
import Footer from '../Common/Footer'
import Procontent from './Procontent'
const Product = () => {
    const ref1=useRef()
    const inputref=useRef()
  
    const togglesubfun = () => {
      if(document.getElementById("proid").style.width=="0px"){
        document.getElementById("proid").style.minWidth="371px"
    }else if( document.getElementById("proid").style.width=="100%"){
      document.getElementById("proid").style.width="0px"
  
    }
    }
      const clear=()=>{
      ref1.current.innerText="Choose File Here"
      ref1.current.style.color=" #11638C"
      inputref.current.value=""
      }

      const[categoryname,setcategoryname]=useState([]);
      const[subcategoryname,setsubcategoryname]=useState([]);
      const [productdata,setproductdata]=useState([]);
      const [categoryid,setcategoryid]=useState("");

      const [Productname,setProductname]=useState("");
      const [SubCategoryid,setSubCategoryid]=useState("");
      const [Productprice,setProductprice]=useState("");
      const [Productofferprice,setProductofferprice]=useState("");
      const [Productdescription,setProductdescription]=useState("");
      const [Productpic,setProductpic]=useState("");
      useEffect(()=>{
        categorydata();
        subcategorydata();
        getproductdata(SubCategoryid)
      },[categoryid,SubCategoryid])

      const categorydata=async()=>{
        const res=await fetch("http://localhost:7000/category",{
          method:"GET",
          headers:{"Content-Type":"Application/json"}
        });
        const data=await res.json();
        setcategoryname(data)
      }

      const subcategorydata=async()=>{
        const res=await fetch("http://localhost:7000/subcategory",{
          method:"PATCH",
          headers:{"Content-Type":"Application/json"},
          body:JSON.stringify({Categoryid:categoryid})
        })
        const data=await res.json();
        setsubcategoryname(data)
      }

      const saveProduct=async()=>{
        const fdata=new FormData();
        fdata.append("SubCategoryid",SubCategoryid);
        fdata.append("Productname",Productname);
        fdata.append("Productprice",Productprice);
        fdata.append("Productofferprice",Productofferprice);
        fdata.append("Productdescription",Productdescription);
        fdata.append("Productpic",Productpic);
        // console.log(SubCategoryid,Productname,Productprice,Productofferprice,Productdescription,Productpic);

        const re = await fetch("http://localhost:7000/productdata",{
          method:"POST",
          body:fdata
        })
        const data= await re.json();
        alert(data.msg);
        getproductdata(SubCategoryid);
        setProductname("");
        setProductprice("");
        setProductofferprice("");
        setProductdescription("");
        setProductpic("");
      }

     

      const getproductdata=async(x)=>{
        const re = await fetch("http://localhost:7000/productdata",{
          method:"PATCH",
          headers:{"Content-Type":"Application/json"},
          body:JSON.stringify({SubCategoryid:x})
        })

        const data = await re.json();
        setproductdata(data);
      }
  return (
    <>
       <div className={styles.ProductContainer}>
        <Header togglefun={togglesubfun} />
        <div className={styles.Productbody}>
          <Sidemenu />
          <Toggle id="proid"/>
          <Procontent productdata={productdata} clear={clear} saveProduct={saveProduct} Productname={Productname} setProductname={setProductname} Productprice={Productprice} setProductprice={setProductprice} Productofferprice={Productofferprice} setProductofferprice={setProductofferprice} Productdescription={Productdescription} setProductdescription={setProductdescription} setProductpic={setProductpic} setcategoryid={setcategoryid} setSubCategoryid={setSubCategoryid} subcategoryname={subcategoryname} ref1={ref1} categoryname={categoryname} inputref={inputref}  />
        
        </div>
        <Footer/>

      </div> 
    </>
  )
}

export default Product
