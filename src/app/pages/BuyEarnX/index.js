import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import earnswap from '../../../assets/img/earnswap.png'
import pancakeswap from '../../../assets/img/pancakeswap.png'
import whitebit from '../../../assets/img/whitebit.png'
import hotbit from '../../../assets/img/hotbit.png'
import bitmart from '../../../assets/img/bitmart.png'
import cointiger from '../../../assets/img/contiger.png'
import earnxright from '../../../assets/img/earnxright.png';
import rabbit from '../../../assets/img/rabbit.png';
import video from '../../../assets/img/video.png';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

class BuyEarnX extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deviceType: 'desktop'
        }
    }

    render() {
        const CustomRightArrow = ({ onClick, ...rest }) => {
            const {
              onMove,
              carouselState: { currentSlide, deviceType }
            } = rest;
            // onMove means if dragging or swiping in progress.
            return <button onClick={() => onClick()} className="c-arrow-left" />;
        };

        const CustomLeftArrow = ({ onClick, ...rest }) => {
            const {
              onMove,
              carouselState: { currentSlide, deviceType }
            } = rest;
            // onMove means if dragging or swiping in progress.
            return <button onClick={() => onClick()} className="c-arrow-right" />;
        };

        return (
            <div className="page buyEarnX">
                <div className="page-title">
                    <span className="black-text">Buy</span><span className="pink-text">EarnX</span> 
                </div>
                <div className="page-desc">
                    And become part of a great family!
                </div>

                <div className="where-buy">
                    <div className="top">

                    </div>
                    <div className="main">
                        <div className="title">
                            Where to Buy?
                        </div>
                        <div className="slider">
                            <div className="border-element-top"> </div>
                            <Carousel 
                                responsive={responsive}
                                swipeable={true}
                                draggable={true}                                
                                infinite={true}
                                // autoPlay={this.state.deviceType !== "mobile" ? true : false}
                                autoPlay={false}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["mobile"]}
                                customRightArrow={<CustomRightArrow />}
                                customLeftArrow={<CustomLeftArrow />}
                            >
                                <div className="coin-types">
                                    <img src={earnswap} alt="earnswap" />
                                </div>
                                <div className="coin-types">
                                    <img src={pancakeswap} alt="pancakeswap" />
                                </div>
                                <div className="coin-types">
                                    <img src={whitebit} alt="whitebit" />
                                </div>
                                <div className="coin-types">
                                    <img src={hotbit} alt="hotbit" />
                                </div>
                                <div className="coin-types">
                                    <img src={bitmart} alt="bitmart" />
                                </div>
                                <div className="coin-types">
                                    <img src={cointiger} alt="cointiger" />
                                </div>
                            </Carousel>
                            <div className="border-element-bottom"> </div>
                        </div>
                        <div className="main-desc">
                            <div className="left">
                                <div className="title">
                                     Warning trading on DEX  
                                </div>
                                <div className="text">
                                    As EarnX is a frictionless, deflationary token, Each transaction you make will attract a 10% fees or tax which 5% will be distributed to HOLDers and other 5% added to liquidity pool(LP). 
                                </div>
                            </div>
                            <div className="right">
                                <div className="title">
                                     Warning trading on CEX  
                                </div>
                                <div className="text">
                                    While transferring into exchanges read carefully the terms given over there, some exchanges may tax 20$ of your deposit because they make another transaction into their Hot Wallet
                                </div>
                            </div>
                        </div>
                        <div className="contract">
                            <div className="title">
                                EarnX contract address:
                            </div>
                            <div className="btn">
                                0x9c28e48ea9170d9a9cb76d338655b8bd4124bc7a
                            </div>
                        </div>      
                    </div>
                    <div className="bottom">
                        
                    </div>
                </div>

                <div className="tokenomics">
                    <div className="title">
                        Tokenomics
                    </div>
                    <div className="sub-title">
                        EarnX has a 10% tax on all transactions to prevent price manipulation and encourage holding. 
                        <div>The 10% tax is splitted into two:</div>
                    </div>
                    <div className="content">
                        <div className="left">
                            <div className="title">
                                LIQUIDITY
                            </div>
                            <div className="text">
                                50% (5% of the transaction) is locked In the liquidity pool for 4 years.
                            </div>
                            <div className="title">
                                HOLDERS
                            </div>
                            <div className="text">
                                50% (5% of the transaction) goes as a weighed distribution to all 
                                holders and the bum address. This means holders can benefit from the auto
                                staking rewards by simply holding the tokens in TrustWallet / MetaMask
                                or by leaving them on exchange to participate in NFTs exclusive whitelist if rewards
                                are not your interest.
                                <div style={{'height' : '20px'}}></div>
                                57% of coins were burnt on launch. At the moment, the bum address 
                                holds XXX% of the coins and it is increasing. This burnt adress can't be accessed, and
                                therefore it is impossible to sell these coins. 5% of the fee going to holders will 
                                be distributed proportionately to the size of wallets, this includes the burnt wallet
                                Hence, more and more tokens are getting burnt on every
                                transaction (3.2% of every transaction at the moment).
                            </div>
                        </div>
                        <div className="right">
                            <div className="earn-right">
                                <img src={earnxright} alt="earn-right" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-section">

                </div>
                <div className="disclaimer">
                    <div className="video-play">
                        <div className="left">
                            <div className="title">
                                Having trouble buying EarnX from Pancakeswap?
                            </div>
                            <div className="desc">
                                <div className="avatar">
                                    <img src={rabbit} alt="rabbit" />
                                </div>
                                <div className="border-right">

                                </div>
                                <div className="text">
                                    We know buying on Pancakswap can sometimes be difficult. That's why we explain it step by step in this tutorial video.
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="video-img">
                                <video width="100%" height="100%" controls autoPlay >
                                    <source src="2.mp4" type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="title">
                            Disclaimer
                        </div>
                        <div className="text">
                        Trading cryptocurrencies carries a high level of risk, and may not be suitable for all investors. 
                        Before deciding to trade cryptocurrency you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you  cannot afford to lose. Investing in EarnX is your personal decision and is not influenced by Yearn Classic Finance.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyEarnX;