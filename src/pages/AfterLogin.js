import React from "react";

import logo from "../image/Group.png";
import IconProfile from "../image/icon-profile.png";
import Cart from "../image/cart.png";
import Jumbotron from "../image/Jumbotron.png";
import product1 from "../image/product1.png";
import product2 from "../image/product2.png";
import product3 from "../image/product3.png";
import product4 from "../image/product4.png";


const AfterLogin = () => {
        return(
            <div>
                <div className="container">
                <nav className="navbar navbar-light">
                    <div className="col-6">
                        <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" height="50px" className="d-inline-block align-text-top ms-4" />
                        </a>
                    </div>
                    <div className="col-6 text-end">
                        <a className="navbar-brand"  href="#">
                            <img src={Cart} alt="logo" />
                        </a>
                        <a className="navbar-brand" href="#">
                            <img src={IconProfile} alt="logo" height="50px" />
                        </a>
                        
                        
                    </div>
                </nav>
            </div>
                <div className="container py-4">
                    <div className="col-10 offset-1">
                        <img src={Jumbotron} alt="jumbotron" />
                    </div>
                </div>
                <div className="container">
                    <div className="row py-2">
                        <div className="col offset-1">
                            <h1 className="fw-bold text-danger">Let's Order</h1>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-10 offset-1 d-flex justify-content-between">
                            <div className="card" style={{width: 250, backgroundColor: 'pink'}}>
                                <img src={product1} alt="product1" className="img-fluid" />
                                <div className="card-body text-danger">
                                    <h5>Ice Coffe Palm Sugar</h5>
                                    <p>Rp. 27.000</p>
                                </div> 
                            </div>
                            <div className="card mx-3" style={{width: 250, backgroundColor: 'pink'}}>
                                <img src={product2} alt="product1" className="img-fluid" />
                                <div className="card-body text-danger">
                                    <h5>Ice Coffe Palm Sugar</h5>
                                    <p>Rp. 31.000</p>
                                </div> 
                            </div>
                            <div className="card me-3" style={{width: 250, backgroundColor: 'pink'}}>
                                <img src={product3} alt="product1" className="img-fluid" />
                                <div className="card-body text-danger">
                                    <h5>Ice Coffe Palm Sugar</h5>
                                    <p>Rp. 29.500</p>
                                </div> 
                            </div>
                            <div className="card" style={{width: 250, backgroundColor: 'pink'}}>
                                <img src={product4} alt="product1" className="img-fluid" />
                                <div className="card-body text-danger">
                                    <h5>Ice Coffe Palm Sugar</h5>
                                    <p>Rp. 28.000</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        )
}

export default AfterLogin;