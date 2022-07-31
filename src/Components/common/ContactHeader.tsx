import React from "react";

export default function ContactHeader() {
  return (
    <div className="top_bar ttm-bgcolor-white clearfix">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-xl-12 d-flex flex-row align-items-center">
            <div>Welcome Prints &nbsp;</div>
            <div className="ml-auto p-0">
              <div className="top_bar_contact_item">
                <div className="top_bar_icon">
                  <i className="fa fa-phone" />
                </div>
                <a href="tel:+91 9327029516">+91 9327029516</a>
              </div>
              <div className="top_bar_contact_item">
                <div className="top_bar_icon">
                  <i className="ti ti-email" />
                </div>
                <a href="mailto:rakeshdhanawala@gmail.com">
                  rakeshdhanawala@gmail.com
                </a>
              </div>
              <div className="top_bar_contact_item">
                <div className="top_bar_icon">
                  <i className="ti ti-location-pin" />
                </div>
                169, NEW CLOTH MARKET, SARANGPUR, AHMEDABAD 380002
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
