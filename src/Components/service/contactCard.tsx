import React from 'react'

export default function contactCard() {
  return (
    <aside className="widget contact-widget with-title">
    <h3 className="widget-title">Get in touch</h3>
    <ul className="contact-widget-wrapper">
      <li><i className="ttm-textcolor-skincolor ti ti-location-pin" />69, NEW CLOTH MARKET, SARANGPUR, AHMEDABAD 380002 GUJARAT</li>
      <li><i className="ttm-textcolor-skincolor ti ti-email" /><a href="mailto:info@example.com" target="_blank">rakeshdhanawala@gmail.com</a></li>
      <li><i className="ttm-textcolor-skincolor ti ti-mobile" />+91 9327029516</li>
      <li><i className="ttm-textcolor-skincolor ti ti-alarm-clock" />Mon to Sat - 9:00am to 6:00pm <br /> (Sunday Closed)</li>
    </ul>
  </aside>
  )
}
