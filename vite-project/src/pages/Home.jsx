import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='container-fluid mt-4'>
        <header className='text-center d-flex align-items-center justify-content-center'
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1612550761236-e813928f7271?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzc2luZXNzfGVufDB8fDB8fHww')"
            , height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            color: "white"
          }}>
          <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: 'rgba(0,0,0,0.7)' }}></div>
          <div className='container position-relative' style={{ zIndex: 2, color: 'white', }}>
            <div className='row py-lg-5'>
              <div className='col-lg-8 col-md-10 mx-auto'>
                <h1>Manage Project With easy proManger</h1>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro enim consequuntur delectus! Ullam non, maxime soluta quibusdam quis quas?</p>
                <a href="" className='btn btn-success me-2'>Get started</a>
                <a href="" className='btn btn-outline-light'>Learn more</a>
              </div>
            </div>
          </div>
        </header>
        {/*section 2 */}
        <section className='py-5'>
          <h2 className='mb-4 text-center'>Why Choose Us? </h2>
          <div className='row'>
            <div className='col-md-4 mb-3'>
              <div className='card h-100'>
                <div className='card-body text-center'>
                  <h5 className='card-title'>Quality</h5>
                  <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, minus.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 mb-3'>
              <div className='card h-100'>
                <div className='card-body text-center'>
                  <h5 className='card-title'>realibility</h5>
                  <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, minus.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 mb-3'>
              <div className='card h-100'>
                <div className='card-body text-center'>
                  <h5 className='card-title'>support</h5>
                  <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, minus.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 3*/}
        <section className='text-center py-5 bg-success text-white rounded'>
          <h2>Get Started Today!</h2>
          <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, eos.</p>
          <a href="/register" className='btn btn-light btn-lg'>Register Now</a>
        </section>

      </div>
    </div>
  )
}

export default Home
