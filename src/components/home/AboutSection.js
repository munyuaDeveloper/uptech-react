import about_01 from '../../uploads/about_01.jpg'
import about_02 from '../../uploads/about_02.jpg'
function AboutSection() {
    return (
        <div id="about" className="section wb">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="message-box">
                        <h4>About Us</h4>
                        <h2>Welcome to GoodWEB Solutions</h2>
                        <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>

                        <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>

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

            <hr className="hr1"/> 

            <div className="row">
				<div className="col-md-6">
                    <div className="post-media wow fadeIn">
                        <img src={about_02} alt="" className="img-responsive img-rounded" />
                    </div>
                </div>
				
                <div className="col-md-6">
                    <div className="message-box">
                        <h4>Who We are</h4>
                        <h2>We Are GoodWEB Solutions</h2>
                        <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>

                        <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>

                        <a href="#services" className="btn btn-light btn-radius btn-brd grd1">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutSection
