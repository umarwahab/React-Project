import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
               <div className="spinner-wrapper">
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
               
  {/* Header */}
  <header id="header" className="header">
    <div className="header-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h1>MOBILE APP <br />FOR <span id="js-rotating">DESIGNERS, MARKETERS, DEVELOPERS</span></h1>
              <p className="p-large">Leno is one of the easiest and feature packed marketing automation apps in the market. Download it today!</p>
              <a className="btn-solid-lg page-scroll" href="#your-link"><i className="fab fa-apple" />APP STORE</a>
              <a className="btn-solid-lg page-scroll" href="#your-link"><i className="fab fa-google-play" />PLAY STORE</a>
            </div>
          </div> {/* end of col */}
          <div className="col-lg-6">
            <div className="image-container">
              <img className="img-fluid" src="images/header-iphone.png" alt="alternative" />
            </div> {/* end of image-container */}
          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div> {/* end of header-content */}
  </header> {/* end of header */}
  {/* end of header */}
  {/* Testimonials */}
  <div className="slider-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Card Slider */}
          <div className="slider-container">
            <div className="swiper-container card-slider">
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/testimonial-1.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">I just finished my trial period and was so amazed with the support and results that I purchased Leno.</p>
                      <p className="testimonial-author">Jude Thorn - Designer</p>
                    </div>
                  </div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/testimonial-2.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">I don't know how I managed to get work done without Leno. The speed of this application is amazing!</p>
                      <p className="testimonial-author">Roy Smith - Developer</p>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/testimonial-3.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">This app has the potential of becoming a mandatory tool in every marketer's day to day operations.</p>
                      <p className="testimonial-author">Marsha Singer - Marketer</p>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/testimonial-4.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">Searching for a great marketing automation app was difficult but thankfully I found Leno.</p>
                      <p className="testimonial-author">Tim Shaw - Designer</p>
                    </div>
                  </div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/testimonial-5.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">Leno's support team is amazing. They've helped me with some issues and I am so grateful to them.</p>
                      <p className="testimonial-author">Lindsay Spice - Marketer</p>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/testimonial-6.jpg" alt="alternative" />
                    <div className="card-body">
                      <p className="testimonial-text">Who would have thought that Leno can provide such amazing results in just a few weeks of use</p>
                      <p className="testimonial-author">Ann Black - Developer</p>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
              </div> {/* end of swiper-wrapper */}
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              {/* end of add arrows */}
            </div> {/* end of swiper-container */}
          </div> {/* end of slider-container */}
          {/* end of card slider */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of slider-1 */}
  {/* end of testimonials */}
  {/* Features */}
  <div id="features" className="tabs">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>FEATURES</h2>
          <div className="p-heading p-large">Leno was designed based on input from personal development coaches and popular trainers so it offers all</div>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        {/* Tabs Links */}
        <ul className="nav nav-tabs" id="lenoTabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i className="fas fa-cog" />CONFIGURING</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-binoculars" />TRACKING</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="fas fa-search" />MONITORING</a>
          </li>
        </ul>
        {/* end of tabs links */}
        {/* Tabs Content*/}
        <div className="tab-content" id="lenoTabsContent">
          {/* Tab */}
          <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
            <div className="container">
              <div className="row">
                {/* Icon Cards Pane */}
                <div className="col-lg-4">
                  <div className="card left-pane first">
                    <div className="card-body">
                      <div className="text-wrapper">
                        <h4 className="card-title">Goal Setting</h4>
                        <p>Like any self improving process, everything starts with setting your goals and committing to them</p>
                      </div>
                      <div className="card-icon">
                        <i className="far fa-compass" />
                      </div>
                    </div>
                  </div>
                  <div className="card left-pane">
                    <div className="card-body">
                      <div className="text-wrapper">
                        <h4 className="card-title">Visual Editor</h4>
                        <p>Leno provides a well designed and ergonomic visual editor for you to edit your notes and input data</p>
                      </div>
                      <div className="card-icon">
                        <i className="far fa-file-code" />
                      </div>
                    </div>
                  </div>
                  <div className="card left-pane">
                    <div className="card-body">
                      <div className="text-wrapper">
                        <h4 className="card-title">Refined Options</h4>
                        <p>Each option packaged in the app's menus is provided in order to improve your personal development status</p>
                      </div>
                      <div className="card-icon">
                        <i className="far fa-gem" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of icon cards pane */}
                {/* Image Pane */}
                <div className="col-lg-4">
                  <img className="img-fluid" src="images/features-iphone-1.png" alt="alternative" />
                </div>
                {/* end of image pane */}
                {/* Icon Cards Pane */}
                <div className="col-lg-4">
                  <div className="card right-pane first">
                    <div className="card-body">
                      <div className="card-icon">
                        <i className="far fa-calendar-check" />
                      </div>
                      <div className="text-wrapper">
                        <h4 className="card-title">Calendar Input</h4>
                        <p>Schedule your appointments, meetings and periodical evaluations using the provided in-app calendar option</p>
                      </div>
                    </div>
                  </div>
                  <div className="card right-pane">
                    <div className="card-body">
                      <div className="card-icon">
                        <i className="far fa-bookmark" />
                      </div>
                      <div className="text-wrapper">
                        <h4 className="card-title">Easy Reading</h4>
                        <p>Reading focus mode for long form articles, ebooks and other materials which involve large text areas</p>
                      </div>
                    </div>
                  </div>
                  <div className="card right-pane">
                    <div className="card-body">
                      <div className="card-icon">
                        <i className="fas fa-cube" />
                      </div>
                      <div className="text-wrapper">
                        <h4 className="card-title">Good Foundation</h4>
                        <p>Get a solid foundation for your self development efforts. Try Leno mobile app for any mobile platform</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of icon cards pane */}
              </div> {/* end of row */}
            </div> {/* end of container */}
          </div> {/* end of tab-pane */}
          {/* end of tab */}
          {/* Tab */}
          <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
            <div className="container">
              <div className="row">
                {/* Image Pane */}
                <div className="col-md-4">
                  <img className="img-fluid" src="images/features-iphone-2.png" alt="alternative" />
                </div>
                {/* end of image pane */}
                {/* Text And Icon Cards Area */}
                <div className="col-md-8">
                  <div className="text-area">
                    <h3>Track Result Based On Your</h3>
                    <p>After you've configured the app and settled on the data gathering techniques you can not start the information trackers and start collecting those <a className="turquoise" href="#your-link">interesting details</a>. You can always change them.</p>
                  </div> {/* end of text-area */}
                  <div className="icon-cards-area">
                    <div className="card">
                      <div className="card-icon">
                        <i className="fas fa-cube" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Good Foundation</h4>
                        <p>Get a solid foundation for your self development efforts. Try Leno mobile app for any mobile platform</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-icon">
                        <i className="far fa-bookmark" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Easy Reading</h4>
                        <p>Reading focus mode for long form articles, ebooks and other materials which involve large text areas</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-icon">
                        <i className="far fa-calendar-check" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Calendar Input</h4>
                        <p>Schedule your appointments, meetings and periodical evaluations using the provided in-app calendar option</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-icon">
                        <i className="far fa-file-code" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Visual Editor</h4>
                        <p>Leno provides a well designed and ergonomic visual editor for you to edit your notes and input data</p>
                      </div>
                    </div>
                  </div> {/* end of icon cards area */}
                </div> {/* end of col-md-8 */}
                {/* end of text and icon cards area */}
              </div> {/* end of row */}
            </div> {/* end of container */}
          </div> {/* end of tab-pane */}
          {/* end of tab */}
          {/* Tab */}
          <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
            <div className="container">
              <div className="row">
                {/* Text And Icon Cards Area */}
                <div className="col-md-8">
                  <div className="icon-cards-area">
                    <div className="card">
                      <div className="card-icon">
                        <i className="far fa-calendar-check" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Calendar Input</h4>
                        <p>Schedule your appointments, meetings and periodical evaluations using the provided in-app calendar option</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-icon">
                        <i className="far fa-file-code" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Visual Editor</h4>
                        <p>Leno provides a well designed and ergonomic visual editor for you to edit your notes and input data</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-icon">
                        <i className="fas fa-cube" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Good Foundation</h4>
                        <p>Get a solid foundation for your self development efforts. Try Leno mobile app for any mobile platform</p>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-icon">
                        <i className="far fa-bookmark" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Easy Reading</h4>
                        <p>Reading focus mode for long form articles, ebooks and other materials which involve large text areas</p>
                      </div>
                    </div>
                  </div> {/* end of icon cards area */}
                  <div className="text-area">
                    <h3>Monitoring Tools Evaluation</h3>
                    <p>Monitor the evolution of your finances and health state using tools integrated in Leno. The generated real time reports can be filtered based on any <a className="turquoise" href="#your-link">desired criteria</a>.</p>
                  </div> {/* end of text-area */}
                </div> {/* end of col-md-8 */}
                {/* end of text and icon cards area */}
                {/* Image Pane */}
                <div className="col-md-4">
                  <img className="img-fluid" src="images/features-iphone-3.png" alt="alternative" />
                </div>
                {/* end of image pane */}
              </div> {/* end of row */}
            </div> {/* end of container */}
          </div>{/* end of tab-pane */}
          {/* end of tab */}
        </div> {/* end of tab-content */}
        {/* end of tabs content */}
      </div> {/* end of row */} 
    </div> {/* end of container */} 
  </div> {/* end of tabs */}
  {/* end of features */}
  {/* Video */}
  <div id="preview" className="basic-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>PREVIEW</h2>
          <div className="p-heading p-large">Target the right customers for your business with the help of Leno's patented segmentation technology</div>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Video Preview */}
          <div className="image-container">
            <div className="video-wrapper">
              <a className="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
                <img className="img-fluid" src="images/video-frame.jpg" alt="alternative" />
                <span className="video-play-button">
                  <span />
                </span>
              </a>
            </div> {/* end of video-wrapper */}
          </div> {/* end of image-container */}
          {/* end of video preview */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-1 */}
  {/* end of video */}
  {/* Details 1 */}
  <div id="details" className="basic-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid" src="images/details-1-iphone.png" alt="alternative" />
        </div> {/* end of col */}
        <div className="col-lg-6">
          <div className="text-container">
            <h3>Goals Setting</h3>
            <p>Leno can easily help you track your personal development evolution if you take the time to properly setup your goals at the beginning of the training process. Check out the details</p>
            <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-2 */}
  {/* end of details 1 */}
  {/* Details 2 */}
  <div className="basic-3">
    <div className="second">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h3>Calendar Input</h3>
              <p>The calendar input function enables the user to setup training, meditation and relaxation sessions with ease. Just open the feature and start setting up your time as you desire</p>
              <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
            </div> {/* end of text-container */}
          </div> {/* end of col */}
          <div className="col-lg-6">
            <img className="img-fluid" src="images/details-2-iphone.png" alt="alternative" />
          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div> {/* end of second */}
  </div> {/* end of basic-3 */}    
  {/* end of details 2 */}
  {/* Details Lightboxes */}
  {/* Lightbox */}
  <div id="details-lightbox-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
    <div className="row">
      <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
      <div className="col-lg-6">
        <img className="img-fluid" src="images/details-lightbox-1.png" alt="alternative" />
      </div>
      <div className="col-lg-6">
        <h3>Goals Setting</h3>
        <hr />
        <p>Leno can easily help you track your personal development evolution if you take the time to set it up.</p>
        <h4>User Feedback</h4>
        <p>This is a great app which can help you save time and make your live easier. And it will help improve your productivity levels.</p>
        <p>You should definitely give it a try when you need a good app.</p>
        <table>
          <tbody><tr><td className="icon-cell"><i className="fas fa-desktop" /></td><td>Responsive layout</td></tr>
            <tr><td className="icon-cell"><i className="fas fa-bullhorn" /></td><td>Distinctive CTAs</td></tr>
            <tr><td className="icon-cell"><i className="fas fa-image" /></td><td>Image gallery slider</td></tr>
            <tr><td className="icon-cell"><i className="fas fa-envelope" /></td><td>Contact forms</td></tr>
            <tr><td className="icon-cell"><i className="fab fa-font-awesome-flag" /></td><td>FontAwesome icons</td></tr>
            <tr><td className="icon-cell"><i className="fas fa-code" /></td><td>Well-structured code</td></tr>
          </tbody></table>
        <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#details">BACK</a> 
      </div>
    </div> {/* end of row */}
  </div> {/* end of lightbox-basic */}
  {/* end of lightbox */}
  {/* Lightbox */}
  <div id="details-lightbox-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
    <div className="row">
      <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
      <div className="col-lg-6">
        <img className="img-fluid" src="images/details-lightbox-2.png" alt="alternative" />
      </div>
      <div className="col-lg-6">
        <h3>Calendar Input</h3>
        <hr />
        <p>The calendar input function enables the user to setup training, meditation and relaxation sessions with ease.</p>
        <h4>User Feedback</h4>
        <p>This is a great app which can help you save time and make your live easier. And it will help improve your productivity levels.</p>
        <p>You should definitely give it a try when you need a good app.</p>
        <table>
          <tbody><tr><td className="icon-cell"><i className="fas fa-desktop" /></td><td>Responsive layout</td></tr>
            <tr><td className="icon-cell"><i className="fas fa-bullhorn" /></td><td>Distinctive CTAs</td></tr>
            <tr><td className="icon-cell"><i className="fas fa-image" /></td><td>Image gallery slider</td></tr>
            <tr><td className="icon-cell"><i className="fas fa-envelope" /></td><td>Contact forms</td></tr>
            <tr><td className="icon-cell"><i className="fab fa-font-awesome-flag" /></td><td>FontAwesome icons</td></tr>
            <tr><td className="icon-cell"><i className="fas fa-code" /></td><td>Well-structured code</td></tr>
          </tbody></table>
        <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#details">BACK</a>
      </div>
    </div> {/* end of row */}
  </div> {/* end of lightbox-basic */}
  {/* end of lightbox */}
  {/* end of details lightboxes */}
  {/* Screenshots */}
  <div className="slider-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Image Slider */}
          <div className="slider-container">
            <div className="swiper-container image-slider">
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-1.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-1.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-2.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-2.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-3.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-3.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-4.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-4.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-5.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-5.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-6.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-6.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-7.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-7.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-8.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-8.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-9.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-9.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <a href="images/screenshot-10.png" className="popup-link" data-effect="fadeIn">
                    <img className="img-fluid" src="images/screenshot-10.png" alt="alternative" />
                  </a>
                </div>
                {/* end of slide */}
              </div> {/* end of swiper-wrapper */}
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              {/* end of add arrows */}
            </div> {/* end of swiper-container */}
          </div> {/* end of slider-container */}
          {/* end of image slider */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of slider-2 */}
  {/* end of screenshots */}
  {/* Download */}
  <div className="basic-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
            <h2>Download <span className="blue">Leno</span></h2>
            <p className="p-large">Target the right customers for your business with the help of Leno's patented technology and increase conversion figures in less than 2 weeks</p>
            <a className="btn-solid-lg" href="#your-link"><i className="fab fa-apple" />APP STORE</a>
            <a className="btn-solid-lg" href="#your-link"><i className="fab fa-google-play" />PLAY STORE</a>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-lg-6 col-xl-7">
          <div className="image-container">
            <img className="img-fluid" src="images/download.png" alt="alternative" />
          </div> {/* end of img-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-4 */}
  {/* end of download */}
  {/* Statistics */}
  <div className="counter">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Counter */}
          <div id="counter">
            <div className="cell">
              <div className="counter-value number-count" data-count={231}>1</div>
              <p className="counter-info">Happy Users</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count={85}>1</div>
              <p className="counter-info">Issues Solved</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count={59}>1</div>
              <p className="counter-info">Good Reviews</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count={127}>1</div>
              <p className="counter-info">Case Studies</p>
            </div>
          </div>
          {/* end of counter */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of counter */}
  {/* end of statistics */}
  {/* Contact */}
  <div id="contact" className="form">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>CONTACT</h2>
          <ul className="list-unstyled li-space-lg">
            <li className="address">Don't hesitate to give us a call or just use the contact form below</li>
            <li><i className="fas fa-map-marker-alt" />22 Innovative, San Francisco, CA 94043, US</li>
            <li><i className="fas fa-phone" /><a className="blue" href="tel:003024630820">+81 720 2212</a></li>
            <li><i className="fas fa-envelope" /><a className="blue" href="mailto:office@leno.com">office@leno.com</a></li>
          </ul>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          {/* Contact Form */}
          <form id="contactForm" data-toggle="validator" data-focus="false">
            <div className="form-group">
              <input type="text" className="form-control-input" id="cname" required />
              <label className="label-control" htmlFor="cname">Name</label>
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control-input" id="cemail" required />
              <label className="label-control" htmlFor="cemail">Email</label>
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <textarea className="form-control-textarea" id="cmessage" required defaultValue={""} />
              <label className="label-control" htmlFor="cmessage">Your message</label>
              <div className="help-block with-errors" />
            </div>
            <div className="form-group checkbox">
              <input type="checkbox" id="cterms" defaultValue="Agreed-to-Terms" required />I have read and agree to Leno's stated conditions in <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
              <div className="help-block with-errors" />
            </div>
            <div className="form-group">
              <button type="submit" className="form-control-submit-button">SUBMIT MESSAGE</button>
            </div>
            <div className="form-message">
              <div id="cmsgSubmit" className="h3 text-center hidden" />
            </div>
          </form>
          {/* end of contact form */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of form */}
  {/* end of contact */}
  {/* Footer */}
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="footer-col">
            <h4>About Leno</h4>
            <p>We're passionate about creating the best mobile apps for personal development</p>
          </div>
        </div> {/* end of col */}
        <div className="col-md-4">
          <div className="footer-col middle">
            <h4>Important Links</h4>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">Our business partners <a className="turquoise" href="#your-link">startupguide.com</a></div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">Read our <a className="turquoise" href="terms-conditions.html">Terms &amp; Conditions</a>, <a className="turquoise" href="privacy-policy.html">Privacy Policy</a></div>
              </li>
            </ul>
          </div>
        </div> {/* end of col */}
        <div className="col-md-4">
          <div className="footer-col last">
            <h4>Social Media</h4>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-google-plus-g fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-linkedin-in fa-stack-1x" />
              </a>
            </span>
          </div> 
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of footer */}  
  {/* end of footer */}
  {/* Copyright */}
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className="p-small">Copyright © Leno - Mobile App Landing Page Template by <a href="http://www.inovatik.com">Inovatik</a></p>
        </div> {/* end of col */}
      </div> {/* enf of row */}
    </div> {/* end of container */}
  </div> {/* end of copyright */} 
  {/* end of copyright */}
</div>

          
        );
    }
}

export default Home;
