import React from 'react'
import styles from './catcontent.module.css'
import NavButton from '../../Widgets/NavButtons/NavButton'
import Button from '../../Widgets/AdminButtons/Button'
import UpdateCategory from '../../../Pages/UpdateCategory';
import Conntainer from '../../../Container';
import { FaEdit, FaTrash } from "react-icons/fa";

function CatContent(props) {

    const{arrayjson}=props;

    return (
        <>
        <Conntainer>
            <div className={styles.CatContent}>
                <div className={styles.categoryFormContainer}>
                    <span className={styles.categoryTittle}>Add Category </span>
                    <div className={styles.categoryform}>
                        <label className={styles.Catlabel}>Section Name</label>
                        <input type="text" value={props.valinput} ref={props.inputref} onChange={(e) => props.setCategoryname(e.target.value)} placeholder="Enter Section Name Here" className={styles.CatInput} />
                        <label className={styles.Catlabel}>Section Image</label>
                        <label htmlFor="files" className={styles.CatFile}  ref={props.ref1} > File Here</label>
                        <input type="file" id='files' ref={props.ref2}  onChange={(e) => props.setCategorypic(e.target.files[0])} />
                        <div className={styles.Catbuttons}>
                            <Button name="CLEAR" savecategory={props.clear} />
                            <Button name="SAVE" savecategory={props.savecategory} />
                        </div>
                    </div>
                </div>
                <div className={styles.categoryTableContainer}>
                    <span className={styles.tableTittle}>Category Table </span>
                    <div className={styles.categoryTable}>
                        <table className={styles.table}>
                            <thead className={styles.thead}>
                                <tr>
                                    <td colSpan={3} className={styles.rowspan}>Category Table Here</td>
                                </tr>
                                <tr className={styles.tr} >
                                    <th className={styles.th}>Category Image</th>
                                    <th className={styles.th}>Category Name</th>
                                    <th className={styles.th}>Action</th>

                                </tr>
                            </thead>
                            <tbody className={styles.tbody}>
                                {
                                    arrayjson.map((item) => {
                                        return(
                                        <tr className={styles.tr}>
                                            <td className={styles.td}>
                                                <img src={"http://localhost:7000/"+item.Categorypic} alt="catpic" style={{width:"7.5rem",height:"100%"}}/>
                                            </td>
                                            <td className={styles.td}>{item.Categoryname}</td>
                                            <td className={styles.td}>
                                                <div className={styles.icondiv}>
                                                <i><FaTrash size={30} color='red' onClick={()=>props.deletecategory(item._id)}/></i>&nbsp;&nbsp;&nbsp;
                                                <i><FaEdit size={30} color='blue' onClick={()=>props.getcategory(item._id)}/></i>
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
                <UpdateCategory updatesave={props.updatesave} close={props.close}  setUpdateCategory={props.setUpdateCategory} UpdateCategory={props.UpdateCategory} id={props.id}/>
            </div>
            </Conntainer>
        </>
    )
}

export default CatContent
