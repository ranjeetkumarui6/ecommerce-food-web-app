import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
const Subcategories = ({SubCategoryname,SubCategorypic,handleproduct,id}) => {
  return (
    <>
      <div className={styles.subcategorycart} onClick={handleproduct}>
        <div className={styles.imgcontainer}>
          <img
            src={`http://localhost:7000/${SubCategorypic}`}
            alt="subcategorypic"
          />
        </div>
       <Link to={`/products/${id}`}><h2 >{SubCategoryname}</h2></Link>
      </div>
    </>
  );
};

export default Subcategories;
