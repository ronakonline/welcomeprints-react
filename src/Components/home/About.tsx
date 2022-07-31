import React from "react";

export default function About() {
  return (
    <section id="about" className="ttm-row about-section clearfix z-index-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-8">
            <div className="ttm_single_image-wrapper imagestyle">
              <img
                className="img-fluid auto_size"
                src="images/welcome-img.png"
                alt="single-01"
                width={539}
                height={672}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="margin_top30">
              {/* section title */}
              <div className="section-title">
                <div className="title-header">
                  <h5>ABOUT WELCOME PRINTS</h5>
                  <h2 className="title">
                    The best solution for all garment manufacturers and textile
                    traders.
                  </h2>
                </div>
                <div className="title-desc">
                  <p>
                    We are producers and suppliers of shirting and suiting
                    fabrics. We also cater to the demand of our customer based
                    on their requirements.
                  </p>
                </div>
              </div>
              {/* section title end */}
              <div className="row no-gutters margin_top40">
                <div className="col-sm-7">
                  <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                    <li>
                      <i className="ti ti-check" />
                      <span className="ttm-list-li-content">
                        Quality assured fabrics
                      </span>
                    </li>
                    <li>
                      <i className="ti ti-check" />
                      <span className="ttm-list-li-content">
                        Committed to our customers
                      </span>
                    </li>
                  </ul>
                  <a
                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark  margin_top45"
                    href="#contact"
                  >
                    View More!
                  </a>
                </div>
                <div className="col-sm-5">
                  {/* ttm-fid */}
                  <div className="ttm-fid ttm-fid-with-icon ttm-bgcolor-grey style1 res-575-margin_top30">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="flaticon flaticon-warehouse" />
                    </div>
                    <div className="ttm-fid-contents">
                      <h4 className="ttm-fid-inner">
                        <span
                          data-appear-animation="animateDigits"
                          data-from={0}
                          data-to={4567}
                          data-interval={15}
                          data-before
                          data-before-style="sup"
                          data-after
                          data-after-style="sub"
                          className="numinate"
                        >
                          4567
                        </span>
                      </h4>
                      <span className="ttm-fid-title">Happy Clients.</span>
                    </div>
                  </div>
                  {/* ttm-fid end */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    </section>
  );
}
