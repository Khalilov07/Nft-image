import React from 'react';
import { Outlet } from 'react-router-dom';
import './header.css'

const Hader = () => {
    return (
        <>
        <header>
            <nav>
                <h1>NFT - IMAGE</h1>
            </nav>
        </header>
        <hr />
        <Outlet/>
        </>

    );
};

export default Hader;