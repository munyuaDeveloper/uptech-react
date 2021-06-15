import React from 'react'

function TopNavbar() {
    return (
        <div className="top-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="left-top">
                <div className="email-box">
                  <a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i> youremail@gmail.com</a>
                </div>
                <div className="phone-box">
                  <a href="tel:1234567890"><i className="fa fa-phone" aria-hidden="true"></i> +1 234 567 890</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="right-top">
              <div className="social-box">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-rss-square" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TopNavbar
