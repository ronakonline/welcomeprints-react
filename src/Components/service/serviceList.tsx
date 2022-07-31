import React from "react";
import Services from "../../services.json"

export default function ServiceList() {
    return(
        <aside className="widget widget-nav-menu">
                    <ul>
                      {
                        Services.map((service,index)=>(
                      
                      <li ><a href="fabric-printing.html">{service.title} </a></li>
                      ))}
                    </ul>
                  </aside>
    )
}