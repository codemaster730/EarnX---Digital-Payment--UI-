import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import reason from '../../../assets/img/polygorn1.png';
import bnb_rug from '../../../assets/img/content-round-right.png';
import unique_rug from '../../../assets/img/content-round-left.png';
import arrow from '../../../assets/img/arrow.png';

import dollar from '../../../assets/img/icons/dollar.png';
import fire from '../../../assets/img/icons/fire.png';
import hands from '../../../assets/img/icons/hands.png';
import house from '../../../assets/img/icons/house.png';
import circle from '../../../assets/img/icons/circle.png';
import arrows from '../../../assets/img/icons/arrows.png';
import bog from '../../../assets/img/icons/bog.png';
import bsc from '../../../assets/img/icons/bsc.png';
import banner_title from "../../../assets/img/banner-title.png";
import banner_round from "../../../assets/img/banner-round.png";
import pole from '../../../assets/img/pole.png';
import info from '../../../assets/img/info-btn.png'
import article from '../../../assets/img/article-btn.png'
import gecko from '../../../assets/img/gecko.png'
import market from '../../../assets/img/market.png'
import yahoo from '../../../assets/img/yahoo.png'
import journal from '../../../assets/img/journal.png'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    _onLoad

    render() {
        return (
            <div className="page home">
                <div className="banner-container">
                    <div className="banner-title">
                        <img src={banner_title} alt="banner-title" />
                    </div>
                    <div className="banner-round">
                        <img src={banner_round} alt="banner-round" />
                    </div>
                    <div className="banner-text">
                        <div>
                            A subsidiary of Yearn Classic Finance Ecosystem
                        </div>
                    </div>
                </div>
                <div className="section-1" id="slide1">
                    <div className="title">
                        What is EarnX?
                    </div>
                    <div className="description">
                        EarnX is a unique utility token developed to support Non-Fungible Token (NFT) through the Yearn Classic Finance platform ecosystem.

                        The evolution of NFTs has taken over the technological advancement of purchasing and selling unique assets virtually. Being one of the early adopters within the NFT industry, EarnX presents a unique opportunity for individuals to profit from the one of a kind utility token.

                        With EarnX, you will be able to purchase both a physical product and its unique NFT via EarnX NFT market place.
                        An RFID chip is implemented inside the physical product and it will give you access to the unique NFT linked with these physical products.

                        Due to EarnX being a community-based token, these auctions will be available to al EarnX holders. The community also will vote for the products they want to put next into the marketplace.

                        <div>
                            <div className="sub-title">
                                Interested in our future plans?
                            </div>
                            <div className="roadmap-btn">
                                <Link to="/roadmap">Check our roadmap!</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-2">
                    <div className="title">
                        We adhere to three main principles
                    </div>
                    <div className="principles">
                        <div className="principle-item-1">
                            <div className="text">
                                We burn our supply fast, so EarnX will increase in value.
                            </div>
                        </div>
                        <div className="principle-item-2">
                            <div className="text">
                                
                            </div>
                        </div>
                        <div className="principle-item-3">
                            <div className="text">
                                EarnX token has a real value, as you can buy NFTs with it.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-3" id="slide2">
                    <div className="title">
                        Why EarnX?
                    </div>
                    <div className="reasons">
                        <div className="reason-img">
                            <div className="reason-desc-1 reason-fixed">
                                <div className="title">
                                    Safety
                                </div>
                                <div className="desc-container">
                                    <div className="desc-line"></div>
                                    You are safe against any rug pulls. Token ownership is renounced and liquidity is locked with DxSale.
                                </div>
                            </div>
                            <div className="reason-desc-2 reason-fixed">
                                <div className="left">
                                    <div className="title">
                                        Continuous Burning
                                    </div>
                                    <div className="desc-container">
                                        <div className="desc-line"></div>
                                        You benefit as supply is limited and constantly burning, which makes it scarce, hence price stability is guaranteed.
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="title">
                                        Continuous Redistribution
                                    </div>
                                    <div className="desc-container">
                                        <div className="desc-line"></div>
                                        You benefit from a constantly increasing token value, based on redistribution channels and automatic LP contribution by each trade.
                                    </div>
                                </div>
                            </div>
                            <img src={reason} alt="reason" />
                            <div className="reason-desc-3 reason-fixed">
                                <div className="left">
                                    <div className="title">
                                        Distributed to Holders 
                                    </div>
                                    <div className="desc-container">
                                        <div className="desc-line"></div>
                                        Every transaction attracts a 10% tax. Half of it gets redistributed proportionately among holders and the other half adds to the EarnX Liquidity Pool. So you can just HOLD and earn!
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="title">
                                        Low Gas Fees
                                    </div>
                                    <div className="desc-container">
                                        <div className="desc-line"></div>
                                        You benefit from low gas fee & the highest scalability, as EarnX is built on the BSC network.
                                    </div>
                                </div>
                            </div>
                            <div className="reason-desc-4 reason-fixed">
                                <div className="title">
                                    Strong Utility
                                </div>
                                <div className="desc-container">
                                    <div className="desc-line"></div>
                                    At anytime, you can utilize your tokens against our unique, yet physical collectibles, providing utility ot EarnX.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-4" id="slide3">
                    <div className="nfts-container">
                        <div className="right">
                            <div className="bnb-rug">
                                <div className="circle">
                                    <img src={bnb_rug} alt="circle" />
                                </div>
                            </div>
                            <div className="bnb-desc">
                                <div className="title">
                                    NFTs
                                </div>
                                <div className="desc-text">
                                The NFTs business is booming and being an early adopter gives EarnX 
                                an advantage of excelling in this domain. What makes EarnX unique is 
                                that it merges traditional art with modern NFT technology. EarnX 
                                is currently producing rugs, but other products will be added to the 
                                inventary soon.
                                </div>
                                <div className="shop-btn">                                        
                                    <Link to="/nft" className="btn">
                                        Visit NFT shop
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="left">
                            <div className="unique-rug">
                                <div className="circle">
                                    <img src={unique_rug} alt="circle" />
                                </div>
                            </div>
                            <div className="bnb-desc">
                                <div className="desc-text">
                                    <div>
                                    Products can be bought from the NFT shop with your EarnX balance. 
                                    Just connect your wallet and look for the product that you want. It’s as simple 
                                    as that! Of course your product will be shipped to you with a luxury packing.

                                    See the video down below to get an idea of how you will receive your product.
                                    </div>
                                    <div className="pole">
                                        <video width="100%" height="100%" controls autoPlay >
                                            <source src="1.MP4" type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-5" id="slide4">
                <div className="stats-container">
                        <div className="title">
                            EarnX live stats
                        </div>
                        <div className="stats-flex">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <img src={dollar} alt="icon" />
                                </div>
                                <div className="border-vertical"></div>
                                <div className="stat-desc">
                                    Current Value:
                                    <div className="stat-value">
                                    0.000001
                                    </div>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <img src={hands} alt="icon" />
                                </div>
                                <div className="border-vertical"></div>
                                <div className="stat-desc">
                                    Holders:
                                    <div className="stat-value">
                                        20+ K
                                    </div>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <img src={house} alt="icon" />
                                </div>
                                <div className="border-vertical"></div>
                                <div className="stat-desc">
                                    Market cap:
                                    <div className="stat-value">
                                        15+ million
                                    </div>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <img src={fire} alt="icon" />
                                </div>
                                <div className="border-vertical"></div>
                                <div className="stat-desc">
                                    Tokens burnt:
                                    <div className="stat-value">
                                        13+ trillion
                                    </div>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <img src={circle} alt="icon" />
                                </div>
                                <div className="border-vertical"></div>
                                <div className="stat-desc">
                                    Circulation:
                                    <div className="stat-value">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <img src={arrows} alt="icon" />
                                </div>
                                <div className="border-vertical"></div>
                                <div className="stat-desc">
                                    Total supply:
                                    <div className="stat-value">
                                        20+ trillion
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="verify-container">
                        <div className="content">
                            <div className="bsc-bog">
                                <div className="title">
                                    Verify our stats on:
                                </div>
                                <div className="scan-chart">
                                    <img src={bsc} alt="bsc" />
                                </div>
                            </div>  
                            <div className="bsc-bog">
                                <div className="title">
                                    View real time chart on:
                                </div>
                                <div className="scan-chart">
                                    <img src={bog} alt="bog" />
                                </div>
                            </div>
                        </div>
                        <div className="readmore-earnx">
                            <div className="title">
                                Read more of EarnX
                            </div>
                            <div className="d-flex">
                                <div className="info">
                                    <div className="btn">
                                        <img src={info} />
                                    </div>
                                    <div className="d-flex">
                                        <div className="gecko">
                                            <img src={gecko} />
                                            <a href="https://www.coingecko.com/en/coins/earnx" className="view-btn">View</a>
                                        </div>
                                        <div className="market">
                                            <img src={market} />
                                            <a href="https://coinmarketcap.com/currencies/earnx/" className="view-btn">View</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="article">
                                    <div className="btn">
                                        <img src={article} />
                                    </div>
                                    <div className="d-flex">
                                        <div className="yahoo">
                                            <img src={yahoo} />
                                            <a href="https://finance.yahoo.com/news/earnx-community-concept-vision-153700889.html" className="view-btn">View</a>
                                        </div>
                                        <div className="journal">
                                            <img src={journal} />
                                            <a href="https://www.marketwatch.com/press-release/earnx-community-concept-and-vision-2021-04-28?tesla=y" className="view-btn">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="white-blank">

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;