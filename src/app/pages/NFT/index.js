import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import search_icon from '../../../assets/img/search-icon.png';
import checkout from '../../../assets/img/checkout.png';
import arrow_down from '../../../assets/img/arrow-down.png';
import product1 from '../../../assets/img/product1.png';
import product2 from '../../../assets/img/product2.png';
import product3 from '../../../assets/img/product3.png';
import cancel from '../../../assets/img/cancel.png';
import minus from '../../../assets/img/minus.png';
import plus from '../../../assets/img/plus.png';

class NFT extends Component {
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
        return (
            <div className="page nft">
                <div className="category-container">
                    <div className="titles">
                        <div className="title">
                            Categories
                        </div>
                        <div className="sub-title">
                            Rugs
                        </div>
                        <div className="mini-title">
                            More coming soon!
                        </div>
                    </div>
                    <div className="border-middle">

                    </div>
                    <div className="title">
                        Collection
                    </div>
                    <div className="collections">
                        <div className="filter">
                            <div className="filter-item">
                                <div>
                                    <input type="checkbox" name="filter" />
                                </div>
                                <div className="check-label">
                                    All
                                </div>  
                            </div>
                            <div className="filter-item">
                                <div>
                                    <input type="checkbox" name="filter" />
                                </div>
                                <div className="check-label">
                                    Bitcoin (BTC)
                                </div>  
                            </div>
                            <div className="filter-item">
                                <div>
                                    <input type="checkbox" name="filter" />
                                </div>
                                <div className="check-label">
                                    Binance Coin (BNB)
                                </div>  
                            </div>
                            <div className="filter-item">
                                <div>
                                    <input type="checkbox" name="filter" />
                                </div>
                                <div className="check-label">
                                    Dogecoin (DOGE)
                                </div>  
                            </div>
                            <div className="filter-item">
                                <div>
                                    <input type="checkbox" name="filter" />
                                </div>
                                <div className="check-label">
                                    Ripple (XRP)
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shop-container">
                    <div className="search-container">
                        <div className="search-bar">
                            <div className="label">
                                NFT Shop
                            </div>
                            <div className="border-right">

                            </div>
                            <div className="search-input">
                                <div className="input-container">
                                    <input type="text" placeholder="What are you looking for? ..." />
                                </div>
                                <div className="search-addon">
                                    <img src={search_icon} alt="search" />
                                </div>
                            </div>
                            <div className="checkout" onClick={this.showCart}>
                                <div className="checkout-left">
                                    <img src={checkout} alt="checkout" />
                                </div>
                                <div className="checkout-right">
                                    <img src={arrow_down} alt="arrow" />
                                </div>
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
                    <div className="product-label">
                        <div className="sort">
                            <div className="sort-flex">
                                <div className="sort-label">
                                    Sort by
                                </div>
                                <div className="sort-arrow">
                                    <img src={arrow_down} alt="arrow" />
                                </div>
                            </div>
                            <div className="recommend">
                                Recommended
                            </div>  
                        </div>
                        <div className="rugs-label">
                            Rugs - All
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="coming-soon">
                            Coming Soon...
                        </div>
                        {/* <div className="product">
                            <div className="product-img">
                                <img src={product1} alt="product" />
                            </div>
                            <div className="product-name">
                                BNB Fancy Rug
                            </div>
                            <div className="product-value">
                                <span>$</span>xxx,xx = <span>xxxxxxxxx, xxx EarnX</span> 
                            </div>
                            <div className="product-btns">
                                <div className="btn">
                                    <Link to="/nft/1">View Details</Link>
                                </div>
                                <div className="btn">
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                        <div className="border-right"></div>
                        <div className="product">
                            <div className="product-img">
                                <img src={product2} alt="product" />
                            </div>
                            <div className="product-name">
                                BNB Golden Rug
                            </div>
                            <div className="product-value">
                                <span>$</span>xxx,xx = <span>xxxxxxxxx, xxx EarnX</span> 
                            </div>
                            <div className="product-btns">
                                <div className="btn">
                                    <Link to="/nft/1">View Details</Link>
                                </div>
                                <div className="btn">
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                        <div className="border-right-2"></div>
                        <div className="product">
                            <div className="product-img">
                                <img src={product3} alt="product" />
                            </div>
                            <div className="product-name">
                                DOGE Pattern Rug
                            </div>
                            <div className="product-value">
                                <span>$</span>xxx,xx = <span>xxxxxxxxx, xxx EarnX</span> 
                            </div>
                            <div className="product-btns">
                                <div className="btn">
                                    <Link to="/nft/1">View Details</Link>
                                </div>
                                <div className="btn">
                                    Add to Cart
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="pagination">
                        <div className="pagi-label">
                            Page
                        </div>
                        <div className="pagi-num">
                            1
                        </div>
                        <div className="pagi-num">
                            2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NFT;