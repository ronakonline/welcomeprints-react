import React from "react";
import { Link } from "react-router-dom";
import Services from "../../services.json";

export default function Service() {
  return (
    <section
      id="services"
      className="ttm-row services-section ttm-bgcolor-grey clearfix"
    >
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <div className="section-title text-center">
              <div className="title-header">
                <h5>TEXTILE SERVICES</h5>
                <h2 className="title">Let's Experience Exclusive Quality</h2>
              </div>
            </div>
            {/* section title end */}
          </div>
        </div>
        {/* row */}
        <div
          className="row slick_slider slick-arrows-style1"
          data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows":true, "autoplay":false, "dots":false, "infinite":true, "responsive":[{"breakpoint":992,"settings":{"slidesToShow": 2}},{"breakpoint":840,"settings":{"slidesToShow": 2}},{"breakpoint":650,"settings":{"slidesToShow": 1}}]}'
        >
          {Services.map((item, index) => (
            <div className="col-md-4 col-sm-6">
              <div className="featured-imagebox featured-imagebox-services style1">
                <div className="featured-content text-center">
                  <div className="featured-title">
                    <h3>
                      <a href="fabric-printing.html">{item.title}</a>
                    </h3>
                  </div>
                  <div className="featured-desc">
                    <p>{item.subtitle}</p>
                    {item.subtitle.length<40 ? <br></br> : ''}
                  </div>
                  <Link
                    to={"/service/"+item.id}
                    className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkcolor"
                  >
                    Read More!
                  </Link>
                </div>
                <div className="featured-thumbnail">
                  <img
                    className="img-fluid"
                    src={"images/services/"+item.mainImg}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center padding_top10">
              Don’t hesitate, contact us for better help and services.&nbsp;
              <a
                className="ttm-textcolor-skincolor font-weight-500"
                href="#contact"
              >
                <u>More Services</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
