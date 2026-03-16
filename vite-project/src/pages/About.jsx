import React from 'react'

const About = () => {
    return (
        <div>
            <div className='container my-5'>
                <div className='row align-items-center'>
                    <div className='col-md-6 d-flex justify-content-center mb-4 mb-md-0'>
                        <div className='blob-shape'>
                            <img src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="Team" className='img-fluid' />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <h2>About us</h2>
                        <h5 className='fw-bold'>Who We Are</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque molestias nihil ipsam inventore tempore voluptates.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque molestias nihil ipsam inventore tempore voluptates.</p>
                        <button className='btn btn-outline-success'>Read more &rarr;</button>
                    </div>
                </div>
            </div>
            <section className='py-5'>
                <div className='container'>
                    <h3 className='text-center fw-bold'>Manage Project With<span className='text-success'>ProManage</span></h3>
                    <p className='text-center text-secondary mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem!</p>
                    <div className='row g-4'>
                        <div className='col-md-6'>
                            <div className='p-3 rounded shadow bg-dark text-white h-100'>
                                <div className='d-flex justify-content-between'>
                                    <h4 className='fw-bold'>ProManage Essentials</h4>
                                    <span className='badge bg-success m-5 mt-2'>Weekend</span>
                                </div>
                                <p className='mt-3 mb-1'>10th December,Sunday </p>
                                <p className='mb-1'>10:00 AM to 12:00 PM </p>
                                <p className='mb-4'> Online</p>
                                <button className='btn btn-success rounded-pill'>Enroll Now &rarr;</button>
                            </div>
                        </div>

                         <div className='col-md-6'>
                            <div className='p-3 rounded shadow bg-white  h-100'>
                                <div className='d-flex justify-content-between'>
                                    <h4 className='fw-bold'>Advanced Project Planning</h4>
                                    <span className='badge bg-success m-5 mt-2'>Weekend</span>
                                </div>
                                <p className='mt-3 mb-1'>10th December,Sunday </p>
                                <p className='mb-1'>10:00 AM to 12:00 PM </p>
                                <p className='mb-4'> Online</p>
                                <button className='btn btn-success rounded-pill'>Enroll Now &rarr;</button>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='p-3 rounded shadow bg-white  h-100'>
                                <div className='d-flex justify-content-between'>
                                    <h4 className='fw-bold'>Team collbration master</h4>
                                    <span className='badge bg-success m-5 mt-2'>Weekend</span>
                                </div>
                                <p className='mt-3 mb-1'>10th December,Sunday </p>
                                <p className='mb-1'>10:00 AM to 12:00 PM </p>
                                <p className='mb-4'> Online</p>
                                <button className='btn btn-success rounded-pill'>Enroll Now &rarr;</button>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='p-3 rounded shadow bg-dark text-white h-100'>
                                <div className='d-flex justify-content-between'>
                                    <h4 className='fw-bold'>Risk Managment</h4>
                                    <span className='badge bg-success m-5 mt-2'>Weekend</span>
                                </div>
                                <p className='mt-3 mb-1'>10th December,Sunday </p>
                                <p className='mb-1'>10:00 AM to 12:00 PM </p>
                                <p className='mb-4'> Online</p>
                                <button className='btn btn-success rounded-pill'>Enroll Now &rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
