import React from 'react';
import Header from '../components/layout2/Header';
import Footer from '../components/layout2/Footer';

const Layout2 = ({ children }) => (
    <React.Fragment>
        <div className="body">
            <Header />
            {children}
            <Footer />
        </div>
    </React.Fragment>
);

export default Layout2;