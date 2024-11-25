import React from 'react'
import './home.css';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner/Banner';
import Main from './Main/Main';
import Conntainer from '../../../Container';
const Home = () => {
  return (
    <>
    <Conntainer>
      <div className="Home-page-container">
        <div className="content">
        <Banner/>
        <Main/>
        </div>
      </div>
      </Conntainer>
    </>
  )
}

export default Home
