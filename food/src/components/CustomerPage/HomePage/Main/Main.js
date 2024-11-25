import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import SectionTitle from "../../../Widgets/SetionTitle/Index";
import { useDispatch, useSelector } from 'react-redux'
import Conntainer from "../../../../Container";
import Footer from "../footer/Index";
import Subcategories from "../Sucategory/Index";
import { SliceAction } from "../../../Redux/Slices";

const Main = () => {
  const [categorydata, setcategorydata] = useState([]);
  const [subcategorydata, setsubcategorydata] = useState([]);
  const [subcategorydataall,setsubcategorydataall]=useState([]);
  // const [Categoyid,setCategoryid]=useState("")

  const Categoyid= useSelector(state=>state.Categoryid.Categoryid)
  const productdata=useSelector(state=>state.Categoryid.productdata)

  const dispatch=useDispatch()
  useEffect(() => {
    getcategory();
  }, []);

  const getcategory = async () => {
    const re = await fetch("http://localhost:7000/category", {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    });
    const data = await re.json();
    setcategorydata(data);
    getsubcategorydata();
  };

  const getsubcategorydata = async () => {
    const re = await fetch("http://localhost:7000/subcategory", {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    });
    const data = await re.json();
    setsubcategorydataall(data);
  };

  const handlecategory = async (x) => {
    const re = await fetch("http://localhost:7000/subcategory", {
      method: "PATCH",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ Categoryid: x }),
    });
    const data = await re.json();
    setsubcategorydata(data);
    dispatch(SliceAction.setcategoryid(x))


  };

  const Handlepoducts=async(x)=>{
    const re = await fetch("http://localhost:7000/productdata",{
      method:"PATCH",
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({SubCategoryid:x})
    })
    const data=await re.json();
    dispatch(SliceAction.getproductdata(data));
  }
  return (
    <>
      <Conntainer>
        <main className={styles.mainContainer}>
          <div className={styles.categorycontent}>
            <p>What`s on Your Mind</p>
            <div className={styles.categorycontainer}>
              {/* <MultiCarousel arrows={true} infinite={true} showDots={true} autoPlay={true} responsive={responsive}> */}
              {categorydata.map((item) => {
                return (
                  <SectionTitle
                    handlecategory={() => handlecategory(item._id)}
                    key={item._id}
                    img={item.Categorypic}
                    name={item.Categoryname}
                  />
                );
              })}
              {/* </MultiCarousel> */}
            </div>

            <div className={styles.Subcategorycontainer}>
              { (subcategorydata.length >0 )?  subcategorydata.map((it) => {
                return (
                  <Subcategories
                    key={it._id}
                    SubCategoryname={it.SubCategoryname}
                    SubCategorypic={it.SubCategorypic}
                    handleproduct={()=>Handlepoducts(it._id)}
                    id={it._id}
                  />
                );
              })
              :
              subcategorydataall.map((it) => {
                return (
                  <Subcategories
                  key={it._id}
                    SubCategoryname={it.SubCategoryname}
                    SubCategorypic={it.SubCategorypic}
                    handleproduct={()=>Handlepoducts(it._id)}
                    id={it._id}
                  />
                );
              })
              }
              
            </div>
          </div>
        </main>
        <Footer categorydata={categorydata} subcategorydata={subcategorydata} />
      </Conntainer>
    </>
  );
};

export default Main;
