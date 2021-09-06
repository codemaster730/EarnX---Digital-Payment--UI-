import React, { Component } from 'react';

import arrow_left from '../../../../assets/img/arrow-left.png';
import arrow_down from '../../../../assets/img/arrow-down.png';
import checkout from '../../../../assets/img/checkout.png';
import product1 from '../../../../assets/img/product1.png';
import cancel from '../../../../assets/img/cancel.png';
import minus from '../../../../assets/img/minus.png';
import plus from '../../../../assets/img/plus.png';

export default class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_cart: false
        }

        this.showCart = this.showCart.bind(this);
    }

    showCart() {
        console.log("click")
        const {is_cart} = this.state;
        this.setState({is_cart : !is_cart});
    }

    render() {
        const id = this.props.match.params.id;

        return (
            <div className="nft-detail">
                <div className="top-bar">
                    <div className="breadcrumb">
                        <div className="left">
                            <img src={arrow_left} alt="arrow-left" />
                        </div> 
                        <div className="right">
                            NFT Shop
                        </div>
                    </div>
                    <div className="checkout-container">
                        <div className="title">
                            Product Details
                        </div>
                        <div className="checkout">
                            <a className="left"  onClick={this.showCart}>
                                <img src={checkout} alt="checkout" />
                            </a>
                            <a className="right" onClick={this.showCart}>
                                <img src={arrow_down} alt="arrow-down" />
                            </a>
                            {
                                this.state.is_cart ? <>
                                <div className="cart-container">
                                    <div className="sub-triangle">

                                    </div>
                                    <div className="cart-item">
                                        <div className="product-img">
                                            <img src={product1} alt="product1" />
                                        </div>
                                        <div className="product-details">
                                            <div className="product-name">
                                                BNB Golden Rug
                                            </div>
                                            <div className="product-value">
                                                $xxx,xx
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <div className="cancel">
                                                <img src={cancel} alt="cancel" />
                                            </div>
                                            <div className="calc">
                                                <div className="minus">
                                                    <img src={minus} alt="minus" />
                                                </div>
                                                <div className="calc-value">
                                                    1
                                                </div>
                                                <div className="plus">
                                                    <img src={plus} alt="minus" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="product-img">
                                            <img src={product1} alt="product1" />
                                        </div>
                                        <div className="product-details">
                                            <div className="product-name">
                                                BNB Golden Rug
                                            </div>
                                            <div className="product-value">
                                                $xxx,xx
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <div className="cancel">
                                                <img src={cancel} alt="cancel" />
                                            </div>
                                            <div className="calc">
                                                <div className="minus">
                                                    <img src={minus} alt="minus" />
                                                </div>
                                                <div className="calc-value">
                                                    1
                                                </div>
                                                <div className="plus">
                                                    <img src={plus} alt="minus" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="product-img">
                                            <img src={product1} alt="product1" />
                                        </div>
                                        <div className="product-details">
                                            <div className="product-name">
                                                BNB Golden Rug
                                            </div>
                                            <div className="product-value">
                                                $xxx,xx
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <div className="cancel">
                                                <img src={cancel} alt="cancel" />
                                            </div>
                                            <div className="calc">
                                                <div className="minus">
                                                    <img src={minus} alt="minus" />
                                                </div>
                                                <div className="calc-value">
                                                    1
                                                </div>
                                                <div className="plus">
                                                    <img src={plus} alt="minus" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-footer">
                                        <div className="total-value">
                                            Total: <span className="t-val">$xxx,xxx</span> = xxxxxxxxxx,xxx EarnX
                                        </div>
                                        <div className="checkout-btn">
                                            Checkout
                                        </div>
                                    </div>
                                </div>
                                <div className="triangle"></div>
                                </> : null
                            }
                        </div>
                    </div>
                </div>
                <div className="product-detail">
                    <div className="product-info">
                        <div className="product-img">
                            <div className="sub-img">
                                <div className="sub-img-container">
                                    <img src={product1} alt="product-sub-img" />
                                </div>
                                <div className="sub-img-container">
                                    Pic 2
                                </div>
                                <div className="sub-img-container">
                                    Pic 3
                                </div>
                                <div className="sub-img-container">
                                    Pic 4
                                </div>
                            </div>
                            <div className="main-img">
                                <img src={product1} alt="product-main-img" />
                            </div>
                            <div className="sub-img-mobile">
                                <div className="sub-img-container">
                                    <img src={product1} alt="product-sub-img" />
                                </div>
                                <div className="sub-img-container">
                                    Pic 2
                                </div>
                                <div className="sub-img-container">
                                    Pic 3
                                </div>
                                <div className="sub-img-container">
                                    Pic 4
                                </div>
                            </div>
                        </div>
                        <div className="product-desc">
                            <div className="product-name">
                                Binance Coin (BNB) Golden Rug
                            </div>
                            <div className="product-value">
                                <span className="dollar">$xxx, xx</span> = <span className="coin">xxxxxxxxx,xxx EarnX</span>
                            </div>
                            <div className="product-cart">
                                <div className="quantity">
                                    <div className="qty">
                                        <div className="left">Qty:</div>
                                        <div>
                                            <img src={arrow_down} />
                                        </div>
                                    </div>
                                    <div className="num">
                                        1
                                    </div>
                                </div>
                                <div className="cart-btn">
                                    <div>
                                        Add to Cart
                                    </div>
                                </div>
                            </div>
                            <div className="desc-text">
                                <div className="description">
                                    <div className="title">
                                        Description:
                                    </div>
                                    <div className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eisusmod tempor incididumt ut labore et dolaore magna a. Ut enim ad minim venaim, quis nostrion ullamco laborios nisi ut aliquip exdo consequat. Duis aute irure dolor ierit in voluptate velit esse cillumd
                                    </div>
                                </div>
                                <div className="specification">
                                    <div className="title">
                                        Specifications
                                    </div>
                                    <div className="text">
                                        <div className="unit"><span>Height:</span> xxxxcm / xxxx"</div>
                                        <div className="unit"><span>Width:</span> xxxxcm / xxxx"</div>
                                        <div className="unit"><span>Materials:</span> suede</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};