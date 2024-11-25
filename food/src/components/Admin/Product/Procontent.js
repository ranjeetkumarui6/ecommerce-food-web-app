import React from "react";
import styles from "./procontent.module.css";
// import UpdateCategory from '../../../Pages/UpdateCategory'

import Button from "../../Widgets/AdminButtons/Button";
import Conntainer from "../../../Container";
const Procontent = (props) => {
  return (
    <>
      <Conntainer>
        <div className={styles.ProductContent}>
          <div className={styles.Productform1}>
            <div className={styles.category}>
              <label className={styles.Productlabel}>Section Name Here</label>
              <select
                className={styles.ProductSelect}
                onChange={(e) => props.setcategoryid(e.target.value)}
              >
                <option className={styles.option} value="choose section name">
                  choose section name
                </option>
                {props.categoryname.map((item) => {
                  return (
                    <option className={styles.option} value={item._id}>
                      {item.Categoryname}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles.category}>
              <label className={styles.Productlabel}>
                SubSection Name Here
              </label>
              <select
                className={styles.ProductSelect}
                onChange={(e) => props.setSubCategoryid(e.target.value)}
              >
                <option className={styles.option} value="choose section name">
                  choose subsection name
                </option>
                {props.subcategoryname.map((it) => {
                  return (
                    <option className={styles.option} value={it._id}>
                      {it.SubCategoryname}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className={styles.tableform}>
            <div className={styles.ProductFormContainer}>
              <span className={styles.ProductTittle}>Product </span>

              <label className={styles.Productlabel}>Name</label>
              <input
                type="text"
                ref={props.inputref}
                placeholder="Enter Product Name Here"
                className={styles.ProductInput}
                onChange={(e) => props.setProductname(e.target.value)}
                value={props.Productname}
              />
              <label className={styles.Productlabel}>Price</label>
              <input
                type="text"
                ref={props.inputref}
                placeholder="Enter Product Price Here"
                className={styles.ProductInput}
                onChange={(e) => props.setProductprice(e.target.value)}
                value={props.Productprice}
              />
              <label className={styles.Productlabel}>Offer Price</label>
              <input
                type="text"
                ref={props.inputref}
                placeholder="Enter Product offer Price Here"
                className={styles.ProductInput}
                onChange={(e) => props.setProductofferprice(e.target.value)}
                value={props.Productofferprice}
              />
              <label className={styles.Productlabel}>Description</label>
              <input
                type="text"
                ref={props.inputref}
                placeholder="Enter Product Description Here"
                className={styles.ProductInput}
                onChange={(e) => props.setProductdescription(e.target.value)}
                value={props.Productdescription}
              />
              <label className={styles.Productlabel}> Image</label>
              <label
                htmlFor="files"
                className={styles.ProductFile}
                ref={props.ref1}
              >
                {" "}
                File Here
              </label>

              <input
                type="file"
                id="files"
                onChange={(e) => props.setProductpic(e.target.files[0])}
              />
              <div className={styles.Productbuttons}>
                <Button name="CLEAR" savecategory={props.clear} />
                <Button name="SAVE" savecategory={props.saveProduct} />
              </div>
            </div>
            <div className={styles.ProductTableContainer}>
              <span className={styles.ProducttableTittle}>Product Table </span>
              <div className={styles.ProductTable}>
                <table className={styles.table}>
                  <thead className={styles.thead}>
                    <tr className={styles.tr}>
                      <th className={styles.th}>Image</th>
                      <th className={styles.th}>Name</th>
                      <th className={styles.th}>Price</th>
                      <th className={styles.th}>OfferPrice</th>
                      <th className={styles.th}>Description</th>
                      <th className={styles.th}>Action</th>
                    </tr>
                  </thead>
                  <tbody className={styles.tbody}>
                    {props.productdata.map((item) => {
                      return (
                        <tr className={styles.tr}>
                          <td className={styles.td}>
                            <img
                              src={"http://localhost:7000/" + item.Productpic}
                              alt="catpic"
                              style={{ width: "7.5rem", height: "100%" }}
                            />
                          </td>
                          <td className={styles.td}>{item.Productname}</td>
                          <td className={styles.td}>{item.Productprice}</td>
                          <td className={styles.td}>
                            {item.Productofferprice}
                          </td>
                          <td className={styles.td}>
                            {item.Productdescription}
                          </td>
                          <td className={styles.td}>
                            <div className={styles.icondiv}>
                              <i
                                className="fa fa-trash fa-2x"
                                onClick={() => props.deletecategory(item._id)}
                              ></i>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <i
                                className="fa fa-edit fa-2x"
                                onClick={() => props.getcategory(item._id)}
                              ></i>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* <UpdateCategory updatesave={props.updatesave} close={props.close}  setUpdateCategory={props.setUpdateCategory} UpdateCategory={props.UpdateCategory} id={props.id}/> */}
            </div>
          </div>
        </div>
      </Conntainer>
    </>
  );
};

export default Procontent;
