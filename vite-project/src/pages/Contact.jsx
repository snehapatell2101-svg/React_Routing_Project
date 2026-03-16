import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='contact-wrapper d-flex align-items-center justify-content-center text-white text-center'>
                <div className='overlay'></div>
                <div className='content position-relative'>
                    <h1 className='fw-bold mb-2 '>Contact Us</h1>
                    <div className='bg-white rounded-pill shadow mx-auto d-flex  align-items-center p-2 gap-2 form-box'>
                        <input type="text" className='form-control rounded-pill border-0' placeholder='Enter Your Name....' />
                        <input type="email" className='form-control rounded-pill border-0' placeholder='Enter Your Email Address....' />
                        <button className='btn bg-success text-white rounded-pill px-4'>SUBMIT</button>
                    </div>
                    <div className='container mt-5'>
                        <div className='row g-4 justify-content-center'>
                            <div className='col-md-4  d-flex justify-content-center'>
                                <div className='p-4 text-white rounded-4 bg-success text-start ' style={{ width: "260px" }}>
                                    <h5 className='fw-bold mb-3'>CALL US📞</h5>
                                    <p className='mb-1 '>12345 67891</p>
                                    <p>98765 12345 </p>
                                </div>
                            </div>
                            <div className='col-md-4  d-flex justify-content-center'>
                                <div className='p-4 text-white rounded-4 bg-success text-start ' style={{ width: "260px" }}>
                                    <h5 className='fw-bold mb-3'>📍LOCATION </h5>
                                    <p className='mb-1 '>paliyad road,bhagvati park flet-303</p>
                                    <p>Botad,364710 </p>
                                </div>
                            </div>
                            <div className='col-md-4  d-flex justify-content-center'>
                                <div className='p-4 text-white rounded-4 bg-success text-start ' style={{ width: "260px" }}>
                                    <h5 className='fw-bold mb-3'>⏱️ HOURS</h5>
                                    <p className='mb-1 '>MON-FRI:11am-8Pm</p>
                                    <p>SAT-SUN:6AM-8-PM </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
