import React from 'react'

export const Signup = () => {
  return (
    <>
         <button type="button" className="btn btn-outline-secondary ms-2" data-toggle="modal" data-target="#signupModal">
        <span className='fa fa-user-plus me-1'></span>Register
      </button>

      <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title w-100" id="signupModalLabel">Register</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <button className="btn btn-secondary w-100 mb-4">
                  <span className='fa fa-google me-2'></span>
                  Sign Up With Google
                </button>
                <button className="btn btn-secondary w-100 mb-4">
                  <span className='fa fa-facebook me-2'></span>
                  Sign Up With Facebook
                </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">Username</label>
                  <input type="text" className="form-control" id="exampleInput" placeholder='Enter Your Username'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email Address'/>
                    <div id="emailHelp" className="text-primary">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password'/>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                <button type="submit" className="btn btn-outline-secondary w-100 mt-5">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;