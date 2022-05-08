import "./mens.css"
import { Link } from 'react-router-dom';
import { Navbar } from "../../../landing-page/components/Navbar";
import { Footer } from "../../../landing-page/components/Footer";
export const Menspage = () => {
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
            <div id="divimage6">
                <img id="image1" src="https://i.ibb.co/xSY32xM/discount-image.jpg" alt="discount image for mans page" srcset="" />
            </div>
            <div id="divimage2">
                <img id="image2" src="https://i.ibb.co/58y0tvJ/hero-image.jpg" alt="Hero image" srcset="" />
            </div>
            <div id="fourpictures">
                {/* have to apply routing */}
                <Link to="/polo"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/mw/2022/april/25/moments/mw_prl_ex_moment_870x1110_v2.jpg" alt="" srcset="" />
                    <div>
                        <h3>POLO RALPH LAUREN</h3>
                        <p>Horse play</p>
                    </div>
                </div></Link>
                <Link to="/nike"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/mw/2022/april/25/moments/mw_nike_unisex_retro_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h3>NIKE-STALGIA</h3>
                        <p>The retro collection</p>
                    </div>
                </div></Link>
                <Link to="/holiday">  <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/mw/2022/april/25/moments/mw_gbl_summerlicense_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h3>HOLIDAY PRINTS</h3>
                        <p>Home + away</p>
                    </div>
                </div></Link>
                <Link to="/berghaus"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/mw/2022/april/25/moments/mw_gbl_berghaus_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h3>BERGHAUS</h3>
                        <p>The logo to know</p>
                    </div>
                </div></Link>
            </div>
            <div id="banner2">
                <div id="bannerimage">
                    <img id="bannerimage2" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/outlet/summer-2020/summer-outlet/outlet-logo-desktop_transparent.gif " alt="" />
                </div>
                <div id="bannertext">
                    <h1>EXTRA 20% OFF</h1>
                    <h1>SUN-READY TEES, SHORTS&MORE</h1>
                </div>
                <div id="ptag2">
                    <p>With code: 20DEGREES</p>
                </div>
                <div id="bannersmalltext">Outlet items only.See website banner for Ts&Cs. Selected marked products excluded from promo.</div>
            </div>
            <div id="shopnow">
                <div class="shopnowdiv">
                    <img class="shopnowimage" src="https://content.asos-media.com/-/media/homepages/mw/2022/april/25/moments/mw_plain_shirts_moment_870x1110.jpg" alt="Plain Shirts" srcset="" />
                    <div class="shopnowtext">
                        <h2>SPRING SHIRTS</h2>
                        <p>Wavey looks</p>
                        <input className = "shop_now" type="button" value="SHOP NOW" />
                    </div>

                </div>
                <div class="shopnowdiv">
                    <img class="shopnowimage" src="https://content.asos-media.com/-/media/homepages/mw/2022/april/25/moments/mw_logos_unrvlld_moment_870x1110.jpg" alt="unrvlled moments" srcset="" />
                    <div class="shopnowtext"><h2>WORDS UP</h2>
                        <p>Ft.new ASOS Unrvlld Spply</p>
                        <input className = "shop_now" type="button" value="SHOP NOW" /></div>
                </div>
            </div>
            <div id="trend">
                <h2>TRENDING BRANDS</h2>
            </div>
            <div id="logoimg">
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/nike-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" alt="" srcset="" />
            </div>
        </div>
        
        </div>
    );
};
