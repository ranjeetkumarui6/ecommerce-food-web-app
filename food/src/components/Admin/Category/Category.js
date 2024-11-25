import React, { useEffect, useRef, useState } from 'react'
import styles from './category.module.css'
import Header from '../Common/Header'
import Sidemenu from '../Common/Sidemenu'
import Toggle from '../../Widgets/Togglebar/Toggle'
import CatContent from './CatContent'
import Footer from '../Common/Footer'
import Conntainer from '../../../Container'
const Category = () => {
  const togglefun=(e)=>{

    if(document.getElementById("my").style.width=="0px"){
        document.getElementById("my").style.width="100%"
    }else if( document.getElementById("my").style.width=="100%"){
      document.getElementById("my").style.width="0px"

    }
  }

  const hide=()=>{
    document.getElementById("my").style.display="none"
  }
  const ref1=useRef()
  const ref2=useRef()
  const inputref=useRef()

  
  const [Categoryname,setCategoryname]=useState("");
  const [Categorypic,setCategorypic]=useState("");
  const [UpdateCategory,setUpdateCategory]=useState("");
  const [updateid,setupdateid]=useState("");



  const [arrayjson,setarrayjson]=useState([])
  
  const cleardata=()=>{
    ref1.current.innerText="Choose File Here"
    ref1.current.style.color="rgb(112, 112, 112)"
    inputref.current.value=""
    }
  const close=()=>{
    document.getElementById("m").style.display="none"

  }
    // let fillist=ref1.current.nextElementSibling.files
    // let imgname;
    // for(let i=0;i<fillist.length;i++){
    // imgname=  fillist[i].name
    // }
    useEffect(()=>{
      getcategory();
      //  ref1.current.innerText=`${imgname}   x`
      //  ref1.current.style.color="#11638C"

    },[arrayjson])

    const getcategory=async()=>{
      const re= await fetch("http://localhost:7000/category",{
        method:"GET",
        headers:{"Content-Type":"Application/json"}
      })
      const data=await re.json();
      setarrayjson(data)
    }

  const savecategory=async()=>{
    
    const fdata= new FormData()
    fdata.append("Categoryname",Categoryname)
    fdata.append("Categorypic",Categorypic)
    const re=await fetch("http://localhost:7000/category",{
    method:"POST",
    body:fdata
    })
    const data= await re.json();
    alert(data.msg)
    setCategoryname("")
    setCategorypic(null)
  }

  const deletecategory=async(catid)=>{
   if(window.confirm("Sure For Delete")){
    const re=await fetch("http://localhost:7000/category",{
      method:"DELETE",
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({categoryid:catid})
    })
    const data=await re.json()
    alert(data.msg)
  
    getcategory()
    }
  }
  const updategetcategory=async(catid)=>{
    //hide and show of toggle
    if(document.getElementById("m").style.display=="none"){
      document.getElementById("m").style.display="block"
      document.getElementById("m").style.transition="1s"
      document.getElementById("m").style.height="461px "

  }else if( document.getElementById("m").style.display=="block"){
    document.getElementById("m").style.display="none"

  }
//api to get data from database for update data
    const re=await fetch("http://localhost:7000/category/"+catid,{
      method:"GET",
      headers:{"Content-Type":"Application/json"},
    })
    const data=await re.json();
    setUpdateCategory(data[0].Categoryname)
    setupdateid(catid)
   }

   const updatesave=async()=>{
    const re=await fetch("http://localhost:7000/category",{
      method:"PUT",
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({
        updateid:updateid,
        Categoryname:UpdateCategory
      })
    })
    const data=await re.json()
    
    alert(data.msg)
    getcategory();
   }

  return (
    <>
    <Conntainer>
      <div className={styles.categoryContainer}>
      <Header togglefun={togglefun} />
      <div className={styles.catbody}>
      <Sidemenu/>
      <Toggle id="my" hide={hide}/>
      <CatContent valinput={Categoryname} valfile={Categorypic} updatesave={updatesave} close={close} setUpdateCategory={setUpdateCategory} UpdateCategory={UpdateCategory} id="m" getcategory={updategetcategory} deletecategory={deletecategory} ref1={ref1} arrayjson={arrayjson} inputref={inputref} ref2={ref2} savecategory={savecategory} clear={cleardata} setCategoryname={setCategoryname} setCategorypic={setCategorypic}/>
      </div>
      <Footer/>
      </div>
      </Conntainer>
    </>
  )
}

export default Category
