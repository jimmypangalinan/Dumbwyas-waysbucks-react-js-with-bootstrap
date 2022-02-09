import React from "react";
import "../styles/style.css"

import logo from "../image/Group.png";
import IconProfile from "../image/icon-profile.png";
import Cart from "../image/cart.png";
import Foto from "../image/foto.png";
import OnMyWay from "../image/onMyWay.png";
import Barcode from "../image/barcode.png";

import Coffe from "../image/iceCoffe.png";

const Profile = () => {
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
                            <img src={Cart} alt="logo" />
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src={IconProfile} alt="logo" height="50px"/>
                        </a>
                    </div>
                </nav>
                </div>

                <div className="conatainer-fluid pt-4">
                    <div className="container ">
                        <div className="row d-flex">
                            <div className="col-5 offset-1">
                            <div className="row">
                                    <h4 className="text-danger fw-bold py-3">My Profile</h4>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-end">
                                        <img src={Foto} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <h5>Full Name</h5>
                                        <p>Jimmy Pang</p>
                                        <h5>Email</h5>
                                        <p>jimmy@mail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <h4 className="text-danger fw-bold py-3">My Transaction</h4>
                                </div>
                                <div className="row d-flex p-2" id="ProfileTransaction">
                                    <div className="col-9 p-2 d-flex">
                                            <div className="col-3">
                                                <img src={Coffe} alt="" className="img-fluid" />
                                            </div>
                                            <div className="col">
                                                <h5 className="fw-bold text-danger">Ice Coffe Palm Sugar</h5>
                                                <p><span className="fw-bold">Saturday</span> 5 March 2020</p>
                                                <p><span className="fw-bold">Topping :</span> 5 March 2020</p>
                                                <p>Price : 28.000</p>
                                            </div>
                                    </div>
                                    <div className="col-3 p-2 justify-content-center bg-white" id="MyTransaction">
                                        <div className="text-center">
                                            <img src={logo} alt="" />
                                            <img src={Barcode} alt="" className="my-3" />
                                            <img src={OnMyWay} alt="" />
                                        </div>
                                        <div className="text-center mt-3">
                                            <p><span className="fw-bold">Total Price :</span> 28.000</p> 
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                
            </div>
        )
}

export default Profile;