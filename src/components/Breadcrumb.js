
import PropTypes from 'prop-types'


function Breadcrumb({currentPage}) {
    return (
        <div className="banner-area banner-bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner text-left">
                            <h2>{currentPage}</h2>
                            <ul className="page-title-link">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">{currentPage}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {
    currentPage: PropTypes.string
}

export default Breadcrumb
