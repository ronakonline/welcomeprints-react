import React from 'react'

export default function Contact() {
  return (
    <>
     <section
            id="contact"
            className="ttm-row contact-section ttm-bgimage-yes bg-img4 z-index-1 ttm-bg ttm-bgcolor-grey clearfix"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* section-title */}
                  <div className="section-title title-style-center_text">
                    <div className="title-header">
                      <h5>CONTACT US</h5>
                      <h2 className="title">Needs Help?</h2>
                    </div>
                  </div>
                  {/* section-title end */}
                </div>
              </div>
              <div className="row ttm-bgcolor-darkgrey">
                <div className="col-lg-12">
                  <div className="row ttm-vertical_sep">
                    <div className="col-lg-4">
                      <div className="featured-icon-box icon-align-before-content spacing-5">
                        <div className="featured-icon ">
                          <div className="ttm-icon ttm-icon_element-style-square ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                            <i className="flaticon flaticon-email-1" />
                          </div>
                        </div>
                        <div className="featured-content padding_left20">
                          <div className="featured-title">
                            <h3 className="margin_bottom5 fs-24">
                              Email Address
                            </h3>
                          </div>
                          <div className="featured-desc">
                            <p>rakeshdhanawala@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="featured-icon-box icon-align-before-content spacing-5">
                        <div className="featured-icon ">
                          <div className="ttm-icon ttm-icon_element-style-square ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                            <i className="flaticon  flaticon-placeholder" />
                          </div>
                        </div>
                        <div className="featured-content padding_left20">
                          <div className="featured-title">
                            <h3 className="margin_bottom5 fs-24">
                              Our Address
                            </h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              169, NEW CLOTH MARKET, SARANGPUR, AHMEDABAD 380002
                              GUJARAT
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="featured-icon-box icon-align-before-content spacing-5">
                        <div className="featured-icon ">
                          <div className="ttm-icon ttm-icon_element-style-square ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                            <i className="flaticon  flaticon-clock" />
                          </div>
                        </div>
                        <div className="featured-content padding_left20">
                          <div className="featured-title">
                            <h3 className="margin_bottom5 fs-24 ">
                              Open Hours
                            </h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              Mon – Fri: 9am – 7pm <br /> Sat – Sun: closed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="row ttm-bgcolor-white spacing-6 mb_190 ">
                    <div className="col-lg-6 padding_right50">
                      {/* section-title */}
                      <div className="section-title">
                        <div className="title-header">
                          <h2 className="title fs-44 ">
                            For any queries? Feel free to contact us
                          </h2>
                        </div>
                        <div className="title-desc">
                          <p>
                            {" "}
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. has rootse of classical Latin
                            literature r belief, LoremIpsum is not simply random
                            text. in a piece of classical Latin literature r
                            belief, LoremIpsum is not simply random text.
                          </p>
                        </div>
                      </div>
                      {/* section-title end */}
                      <div className="ttm-social-icons margin_top30 res-991-margin_bottom30 ">
                        <div className="social-icons">
                          <ul className="social-icons circle list-inline ttm-textcolor-skincolor">
                            <li>
                              <a
                                className="tooltip-top"
                                href="#"
                                rel="noopener"
                                aria-label="facebook"
                                data-tooltip="Facebook"
                              >
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="tooltip-top"
                                href="#"
                                rel="noopener"
                                aria-label="twitter"
                                data-tooltip="Twitter"
                              >
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="tooltip-top"
                                href="#"
                                rel="noopener"
                                aria-label="flickr"
                                data-tooltip="Flickr"
                              >
                                <i className="fa fa-flickr" />
                              </a>
                            </li>
                            <li>
                              <a
                                className="tooltip-top"
                                href="#"
                                rel="noopener"
                                aria-label="linkedin"
                                data-tooltip="Linkedin"
                              >
                                <i className="fa fa-linkedin" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <form
                        id="request_qoute_form"
                        className="request_qoute_form wrap-form clearfix"
                        method="post"
                        action="#"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <span className="text-input">
                              <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                              />
                            </span>
                          </div>
                          <div className="col-md-6">
                            <span className="text-input">
                              <input
                                name="phone"
                                type="text"
                                placeholder="Your Phone"
                              />
                            </span>
                          </div>
                          <div className="col-md-6">
                            <span className="text-input">
                              <input
                                name="address"
                                type="text"
                                placeholder="Email Address"
                              />
                            </span>
                          </div>
                          <div className="col-md-6">
                            <span className="text-input">
                              <input
                                name="subject"
                                type="text"
                                placeholder="Subject"
                              />
                            </span>
                          </div>
                          <div className="col-lg-12">
                            <span className="text-input">
                              <textarea
                                name="message"
                                rows={3}
                                placeholder="Your Message"
                              />
                            </span>
                          </div>
                          <div className="col-lg-12">
                            <button
                              className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                              type="submit"
                            >
                              Send A Message!
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*contact section End */}
          {/*Map  */}
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7344.286523846478!2d72.59051355390625!3d23.01851150000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ac8a7faf3%3A0x23850359c0a15770!2sNew%20Cloth%20Market!5e0!3m2!1sen!2sin!4v1657349540701!5m2!1sen!2sin"
                width={100}
                height={558}
              />
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.242931146893!2d-0.08187978422864274!3d51.54544427964142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c903640c869%3A0xe9bd89dfec683ad1!2sTottenham%20Rd%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1616562073091!5m2!1sen!2sin" width="100" height="558"></iframe> */}
            </div>
            {/*Map Section  */}
          </div></>
  )
}
