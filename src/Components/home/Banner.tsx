import React from 'react'

export default function Banner() {
  return (
    <div className="banner_slider_wrapper">
    <div className="banner_slider banner_slider_1">
      <div className="slide">
        <div
          className="slide_img"
          style={{ backgroundImage: "url(images/slides/slider-01.png)" }}
        />
        <div className="slide__content">
          <div className="slide_social_icons">
            <span className="social-title">Follow Us</span>
            <ul className="social-icons list-inline">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slide__content--headings">
                  <h3 data-animation="fadeInUp" data-delay="0.2s">
                    Welcome Prints
                  </h3>
                  <h2 data-animation="fadeInUp" data-delay="0.5s">
                    We Produce <br /> Luxury and Comfort
                  </h2>
                  <div
                    data-animation="fadeInUp"
                    data-delay="0.7s"
                    className="slide_category"
                  >
                    <ul className="list-inline d-flex">
                      <li>Domestic</li>
                      <li>International</li>
                    </ul>
                  </div>
                  <div
                    className=" slide-btn1 margin_top30 res-575-margin_top10 "
                    data-animation="fadeInUp"
                    data-delay="0.9s"
                  >
                    <a
                      className="ttm-btn ttm-btn-size-xl ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                      href="#contact"
                    >
                      DISCOVER MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide">
        <div
          className="slide_img"
          style={{ backgroundImage: "url(images/slides/slider-02.png)" }}
        />
        <div className="slide__content">
          <div className="slide_social_icons">
            <span className="social-title">Follow Us</span>
            <ul className="social-icons list-inline">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slide__content--headings">
                  <h3 data-animation="fadeInUp" data-delay="0.2s">
                    The Clothing Brand
                  </h3>
                  <h2 data-animation="fadeInUp" data-delay="0.5s">
                    The Ultimate <br /> style indulgence
                  </h2>
                  <p data-animation="fadeInUp" data-delay="0.7s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, <br />
                    sed do eiusmod tempor incididunt.
                  </p>
                  <div
                    className=" slide-btn2 d-inline-block margin_top25 res-575-margin_top10"
                    data-animation="fadeInUp"
                    data-delay="0.9s"
                  >
                    <a
                      className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                      href="#contact"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
