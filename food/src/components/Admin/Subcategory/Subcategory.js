import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../CustomerPage/Navbar/Navbar";
import Sidemenu from "../Common/Sidemenu";
import styles from "./subcategory.module.css";
import SubCatContent from "./SubCatContent";
import Toggle from "../../Widgets/Togglebar/Toggle";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Conntainer from "../../../Container";
import UpdateCategory from "../../../Pages/UpdateCategory";
const Subcategory = () => {
  const ref1 = useRef();
  const inputref = useRef();

  const togglesubfun = () => {
    if (document.getElementById("subid").style.width == "0px") {
      document.getElementById("subid").style.width = "100%";
    } else if (document.getElementById("subid").style.width == "100%") {
      document.getElementById("subid").style.width = "0px";
    }
  };
  const clear = () => {
    ref1.current.innerText = "Choose File Here";
    ref1.current.style.color = " #11638C";
    inputref.current.value = "";
  };

  const [categoryid, setcategoryid] = useState("");
  const [categoryname, setcategoryname] = useState([]);

  const [subcategoryname, setsubcategoryname] = useState("");
  const [subcategorypic, setsubcategorypic] = useState("");

  const [subcategorydata, setsubcategorydata] = useState([]);

  const [UpdateSubCategory,SetUpdateSubCategory]=useState("");
  const [updateid,setupdateid]=useState('');

  const close = () => {
    document.getElementById("m").style.display = "none";
  };

  useEffect(() => {
    getcategorydata();
  }, []);
  const getcategorydata = async () => {
    const res = await fetch("http://localhost:7000/category", {
      method: "GET",
      headers: { "Content-Type": "Aplication/json" },
    });
    const data = await res.json();
    setcategoryname(data);
  };

  const savesubcategory = async () => {
    const fdata = new FormData();
    fdata.append("Categoryid", categoryid);
    fdata.append("SubCategoryname", subcategoryname);
    fdata.append("SubCategorypic", subcategorypic);

    const res = await fetch("http://localhost:7000/subcategory", {
      method: "POST",
      body: fdata,
    });
    const data = await res.json();
    alert(data.msg);
    getsubcategory(categoryid);
    setsubcategoryname("");
    setsubcategorypic("");
  };

  const getsubcategory = async (x) => {
    const re = await fetch("http://localhost:7000/subcategory", {
      method: "PATCH",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ Categoryid: x }),
    });

    const data = await re.json();
    console.log(data);
    setsubcategorydata(data);
  };

  const deletesubcategory = async (id) => {
    if (window.confirm("Want to delete")) {
      const re = await fetch("http://localhost:7000/subcategory", {
        method: "DELETE",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ subcategoryid: id }),
      });
      const data = await re.json();
      alert(data.msg);
      getsubcategory();
    }
  };

  const getupdatesubcategory = async(subcatid) => {
    if (document.getElementById("m").style.display == "none") {
      document.getElementById("m").style.display = "block";
      document.getElementById("m").style.transition = "1s";
      document.getElementById("m").style.height = "461px ";
    } else if (document.getElementById("m").style.display == "block") {
      document.getElementById("m").style.display = "none";
    }

    const re=await fetch("http://localhost:7000/subcategory/"+subcatid,{
      method:"GET",
      headers:{"Content-Type":"Application/json"},
    })
    const data=await re.json();
    SetUpdateSubCategory(data[0].SubCategoryname)
    setupdateid(subcatid)
  };

  const updatesave = async () => {
    alert(UpdateSubCategory,updateid)
    const re = await fetch("http://localhost:7000/subcategory", {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        updateid: updateid,
        SubCategoryname: UpdateSubCategory,
      }),
    });
    const data = await re.json();
    alert(data.msg);
    getsubcategory();
  };

  return (
    <>
      <Conntainer>
        <div className={styles.subCategoryContainer}>
          <Header togglefun={togglesubfun} />
          <div className={styles.subcatbody}>
            <Sidemenu />
            <Toggle id="subid" />
            <SubCatContent
              id="m"
              updatesave={updatesave}
              close={close}
              clear={clear}
              getupdatesubcategory={getupdatesubcategory}
              deletesubcategory={deletesubcategory}
              subcategorydata={subcategorydata}
              categoryname={categoryname}
              setcategoryid={setcategoryid}
              setsubcategoryname={setsubcategoryname}
              setsubcategorypic={setsubcategorypic}
              subcategoryname={subcategoryname}
              subcategorypic={subcategorypic}
              ref1={ref1}
              getsubcategory={getsubcategory}
              inputref={inputref}
              savesubcategory={savesubcategory}
              SetUpdateSubCategory={SetUpdateSubCategory}
              UpdateSubCategory={UpdateSubCategory}
            />
          </div>
          <Footer />
        </div>
      </Conntainer>
    </>
  );
};

export default Subcategory;
