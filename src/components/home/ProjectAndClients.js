import parallax_04 from '../../uploads/banner.png'

function ProjectAndClients() {
    return (
        <div className="parallax section parallax-off" data-stellar-background-ratio="0.9"
            style={{ backgroundImage: "url(" + parallax_04 + ")" }}>
            <div className="container">
                <div className="row text-center stat-wrap">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-briefcase"></i></span>
                        <p className="stat_count">100 +</p>
                        <h3>Complated Projects</h3>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-happy"></i></span>
                        <p className="stat_count">120 +</p>
                        <h3>Happy Clients</h3>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-idea"></i></span>
                        <p className="stat_count">50 +</p>
                        <h3>Customer Services</h3>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-customer-service"></i></span>
                        <p className="stat_count">200 +</p>
                        <h3>Answered Questions</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectAndClients
