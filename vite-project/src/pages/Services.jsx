import React from 'react'

const Services = () => {
    return (
        <div>
            <section className='py-5 text-center text-white position-relative' style={{
                backgroundImage: " url('https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2tncm91bmQlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D')"
                , backgroundSize: "cover",
                backgroundPosition: "center",
                height: "350px",
                filter: "brightness(60%)",
            }}>
                <h1 className='fw-bold display-6 mt-5'>OUR SERVICES</h1>
            </section>
            <div className='container position-relative' style={{ marginTop: "-120px" }}>
                <div className='row justify-content-center'>
                    <div className='col-md-3 col-sm-6 mb-4'>
                        <div className='card border-0 shadow-lg p-3 text-center rounded-4'>
                            <i class="bi bi-bicycle fs-1 text-success"></i>
                            <h5 className='fw-bold mt-3'>WorkOuts</h5>
                            <p className='text-muted' style={{ fontSize: "14px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, adipisci?</p>
                            <a href="" className='fw-bold text-success'>MORE &rarr;</a>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-6 mb-4'>
                        <div className='card border-0 shadow-lg p-3 text-center rounded-4'>
                            <i class="bi bi-people-fill fs-1 text-success"></i>
                            <h5 className='fw-bold mt-3'>Comminity</h5>
                            <p className='text-muted' style={{ fontSize: "14px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, adipisci?</p>
                            <a href="" className='fw-bold text-success'>MORE &rarr;</a>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-6 mb-4'>
                        <div className='card border-0 shadow-lg p-3 text-center rounded-4'>
                            <i class="bi bi-award fs-1 text-success"></i>
                            <h5 className='fw-bold mt-3'>Membership</h5>
                            <p className='text-muted' style={{ fontSize: "14px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, adipisci?</p>
                            <a href="" className='fw-bold text-success'>MORE &rarr;</a>
                        </div>
                    </div>

                    <div className='col-md-3 col-sm-6 mb-4'>
                        <div className='card border-0 shadow-lg p-3 text-center rounded-4'>
                           <i class="bi bi-calendar-day fs-1 text-success"></i>
                            <h5 className='fw-bold mt-3'>Events</h5>
                            <p className='text-muted'style={{fontSize:"14px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, adipisci?</p>
                            <a href="" className='fw-bold text-success'>MORE &rarr;</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Services
