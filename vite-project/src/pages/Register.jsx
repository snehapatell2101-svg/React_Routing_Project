import React from 'react'

const Register = () => {
    return (
        <div>
            <div className='container py-5'>
                <div className='row g-5 align-items-center-start mb-5'>
                    <div className='col-lg-7'>
                        <h1>Manage Projects With Ease-{" "}<span className='text-success'>ProManage</span></h1>
                        <p className='text-muted fs-6 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vero porro consequuntur voluptates sapiente totam culpa mollitia dolor, dignissimos facilis.</p>
                        <p className='text-muted fs-6 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vero porro consequuntur voluptates sapiente totam culpa mollitia dolor, dignissimos facilis.</p>
                        <p className='text-muted fs-6 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vero porro consequuntur voluptates sapiente totam culpa mollitia dolor, dignissimos facilis.</p>
                        <p className='text-muted fs-6 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vero porro consequuntur voluptates sapiente totam culpa mollitia dolor, dignissimos facilis.</p>
                        <div className='d-flex gap-3 mt-5'>
                            <button className='btn btn-outline-success px-4 py-2'>Learn More</button>
                            <button className='btn btn-outline-success px-4 py-2'>Start Now</button>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <div className='p-4 border rounded shadow shadow-sm bg-white'>
                            <h4 className='text-center fw-bold mb-4'>Register Now</h4>
                            <form action="">
                                <div className='mb-4'>
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <input type="text" className='form-control form-control=lg' />
                                </div>
                                <div className='mb-4'>
                                    <label className="form-label fw-semibold">Email</label>
                                    <input type="email" className='form-control form-control=lg' />
                                </div>
                                <div className='mb-4'>
                                    <label className="form-label fw-semibold">Phone</label>
                                    <input type="number" className='form-control form-control=lg' />
                                </div>
                                <div className='mb-4'>
                                    <label className="form-label fw-semibold">Select plan</label>
                                    <select type="" id='' className='form-select form-select-lg' >
                                        <option >free plan</option>
                                        <option >pro plan</option>
                                        <option >extra plan</option>
                                    </select>
                                </div>
                                <button className='btn btn-success w-100 py-2 fs-5'>Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='text-center mb-4'>
                    <h3 className='fw-bold mb-3'>Unlock Your Project Power</h3>
                    <p className='text-muted fs-6 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </div>
                <div className='row g-4'>
                    <div className='col-md-3'>
                        <div className='card h-100 shadow-sm p-2'>
                            <img src="https://plus.unsplash.com/premium_photo-1661367947678-e61a5a019eed?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='card-img-top' />
                            <div className='card-body'>
                                <h6 className='fw-bold mb-1'>  Smart Planning</h6>
                                <p className='text-muted small mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis?</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card h-100 shadow-sm p-2'>
                            <img src="https://images.unsplash.com/photo-1760553120312-2821bf54e767?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="" className='card-img-top' />
                            <div className='card-body'>
                                <h6 className='fw-bold mb-1'>collaboration </h6>
                                <p className='text-muted small mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis?</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card h-100 shadow-sm p-2'>
                            <img src="https://plus.unsplash.com/premium_photo-1755873911560-4e007f722c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNtYXJ0JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="" className='card-img-top' />
                            <div className='card-body'>
                                <h6 className='fw-bold mb-1'>  Creative Boreads</h6>
                                <p className='text-muted small mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis?</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card h-100 shadow-sm p-2'>
                            <img src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D" alt="" className='card-img-top' />
                            <div className='card-body'>
                                <h6 className='fw-bold mb-1'> Ai support</h6>
                                <p className='text-muted small mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
