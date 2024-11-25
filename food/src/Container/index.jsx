import styles from './index.module.css'
const Conntainer = ({children}) => {
  return (
    <>
     <div className={styles.container}>{children}</div> 
    </>
  )
}

export default Conntainer
