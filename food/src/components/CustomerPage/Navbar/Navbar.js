import React from 'react'
import styles from './navbar.module.css'
import NavButton from '../../Widgets/NavButtons/NavButton'
import Conntainer from '../../../Container'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
        <Conntainer>
            <header className={styles.navHeaderContainer}>
                <nav className={styles.navbarContainer}>
                    <div className={styles.navLogoContainer}>
                        <span className={styles.navLogo}>FastFood</span>
                    </div>
                    <ul>
                        <div className={styles.leftNav}>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Vendords</a></li>
                            <li><a href="#">Products</a></li>

                        </div>
                    </ul>
                </nav>
                <div className={styles.rightNav}>
                           <NavButton name="Login"/>
                           <NavButton  name="Signup"/>
                        </div>
            </header>
            </Conntainer>
        </>
    )
}

export default Navbar
