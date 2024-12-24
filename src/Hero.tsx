import svg from './images/logo.png'

function Hero() {
  return (
    <div>
        <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src={svg} alt="" width="72" height="57" />
    <h1 className="display-5 fw-bold text-body-emphasis">Cyndie's Media</h1>
    <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">
          Experience unparalleled photography and videography services designed to make your events unforgettable.
          At Cyndie Events, we combine creativity, professionalism, and cutting-edge technology to ensure that
          every precious moment is beautifully preserved.
        </p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Book Events Sessions</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Book Media Sessions</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Hero