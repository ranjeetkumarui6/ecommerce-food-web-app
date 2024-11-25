import React from "react";
import styles from "./footer.module.css";
import Conntainer from "../../../Container";
const Footer = () => {
  return (
    <>
      <Conntainer>
        <div className={styles.footer}>
          @copyright ranjeetkumar78734@gmail.com
        </div>
      </Conntainer>
    </>
  );
};

export default Footer;
