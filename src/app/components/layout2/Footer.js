import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import social1 from '../../../assets/img/social1.png';
import social2 from '../../../assets/img/social2.png';
import social3 from '../../../assets/img/social3.png';
import social4 from '../../../assets/img/social4.png';
import social5 from '../../../assets/img/social5.png';

const Footer = (props) => {
    let location = useLocation();
console.log(location.pathname)
    return ( 
        <div 
            className = {
                location.pathname == '/roadmap' ? "footer2 special-roadmap" : location.pathname == '/buyEarnx' ? "footer2 earnx-footer" : "footer2"} >
            <div className="sub-footer">

            </div>
            <div className="main-footer">
                <div className="footer-nav">
                    <div className="nav-list">
                        <div className="list">
                            <div className="title">
                                Pages
                            </div>
                            <div className="list-icon">
                                <Link to='/'>
                                    Home
                                </Link>
                            </div>
                            <div className="list-icon">
                                <Link to='/nft'>
                                    NFTs
                                </Link>
                            </div>
                            <div className="list-icon">
                                <Link to='/buyEarnx'>
                                    Buy EarnX
                                </Link>
                            </div>
                            <div className="list-icon">
                                <Link to='/roadmap'>
                                    Roadmap
                                </Link>
                            </div>
                            <div className="list-icon">
                                <Link to='/'>
                                    Whitepaper
                                </Link>
                            </div>
                        </div>
                        <div className="list">
                            <div className="title">
                                Home
                            </div>
                            <div className="list-icon">
                                <Link to='/'>
                                    What is EarnX?
                                </Link>
                            </div>
                            <div className="list-icon">
                                <Link to='/'>
                                    Why EarnX?
                                </Link>
                            </div>
                            <div className="list-icon">
                                <Link to='/nft'>
                                    NFTs
                                </Link>
                            </div>
                            <div className="list-icon">
                                <Link to='/'>
                                    EarnX live stats
                                </Link>
                            </div>
                        </div>
                        <div className="list">
                            <div className="title">
                                Tracking
                            </div>
                            <div className="list-icon">
                                <Link to='/'>
                                    Contract
                                </Link>
                            </div>
                            <div className="list-icon">
                                <Link to='/'>
                                    DxSale
                                </Link>
                            </div>
                            <div className="list-icon">
                                <Link to='/'>
                                    BogCharts
                                </Link>
                            </div>
                            <div className="list-icon">
                                <a href='https://coinmarketcap.com/currencies/earnx/'>
                                    CoinMarketCap
                                </a>
                            </div>
                            <div className="list-icon">
                                <a href='https://www.coingecko.com/en/coins/earnx'>
                                    CoinGecko
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-text">
                        Join our community!
                        <div className="social-icons">
                            <a href="http://twitter.com" className="social-icon">
                                <img src={social1} alt="social-icon" />
                            </a>
                            <a href="http://discord.com" className="social-icon">
                                <img src={social2} alt="social-icon" />
                            </a>
                            <a href="http://reddit.com" className="social-icon">
                                <img src={social3} alt="social-icon" />
                            </a>
                            <a href="http://telegram.com" className="social-icon">
                                <img src={social4} alt="social-icon" />
                            </a>
                            <a href="http://youtube.com" className="social-icon">
                                <img src={social5} alt="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="licensure">
                    © Copyright 2021, EarnX Inc. | All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer;