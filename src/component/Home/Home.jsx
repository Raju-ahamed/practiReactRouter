import React from 'react';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router';
import Head from '../Head/Head';
import Footer from '../footer/Footer';
import './home.css'
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='conteiner'>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;