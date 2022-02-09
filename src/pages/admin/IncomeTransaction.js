import { Button } from "bootstrap";
import React from "react";

import logo from "../../image/Group.png";
import IconProfile from "../../image/icon-profile.png";
import ApproveIcon from "../../image/ApproveIcon.png";
import CancelIcon from "../../image/CancelIcon.png";


const IncomeTransaction = () => {
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
                    <table class="table table-border border-3">
                        <thead className="table-secondary">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Post Code</th>
                            <th scope="col">Income</th>
                            <th scope="col">Status</th>
                            <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Jimmy Crystal</td>
                                <td>Toraja</td>
                                <td>19942</td>
                                <td>69.000</td>
                                <td>Waiting Approve</td>
                                <td className="d-flex justify-content-center">
                                    <button className="btn btn-danger btn-sm me-1">Cancel</button>
                                    <button className="btn btn-success btn-sm">Approve</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Aninomous</td>
                                <td>Jakarta</td>
                                <td>19972</td>
                                <td>100.000</td>
                                <td>Success</td>
                                <td className="d-flex justify-content-center">
                                    <img src={ApproveIcon} />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Another Buyer</td>
                                <td>Malaysia</td>
                                <td>19972</td>
                                <td>100.000</td>
                                <td>Success</td>
                                <td className="d-flex justify-content-center">
                                    <img src={CancelIcon} />
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>

            

                
            </div>
        )
    
}

export default IncomeTransaction;