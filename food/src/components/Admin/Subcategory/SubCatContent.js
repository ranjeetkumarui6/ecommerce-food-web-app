import React, { useState } from 'react'
import styles from './Subcatcontent.module.css'
// import UpdateCategory from '../../../Pages/UpdateCategory'
import Button from '../../Widgets/AdminButtons/Button'
import UpdateCategory from '../../../Pages/UpdateCategory'
import UpdateSubCategory from '../../../Pages/UpdateSubCategory'
const SubCatContent = (props) => {
    
    const handlecategoryid=(e)=>{
        props.getsubcategory(e.target.value);
        props.setcategoryid(e.target.value);
    }
   
  return (
    <>
      <div className={styles.SubCatContent}>
                <div className={styles.SubcategoryFormContainer}>
                    <span className={styles.SubcategoryTittle}>SubCategory </span>
                    <div className={styles.Subcategoryform}>
                    <label className={styles.SubCatlabel}>Section Name Here</label>
                    <select  className={styles.SubCatSelect} onChange={handlecategoryid}>
                        <option className={styles.option} value="choose section name" selected>choose section name</option>
                       {
                        props.categoryname.map((item)=>{
                            return <option className={styles.option} value={item._id}>{item.Categoryname}</option>
                        })
                    }
                    </select>
                        <label className={styles.SubCatlabel}>SubSection Name</label>
                        <input type="text" ref={props.inputref} value={props.subcategoryname} onChange={(e)=>{props.setsubcategoryname(e.target.value)}}  placeholder="Enter Section Name Here" className={styles.SubCatInput} />
                        <label className={styles.SubCatlabel}>SubSection Image</label>
                        <label htmlFor="files" className={styles.SubCatFile} ref={props.ref1}> File Here</label>
                        <input type="file" id='files'  onChange={(e)=>props.setsubcategorypic(e.target.files[0])} />
                        <div className={styles.SubCatbuttons}>
                            <Button name="CLEAR" savecategory={props.clear} />
                            <Button name="SAVE" savecategory={props.savesubcategory}  />
                        </div>
                    </div>
                </div>
                <div className={styles.SubcategoryTableContainer}>
                    <span className={styles.SubtableTittle}>SubCategory Table </span>
                    <div className={styles.SubcategoryTable}>
                        <table className={styles.table}>
                            <thead className={styles.thead}>
                                <tr>
                                    <td colSpan={3} className={styles.rowspan}>SubCategory Table Here</td>
                                </tr>
                                <tr className={styles.tr} >
                                    <th className={styles.th}>SubCategory Image</th>
                                    <th className={styles.th}>SubCategory Name</th>
                                    <th className={styles.th}>Action</th>

                                </tr>
                            </thead>
                            <tbody className={styles.tbody}>
                                {
                                    props.subcategorydata.map((item) => {
                                        return(
                                        <tr className={styles.tr}>
                                            <td className={styles.td}>
                                                <img src={"http://localhost:7000/"+item.SubCategorypic} alt="Subcatpic" style={{width:"7.5rem",height:"100%"}}/>
                                            </td>
                                            <td className={styles.td}>{item.SubCategoryname}</td>
                                            <td className={styles.td}>
                                                <div className={styles.icondiv}>
                                                <i className='fa fa-trash fa-2x' style={{color:"red"}} onClick={()=>props.deletesubcategory(item._id)}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i className='fa fa-edit fa-2x' style={{color:"blue"}} onClick={()=>props.getupdatesubcategory(item._id)}></i>
                                                </div>
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <UpdateSubCategory updatesave={props.updatesave} close={props.close}  SetUpdateSubCategory={props.SetUpdateSubCategory} UpdateSubCategory={props.UpdateSubCategory} id={props.id}/>
            </div>
            
    </>
  )
}

export default SubCatContent
