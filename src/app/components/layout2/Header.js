import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../../assets/img/logo.png";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="header2-container">
                <div className="nav">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="nav-icons">
                        <div className="icon">
                            <Link to="/" >
                                Home
                            </Link>
                        </div>
                        <div className="icon">
                            <Link to="/nft">
                                NFTs
                            </Link>
                        </div>
                        <div className="icon">
                            <Link to="/buyEarnx">
                                Buy EarnX   
                            </Link>
                        </div>
                        <div className="icon">
                            <Link to="/roadmap">
                                Roadmap
                            </Link>
                        </div>
                        <div className="icon">
                            <Link to="/">Whitepaper</Link>
                        </div>
                    </div>
                    <div className="mobile-nav-toggle" onClick={() => setToggle(!toggle)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={toggle ? "mobile-nav-icons toggle-content" : "mobile-none toggle-content"}>
                    <div>
                        <Link onClick={() => setToggle(!toggle)} to="/">Home</Link>
                    </div>
                    <div>
                        <Link onClick={() => setToggle(!toggle)} to="/nft">NFTs</Link>
                    </div>
                    <div>
                        <Link onClick={() => setToggle(!toggle)} to="/buyEarnx">Buy EarnX</Link>
                    </div>
                    <div>
                        <Link onClick={() => setToggle(!toggle)} to="/roadmap">Roadmap</Link>
                    </div>
                    <div>
                        <Link onClick={() => setToggle(!toggle)} to="/">Whitepaper</Link>
                    </div>

                    <div>
                        <Link onClick={() => setToggle(!toggle)} to="/">Connect Wallet</Link>
                    </div>
                </div>
                <div className="connect">
                    <div className="connect-btn">
                        <div>Connect Wallet</div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Header;
