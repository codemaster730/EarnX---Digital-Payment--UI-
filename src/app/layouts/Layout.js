import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Layout = ({ children }) => (
    <React.Fragment>
        <div className="body">
            <Header />
            {children}
            <Footer />
        </div>
    </React.Fragment>
);

export default Layout;