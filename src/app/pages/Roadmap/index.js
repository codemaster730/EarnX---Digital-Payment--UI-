import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import check from '../../../assets/img/check.png';
import map from '../../../assets/img/roadmap.png';

class Roadmap extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div style={{'backgroundColor' : '#fff'}}>
                <div className="page roadmap">
                    <div className="title">
                        <span className="pink-text">EarnX</span><span className="black-text">Roadmap</span><span className="black-text">2021.</span>
                    </div>
                    <div className="foundation">
                        <div className="header">
                            <div className="left">

                            </div>
                            <div className="right">
                                Q2 - Foundation
                            </div>
                        </div>
                        <div className="text">
                            <div className="line">
                                <div className="img-container">
                                    <img src={check} alt="check" />
                                </div>
                                <div className="">
                                    Launch of EarnX trading
                                </div>
                            </div>
                            <div className="line">
                                <div className="img-container">
                                    <img src={check} alt="check" />
                                </div>
                                <div className="">
                                    Listing on information centers (CoinMarketCap, CoinGecko)
                                </div>
                            </div>
                            <div className="line">
                                <div className="img-container">
                                    <img src={check} alt="check" />
                                </div>
                                <div className="">
                                    Build a solid community of EarnXers
                                </div>
                            </div>
                            <div className="line">
                                <div className="img-container">
                                    <img src={check} alt="check" />
                                </div>
                                <div className="">
                                    Launch first marketing campaign
                                </div>
                            </div>
                            <div className="line">
                                <div className="img-container">
                                    <img src={check} alt="check" />
                                </div>
                                <div className="">
                                    Launch trading on tier 2 and tier 3 exchanges
                                </div>
                            </div>
                            <div className="line">
                                <div className="img-container">
                                    <img src={check} alt="check" />
                                </div>
                                <div className="">
                                    EarnX audited and vetted by a credibility agency
                                </div>
                            </div>
                            <div className="line">
                                <div className="img-container">
                                    <img src={check} alt="check" />
                                </div>
                                <div className="">
                                    Produce and deliver the first BNB collection Rugs
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="expansion">
                        <div className="header">
                            <div className="left">

                            </div>
                            <div className="right">
                                Q3 - Expansion
                            </div>
                        </div>
                        <div className="text">
                            Develop partnerships and affiliations
                            <div></div>
                            Populate the NFT space
                            <div></div>
                            Recruit new team members and bring more utility to EarnX
                        </div>
                    </div>
                    <div className="innovation">
                        <div className="header">
                            <div className="left">

                            </div>
                            <div className="right">
                                Q4 - Innovation
                            </div>
                        </div>
                        <div className="text">
                            Trading on major exchanges
                            <div></div>
                            Revolutionize the NFT world with research and innovation
                            <div></div>
                            Launch our own NFT auction platform with a crypto gateway
                        </div>
                    </div>
                    <div className="map">
                        <img src={map} alt="map" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Roadmap;