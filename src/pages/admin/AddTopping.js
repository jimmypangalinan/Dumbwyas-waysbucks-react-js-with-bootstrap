import React from "react";

import logo from "../../image/Group.png";
import IconProfile from "../../image/icon-profile.png";
import ToppingDetail from "../../image/ToppingDetail.png";



const AddTopping = () => {
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
                            <a className="navbar-brand" href="#">
                            <img src={IconProfile} alt="logo" height="50px" className="d-inline-block align-text-top ms-4" />
                            </a>
                        </div>
                    </nav>
                </div>

                <div className="conatainer-fluid">
                    <div className="container mt-5 d-flex">
                        <div className="col-6 offset-1">
                            <div className="row text-danger py-3">
                                <h4 className="fw-bold">Topping</h4>
                            </div>
                            <div className="row text-danger mt-4">
                            <form>
                                <div class="mb-5">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name Product" />
                                    <input type="email" class="form-control my-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Price" />
                                    <input class="form-control" type="file" id="formFile" placeholder="Photo Product" />
                                </div>
                                <div className="d-grid mx-5">
                                    <button type="submit" class="btn btn-danger">Add Topping</button>
                                </div>
                            </form>
                            </div>
                        </div>

                        <div className="col ms-5">
                            <img src={ToppingDetail} alt="" />
                        </div>
                    </div>
                </div>

            

                
            </div>
        )
    
}

export default AddTopping;