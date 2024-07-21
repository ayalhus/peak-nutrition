import React from 'react';

const Hero = () => {
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Peak Nutrition Health & Wellness</span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#abouts">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contacts">Contact Us</a>
                  </li>
                  <form className="form-inline">
                    <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="slider_section">
        <div className="slider_bg_box">
          <img src="images/file.png" alt="Slider Background" />
        </div>
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Premium Quality <br />
                        Food Supplements
                      </h1>
                      <p>
                        Serving North Africa with a Range of Multivitamins and Essential Vitamins
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">DISCOVER</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Unbeatable Prices <br />
                      </h1>
                      <p>
                        At our company, we believe that everyone deserves access to high-quality nutritional supplements without the high cost.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">DISCOVER</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Available in <br />
                        Pharmacies
                      </h1>
                      <p>
                        Our products are conveniently available in pharmacies across the region.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">DISCOVER</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Hero;
