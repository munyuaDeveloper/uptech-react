import about_01 from '../../uploads/about_01.jpg'
import about_02 from '../../uploads/about_02.jpg'
function AboutSection() {
    return (
        <div id="about" className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="message-box">
                            <h4>Who We are</h4>
                            <h2>We Are Uptech payouts</h2>

                            <p> Uptech payouts was developed with an aim of making mobile money integrations easy and fast.
                                The
                                team of highly skilled developers came up with a system that had all the hectic backend
                                handled
                                and provides a simple endpoint for different payment integrations e.g. M-PESA, PayPal, Jenga
                                Apis (Equitel) and Card payments. We help clients who don’t have a paybill/till number get
                                payments to their account as well as obtain till numbers/paybills and go live. </p>

                            <a href="#services" className="btn btn-light btn-radius btn-brd grd1">Learn More</a>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="post-media wow fadeIn">
                            <img src={about_01} alt="" className="img-responsive img-rounded" />
                            <a href="http://www.youtube.com/watch?v=nrJtHemSPW4" data-rel="prettyPhoto[gal]" className="playbutton"><i className="flaticon-play-button"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
