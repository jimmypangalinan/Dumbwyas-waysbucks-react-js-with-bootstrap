import React from "react";

const Register = () => {
        return(
          <div>
              <div class="modal fade " id="Register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="exampleModalLabel">Register</h3>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-4">
                          <input type="text" class="form-control" id="emailLogin" placeholder="Email" />
                        </div>
                        <div class="mb-4">
                          <input type="text" class="form-control" id="passwordLogin" placeholder="Password" />
                        </div>
                        <div class="mb-4">
                          <input type="text" class="form-control" id="name" placeholder="Full Name" />
                        </div>
                      </form>
                    </div>
                    <div class="row">
                      <button type="button" class="btn btn-danger col-10 offset-1" data-bs-dismiss="modal">Register</button>
                    </div>
                    <div className="row text-center pb-5 p-1">
                    <span>Already Have an account ? klik <a href="" className="text-decoration-none fw-bold text-black" data-bs-toggle="modal" data-bs-target="#Login" data-bs-whatever="@mdo">Here</a> </span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )
}

export default Register;