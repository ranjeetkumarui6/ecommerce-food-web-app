import React from 'react'
import styles from './updatecategory.module.css'
import Button from '../components/Widgets/AdminButtons/Button'
import Close from '../components/Widgets/Closebutton/Close'
const UpdateCategory = (props) => {
  return (
    <>
    
      <div id={props.id} style={{display:"none"}}  className={styles.ucategoryFormContainer}>
                    <span className={styles.ucategoryTittle}>Update Category </span>
                    <div className={styles.ucategoryform}>
                        <label className={styles.uCatlabel}>Section Name</label>
                        <input type="text" value={props.UpdateCategory} onChange={(e)=>props.setUpdateCategory(e.target.value)}  placeholder="Enter Section Name Here" className={styles.uCatInput} />
                       
                        <div className={styles.uCatbuttons}>
                            <Button name="CLOSE" savecategory={props.close}  />
                            <Button name="Update" savecategory={props.updatesave} />
                        </div>

                    </div>
                </div>
    </>
  )
}

export default UpdateCategory
