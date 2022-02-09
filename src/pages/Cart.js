import React from "react";
import "../styles/style.css"

import logo from "../image/Group.png";
import IconProfile from "../image/icon-profile.png";
import CartIcon from "../image/cart.png";
import Coffe from "../image/iceCoffe.png";
import TrashIcon from "../image/TrashIcon.png"
import BtUploadInvoice from "../image/BtUploadInvoice.png"

const Cart = () => {
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
                        <img src={CartIcon} alt="logo"  className="d-inline-block align-text-center ms-4" />
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
                            <div className="row">
                                <div className="col offset-1">
                                    <h4 className="text-danger fw-bold">My Cart</h4>
                                    <h5>Review Your Cart</h5>
                                </div>
                            </div>
                
                            <div className="col-7 offset-1">
                                <hr />
                                <div className="row">
                                    <div className="col d-flex">
                                        <img className="img-fluid" src={Coffe} alt="" />
                                        <div className="ms-2">
                                        <h5>Ice Coffe Palm Sugar</h5>
                                        <p><span>Topping :</span> Bill Berry Boba, Bubble Tea Gelatin</p>
                                        </div>
                                    </div>
                                    <div className="col-3 text-end">
                                        <h5>Rp. 33.000</h5>
                                        <img src={TrashIcon} alt="" />
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-7">
                                        <hr />
                                        <div className="row d-flex">
                                            <div className="col-9">
                                                <p>Subtotal</p>
                                                <p>Qty</p>
                                            </div>
                                            <div className="col text-end">
                                                <p>Rp. 69.000</p>
                                                <p>2</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-9">
                                                <p>Total</p>
                                            </div>
                                            <div className="col text-end">
                                                <p>Rp. 69.000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col p-3 text-center">
                                        <img src={BtUploadInvoice} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-3 ms-2 mt-3 of">
                                <form>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <input type="email" class="form-control my-4" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <input type="email" class="form-control my-4" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <input type="email" class="form-control my-4" id="exampleInputEmail1" aria-describedby="emailHelp" style={{height: 100}} />
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" class="btn btn-danger">Pay</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Cart;