import React from "react";
import "../styles/style.css"

import logo from "../image/Group.png";
import IconProfile from "../image/icon-profile.png";
import Cart from "../image/cart.png";
import FotoDetail from "../image/FotoDetail.png";

import BubbleTeaGelatin from "../image/Toping/BubbleTeaGelatin.png";
import BubbleManggo from "../image/Toping/BubleManggo.png";
import Manggo from "../image/Toping/Manggo.png";
import GreenCoconut from "../image/Toping/GreenCoconut.png";


const DetailProduct = () => {
        return(
            <div>
                <div className="container">
                <nav className="navbar navbar-light">
                    <div className="col-6">
                        <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" height="50px" className="d-inline-block align-text-top ms-4" />
                        </a>
                    </div>
                    <div className="col-6 text-end">
                    <a className="navbar-brand" href="#">
                        <img src={Cart} alt="logo"  className="d-inline-block align-text-center ms-4" />
                        </a>
                        <a className="navbar-brand" href="#">
                        <img src={IconProfile} alt="logo" height="50px" className="d-inline-block align-text-top ms-4" />
                        </a>
                    </div>
                </nav>
                </div>

                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 offset-1">
                                <img src={FotoDetail} alt="" />
                            </div>
                            <div className="col ms-4">
                                <div className="row">
                                    <h1 className="fw-bold text-danger">Ice Coffe Palm Sugar</h1>
                                    <h5>Rp. 37.000</h5>
                                </div>
                                <div className="row pt-5 py-3">
                                    <h3 className="fw-bold text-danger">Topping</h3>
                                </div>
                                <div className="row d-flex text-center fw-bold text-danger mt-1 mb-3">
                                    <div className="col-3">
                                        <img src={BubbleTeaGelatin} alt="" type="button"/>
                                        <p>Bubble Tea Gelatin</p>
                                    </div>
                                    <div className="col-3">
                                        <img src={Manggo} alt="" type="button" />
                                        <p>Bubble Tea Gelatin</p>
                                    </div>
                                    <div className="col-3">
                                        <img src={GreenCoconut} alt=""  type="button"/>
                                        <p>Bubble Tea Gelatin</p>
                                    </div>
                                    <div className="col-3">
                                        <img src={BubbleManggo} alt=""  type="button"/>
                                        <p>Bubble Tea Gelatin</p>
                                    </div>
                                </div>
                                <div className="row d-flex text-center fw-bold text-danger my-5">
                                    <div className="col-3">
                                        <img src={BubbleTeaGelatin} alt="" />
                                        <p>Bubble Tea Gelatin</p>
                                    </div>
                                    <div className="col-3">
                                        <img src={Manggo} alt="" />
                                        <p>Bubble Tea Gelatin</p>
                                    </div>
                                    <div className="col-3">
                                        <img src={GreenCoconut} alt="" />
                                        <p>Bubble Tea Gelatin</p>
                                    </div>
                                    <div className="col-3">
                                        <img src={BubbleManggo} alt="" />
                                        <p>Bubble Tea Gelatin</p>
                                    </div>
                                </div>
                                <div className="row m-3 fw-bold text-danger">
                                    <div className="col-6">
                                        <h5>Total</h5>
                                    </div>
                                    <div className="col-6 text-end">
                                        <h5>Rp. 27.000</h5>
                                    </div>
                                </div>
                                <div className="d-grid g-2">
                                <button className="btn btn-danger" type="button">Add Cart</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default DetailProduct;