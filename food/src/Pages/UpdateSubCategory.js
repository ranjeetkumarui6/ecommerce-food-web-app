import React from "react";
import styles from "./updatesubcategory.module.css";
import Button from "../components/Widgets/AdminButtons/Button";
const UpdateSubCategory = (props) => {
  return (
    <>
      <div
        id={props.id}
        style={{ display: "none" }}
        className={styles.uscategoryFormContainer}
      >
        
        <span className={styles.uscategoryTittle}>Sub Category </span>
        <div className={styles.uscategoryform}>
          <label className={styles.usCatlabel}>SubSection Name</label>
          <input
            type="text"
            value={props.UpdateSubCategory}
            onChange={(e) => props.SetUpdateSubCategory(e.target.value)}
            placeholder="Enter SubSection Name Here"
            className={styles.usCatInput}
          />

          <div className={styles.usCatbuttons}>
            <Button name="CLOSE" savecategory={props.close} />
            <Button name="Update" savecategory={props.updatesave} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateSubCategory;
