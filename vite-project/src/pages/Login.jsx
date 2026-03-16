import React from 'react'

const Login = () => {
    return (
        <div>
            <div className='container vh-100 d-flex align-items-center  justify-content-center'>
                <div className='row w-100 shadow rounded overflow-hidden' style={{ maxWidth: "900px" }}>
                    <div className='col-md-4 bg-light d-flex flex-column  justify-content-center  align-items-center p-4'>
                        <img src="https://plus.unsplash.com/premium_photo-1720192861639-1524439fc166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8fDA%3D" alt="" className='img-fluid mb-3' style={{ maxWidth: "200px" }} />
                        <h5 className='fw-bold text-center'>Secure Login</h5>
                        <p className='text-muted text-center small '>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className='col-md-4 bg-white p-4'>
                        <h4 className='fw-bold mb-3 text-center text-success'>Login</h4>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label fw-bold'>Username</label>
                            <input type="text" className='form-control' placeholder='Enter Your Username' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='form-label fw-bold'>Password</label>
                            <input type="text" className='form-control' placeholder='Enter Your Password' />
                        </div>
                        <div className='mb-3 form-check'>
                            <input type="checkbox" className='form-check-input' id='remember' />
                            <label htmlFor="remember" className='form-check-label'>Remember me </label>
                        </div>
                        <button className='btn text-white w-100 bg-success'>Login</button>
                    </div>
                    <div className='col-md-4 bg-light p-4 d-flex flex-column justify-content-center'>
                        <div className='text-center mb-3 '>
                            <a href="#" className='text-success text-decoration-none fw-bold'>
                                Forgot Password?
                            </a>
                        </div>
                        <div className='text-center mb-3 '>
                            <a href="#" className='text-success text-decoration-none fw-bold'>
                                 Create New Account
                            </a>
                        </div>
                        <div className='text-center mb-3 '>
                            <p>&copy;2025 ProManage</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Login
