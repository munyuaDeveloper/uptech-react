
import Breadcrumb from '../Breadcrumb'

function pricing() {
    return (
        <>

        <Breadcrumb currentPage='Our Prices' />


        <div id="about" className="section wb">
            <div className="container">
                <div className="section-title text-center">
                    <h3>Pricing</h3>
                    <p className="lead">We thanks for all our awesome testimonials! There are hundreds of our happy customers! <br/>Let's see what others say about GoodWEB Solutions website template!</p>
                </div>
                
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="pricingTable">
                            <div className="pricingTable-header">
                                <h3 className="title">Standard</h3>
                                <span className="sub-title">Lorem ipsum</span>
                                <span className="year">Pay only <br/>$110/year</span>
                            </div>
                            <div className="price-value">
                                <div className="value">
                                    <span className="currency">$</span>
                                    <span className="amount">10.<span>99</span></span>
                                    <span className="month">/month</span>
                                </div>
                            </div>
                            <ul className="pricing-content">
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>50GB Monthly Bandwidth</li>
                                <li className="disable">10 Subdomains</li>
                                <li className="disable">15 Domains</li>
                            </ul>
                            <a href="#" className="pricingTable-signup">Select the plan </a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="pricingTable purple">
                            <div className="pricingTable-header">
                                <h3 className="title">Business</h3>
                                <span className="sub-title">Lorem ipsum</span>
                                <span className="year">Pay only <br/>$220/year</span>
                            </div>
                            <div className="price-value">
                                <div className="value">
                                    <span className="currency">$</span>
                                    <span className="amount">20.<span>99</span></span>
                                    <span className="month">/month</span>
                                </div>
                            </div>
                            <ul className="pricing-content">
                                <li>60GB Disk Space</li>
                                <li>60 Email Accounts</li>
                                <li>60GB Monthly Bandwidth</li>
                                <li>15 Subdomains</li>
                                <li className="disable">20 Domains</li>
                            </ul>
                            <a href="#" className="pricingTable-signup">Select the plan </a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="pricingTable blue">
                            <div className="pricingTable-header">
                                <h3 className="title">Premium</h3>
                                <span className="sub-title">Lorem ipsum</span>
                                <span className="year">Pay only <br/>$330/year</span>
                            </div>
                            <div className="price-value">
                                <div className="value">
                                    <span className="currency">$</span>
                                    <span className="amount">30.<span>99</span></span>
                                    <span className="month">/month</span>
                                </div>
                            </div>
                            <ul className="pricing-content">
                                <li>70GB Disk Space</li>
                                <li>70 Email Accounts</li>
                                <li>70GB Monthly Bandwidth</li>
                                <li>20 Subdomains</li>
                                <li>25 Domains</li>
                            </ul>
                            <a href="#" className="pricingTable-signup">Select the plan </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default pricing
