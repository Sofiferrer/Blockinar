import React from 'react';
import { Footer, Header } from './components';
import { Main } from './components/Main';
import "./style.css"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export { Layout }