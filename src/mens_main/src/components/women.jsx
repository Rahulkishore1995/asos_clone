import "./mens.css"
import { Link } from 'react-router-dom';
import { Navbar } from "../../../landing-page/components/Navbar";
import { Footer } from "../../../landing-page/components/Footer";
export const Womenspage = () => {
    return (
        <div>
            
        <div id="mensmain">
            <div id="firsttwobox">
                <div id="leftmensdiv">
                    <div id="textfirst">
                        <p>GET 30% OFF JEANS!*</p>
                        <p>TOPMAN, ASOS DESIGN&MORE</p>
                        <p>With code: STAPLES</p>
                    </div>

                </div>
                <div id="rightmensdiv">
                    <div id="textsecond">
                        <p>EXTRA 20% OFF*</p>
                        <p>SUN-READY TEES, SHORTS&MORE</p>
                        <p>With code: 20DEGREES</p>
                    </div>
                </div>
            </div>
            <div id="divimage1">
                <img id="image1" src="https://i.ibb.co/xSY32xM/discount-image.jpg" alt="discount image for womens page" srcset="" />
            </div>
            <div id="divimage2">
                <img id="image2" src="https://i.ibb.co/QXBKvL4/hero-image-womens-page.jpg" alt="Hero image" srcset="" />
            </div>
            <div id="fourpictures">
                {/* have to apply routing */}
                <Link to="/women"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/ww/2022/apr/25/moments/ww_going_out_top_corsets_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h3>TOP OF THE CROPS</h3>
                        <p>Night-out needs</p>
                    </div>
                </div></Link>
                <Link to="/dresses"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/ww/2022/apr/25/moments/ww_fluffy_dress_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h3>FEEL-GOOD DRESSES</h3>
                        <p>Bare-leg season</p>
                    </div>
                </div></Link>
                <Link to="topshop">  <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/ww/2022/apr/25/moments/ww_gbl_topshop_moment_870x1110.png" alt="" srcset="" />
                    <div>
                        <h3>TOPSHOP</h3>
                        <p>One word: iconic</p>
                    </div>
                </div></Link>
                <Link to="highheels"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/ww/2022/apr/25/moments/ww_heels_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h3>SKY-HIGH HEELS</h3>
                        <p>Bearing your sole</p>
                    </div>
                </div></Link>
            </div>
            <div id="banner2">
                <div id="bannerimage">
                    <img id="bannerimage2" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/outlet/summer-2020/summer-outlet/outlet-logo-desktop_transparent.gif " alt="" />
                </div>
                <div id="bannertext">
                    <h1>EXTRA 20% OFF</h1>
                    <h1>SUN-READY DRESSES</h1>
                </div>
                <div id="ptag2">
                    <p>With code: 20DEGREES</p>
                </div>
                <div id="bannersmalltext">Outlet items only.See website banner for Ts&Cs. Selected marked products excluded from promo.</div>
            </div>
            <div id="shopnow">
                <div class="shopnowdiv">
                    <img class="shopnowimage" src="https://content.asos-media.com/-/media/homepages/ww/2022/apr/25/moments/ww_drifters_swim_moment_870x1110.jpg" alt="" srcset="" />
                    <div class="shopnowtext">
                        <h2>SURF'S UP</h2>
                        <p>Seas the day</p>
                        <input className = "shop_now"type="button" value="SHOP NOW" />
                    </div>

                </div>
                <div class="shopnowdiv">
                    <img class="shopnowimage" src="https://content.asos-media.com/-/media/homepages/ww/2022/apr/25/moments/ww_gbl_asosluxedresses_moment_870x1110.jpg" alt="" srcset="" />
                    <div class="shopnowtext"><h2>ASOS LUXE</h2>
                        <p>The luxe life chose you</p>
                        <input className = "shop_now" type="button" value="SHOP NOW" /></div>
                </div>
            </div>
            <div id="trend">
                <h2>TRENDING BRANDS</h2>
            </div>
            <div id="logoimg">
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x_200227170013.png" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x.png" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" alt="" srcset="" />
            </div>
        </div>
        
        </div>
    );
};