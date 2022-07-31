import React from "react";
import { useLocation,useParams } from "react-router-dom";
import Header from ".././Components/common/Header";
import Preloader from ".././Components/common/Preloader";
import Footer from ".././Components/common/Footer";
import Services from "../services.json";
import ServiceList from ".././Components/service/serviceList";
import {Link} from 'react-router-dom';
import ContactCard from '../Components/service/contactCard';

export default function Service() {
  let params = useParams();

  const [currentService,setCurrentService] = React.useState<any>(null);

  React.useEffect(()=>{
    if(params.id != undefined){
     var id = parseInt(params.id);
    
    var foundService = Services.find(el => el.id == id);
     if(foundService){
      setCurrentService(foundService);
     }
    }
  },[params]);

  //console.log();
  
  if(!currentService){
    return <p>Loading...</p>
  }

  return (
    <div>
       {/* <Preloader /> */}
        <Header />
        {/* page-title */}
        <div className="ttm-page-title-row ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="ttm-page-title-row-inner">
                  <div className="page-title-heading">
                    <h2 className="title">{currentService.title}</h2>
                  </div>
                  <div className="breadcrumb-wrapper">
                    <span>
                      {/* <Link to="/">Home</Link> */}
                      <a title="Homepage" href="/">Home</a>
                    </span>
                    <span>{currentService.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* page-title end */}
        {/*site-main start*/}
        <div className="site-main">
          <div className="ttm-row sidebar ttm-sidebar-left clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-4 widget-area sidebar-left">
                  <ServiceList />
                  <ContactCard />
                </div>
                <div className="col-lg-8 content-area">
                  <div className="ttm-service-single-content-area">
                    <div className="ttm-service-description">
                      <h3>Manufacturer of {currentService.title.toLowerCase()} services</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
                      <div className="padding_top20 padding_bottom20">
                        <div className="ttm_fatured_image-wrapper">
                          <img className="img-fluid" src={"/images/services/"+currentService.bannerImg} alt="services-1" />
                        </div>
                      </div>
                      <div className="padding_top15 padding_bottom5">
                        <h3>The rayon fabrics wholesaler</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor margin_top15">
                              <li><i className="ti ti-check" />
                                <div className="ttm-list-li-content">Lorem ipsum dolor sit amet</div>
                              </li>
                              <li><i className="ti ti-check" />
                                <div className="ttm-list-li-content">Lorem ipsum dolor sit amet, consectetur</div>
                              </li>
                              <li><i className="ti ti-check" />
                                <div className="ttm-list-li-content">Cursus metus aliquam eleifend mi in.</div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor margin_top15">
                              <li><i className="ti ti-check" />
                                <div className="ttm-list-li-content">Maecenas volutpat blandit aliquam etiam erat</div>
                              </li>
                              <li><i className="ti ti-check" />
                                <div className="ttm-list-li-content">Lorem ipsum dolor sit amet, consectetur</div>
                              </li>
                              <li><i className="ti ti-check" />
                                <div className="ttm-list-li-content">Donec et odio pellentesque diam volutpat</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {currentService.subCategories.length > 0 &&
                        currentService.subCategories.map((item: any,index: number)=>
                      (
                      <div className="padding_top30 padding_bottom15" key={index}>
                        <h3>{item.title}</h3>
                        <div className="row">
                          {item.images.length > 0 && 
                            item.images.map((item1 : string ,index1 : number)=>
                          (
                          <div className="col-md-6 col-sm-6" key={index1}>
                            <div className="ttm_single_image-wrapper text-left padding_top15">
                              <img className="img-fluid" src={item1} key={index1} alt="single-img-10" style={{height: '300px', width: '442px'}} />
                            </div>
                          </div>
                          ))}
                        </div>
                      </div>
                      ))}
                      <div className="padding_top30 mb_15">
                        <h3>Understand your business</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,&nbsp;<u>when an unknown printer took a galley</u>&nbsp;of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* row end */}
            </div>
          </div>
        </div>
        <Footer />
        {/*site-main end*/}
      </div>
  );
}
