import React from "react";
import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
import Wrapper from "./UI/Wrapper/Wrapper";
import Header from "./Header";
import {Link} from "react-router-dom"

// Images
import slider_01 from '../uploads/slider_01.jpg';
import slider_02 from '../uploads/slider_02.jpg';
import slider_03 from '../uploads/slider_03.jpg'

const NavbarSlider = ({activePage}) => {
    return (
        <HeroSlider
            slidingAnimation="top_to_bottom"
            orientation="vertical"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) =>
                console.log("onBeforeChange", previousSlide, nextSlide)
            }
            onChange={nextSlide => console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor: "#000"
            }}
            settings={{
                slidingDuration: 400,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: false,
                autoplayDuration: 8000,
                height: "100vh"
            }}
        >
            <Header activePage ={activePage} />
            <OverlayContainer>
                <Wrapper>
                    <div className="slide-text">
                        <h1 className="homepage-three-title">Easier <span>Mobile-Money</span> Integration</h1>
                        <h2>With Uptech Payouts mobile-money integraion services, <br/>you can easily integrate your
                            website with M-Pesa and other Mobile money services.</h2>
                        <div className="slider-content-btn">
                            <Link className="button btn btn-light btn-radius btn-brd mr-5" to="about">Read
                                More</Link>
                            <Link className="button btn btn-light btn-radius btn-brd"
                               to="contact">Contact</Link>
                        </div>
                    </div>
                </Wrapper>
            </OverlayContainer>

            <Slide
                shouldRenderMask
                navDescription="Easier Mobile-Money Integration"
                background={{
                    backgroundColor: "#6D9B98",
                    backgroundImage: slider_01
                }}
            />

            <Slide
                shouldRenderMask
                navDescription="Awesome Web Design & Software Development"
                background={{
                    backgroundColor: "#8A8A8A",
                    backgroundImage: slider_02
                }}
            />

            <Slide
                shouldRenderMask
                navDescription="Outstanding Mobile Development"
                background={{
                    backgroundColor: "#EA2329",
                    backgroundImage: slider_03
                }}
            />
            <MenuNav />
        </HeroSlider>
    );
};

export default NavbarSlider;
