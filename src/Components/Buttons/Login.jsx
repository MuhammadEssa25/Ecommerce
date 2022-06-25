import React from 'react'

export const Login = () => {
  return (
    <>
      <button type="button" className="btn btn-outline-secondary ms-auto" data-toggle="modal" data-target="#loginModal">
        <span className='fa fa-sign-in me-1'></span>Login
      </button>

      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title w-100 " id="loginModalLabel">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <button className="btn btn-secondary w-100 mb-4">
                  <span className='fa fa-google me-2'></span>
                  Sign In With Google
                </button>
                <button className="btn btn-secondary w-100 mb-4">
                  <span className='fa fa-facebook me-2'></span>
                  Sign In With Facebook
                </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email'/>
                    <div id="emailHelp" className="text-primary">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"  placeholder='Enter Your Password'/>
                </div>
                <div className="mb-2 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-secondary w-100 mt-5">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;