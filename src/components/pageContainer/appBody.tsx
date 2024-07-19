

const frontPage = () => {
    
    
    return <>
      <div className="hero_area">
        <header className="header_section">
      
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <span>
                    Peak Nutrition Health & Wellness
                  </span>
                </a>
    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="service.html">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html"> About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact Us</a>
                    </li>
                    <li className="nav-item">
                  <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Login</a>
                    </li>
                    <form className="form-inline">
                      <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <section className="slider_section ">
          <div className="slider_bg_box">
            <img src="images/file.png" alt=""/>
          </div>
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 ">
                      <div className="detail-box">
                        <h1>
                          Premium Quality <br/>
                          Food Supplements
                        </h1>
                        <p>
                          Serving North Africa with a Range of Multivitamins and Essential Vitamins
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            DISCOVER
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 ">
                      <div className="detail-box">
                        <h1>
                           Unbeatable Prices <br/>
                          
                        </h1>
                        <p>
                          At our company, we believe that everyone deserves access to high-quality nutritional supplements without the high cost.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            DISCOVER
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 ">
                      <div className="detail-box">
                        <h1>
                          Available in <br/>
                          Pharmacies
                        </h1>
                        <p>
                          Our products are conveniently available in pharmacies across the region.
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn1">
                            DISCOVER
                          </a>
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
    
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s44.svg" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h5>
                      High-Quality Product Range
                    </h5>
                    <p>
                      Multivitamins: Comprehensive multivitamin formulas for overall health.
                      Specific Vitamins: Targeted vitamins such as Vitamin C, Vitamin D, and Vitamin B complexes.
                      Mineral Supplements: Essential minerals like calcium, magnesium, and zinc.
    
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s22.svg" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h5>
                      Quality Assurance
                    </h5>
                    <p>
                      Third-Party Testing: Ensuring all products meet high-quality standards through rigorous testing.
                      GMP Certification: Adherence to Good Manufacturing Practices for safety and efficacy.
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s33.svg" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h5>
                      Convenient Distribution
                    </h5>
                    <p>
                      Pharmacy Partnerships: Wide availability of products in pharmacies across Morocco.
                      Online Sales: E-commerce platform for easy purchasing and home delivery
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s11.svg" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h5>
                      Research and Development
                    </h5>
                    <p>
                      Innovative Product Development: Ongoing research to create new and improved supplement formulations.
                      Clinical Trials: Participation in or sponsorship of clinical studies to validate product efficacy.
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="about_section layout_padding-bottom">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About <span>Us</span>
                  </h2>
                </div>
                <p>
                  Welcome to Peak Nutrition Health & Wellness, Morocco’s premier provider of high-quality food supplements. We are dedicated to enhancing the health and well-being of 
                  our community by offering a wide range of affordable and effective nutritional products.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="images/about-img.jpg" alt=""/>
              </div>
            </div>
    
          </div>
        </div>
      </section>
  
    
      <section className="track_section layout_padding">
        <div className="track_bg_box">
          <img src="images/file1.png" alt=""/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="heading_container">
                <h2>
                  Our Commitment
                </h2>
              </div>
              <p>
                At Peak Nutrition Health & Wellness, our goal is to make superior nutrition accessible to everyone. We are committed to providing you with the best products at unbeatable prices, backed by exceptional customer service. Whether you're looking to boost your immunity, enhance your athletic performance, or support your overall well-being, we are here to help you every step of the way.
    
                Thank you for choosing Peak Nutrition as your trusted partner in health. Together, we can achieve a healthier, happier future.
              </p>
              <form action="">
                <input type="text" placeholder="Subscribe to our Newsletter" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    
      <section className="contact_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="heading_container">
                <h2>
                  Contact Us
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-5 offset-md-1">
              <div className="form_container contact-form">
                <form action="">
                  <div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Message" />
                  </div>
                  <div className="btn_box">
                    <button>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 px-0">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>
                  Address
                </h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Location
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Call +01 1234567890
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                      service@peaknutritions.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>
                  Info
                </h4>
                <p>
                  At Peak nutrition, your health is our priority, and we are dedicated to supporting your wellness journey with our exceptional supplements.            </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>
                  Links
                </h4>
                <div className="info_links">
                  <a className="active" href="index.html">
                    <img src="images/nav-bullet.png" alt=""/>
                    Home
                  </a>
                  <a className="" href="about.html">
                    <img src="images/nav-bullet.png" alt=""/>
                    About
                  </a>
                  <a className="" href="service.html">
                    <img src="images/nav-bullet.png" alt=""/>
                    Services
                  </a>
                  <a className="" href="contact.html">
                    <img src="images/nav-bullet.png" alt=""/>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
   
      <section className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Peak Nutritions Health & Wellness 2024</a>
          </p>
        </div>
      </section>
</>

    

    
  }

  export default frontPage;