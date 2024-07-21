import React from 'react';

const About = () => {
  return (
    <section id="abouts" className="about_section layout_padding-bottom">
      <div className="container">
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
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/about-img.jpg" alt="About Us"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About





