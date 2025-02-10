import './nav.css'
import benpoly from "../images/benpoly.svg"; 
import feduni from "../images/feduni.png"; 
import home1 from "../images/home1.png"; 
import home2 from "../images/home2.png"; 
import intrest from "../images/intrest.svg"; 
import idomamap from "../images/idomamap.svg"; 
import nvit from "../images/nvit.png"; 
import shadow from "../images/shadow.svg"
import ajene from "../images/ajene.svg"
import obekpa from "../images/obekpa.svg"
import odugbo from "../images/odugbo.svg"
import ogbu from "../images/ogbu.svg"
import ArrowUPRight from "../images/ArrowUPRight.png"
import BuildingApartment from "../images/BuildingApartment.png"
import Calendar from "../images/Calendar.png"
import ChartBar from "../images/Chartbar.png"
import Cherries from "../images/Cherries.png"
import Crown from "../images/Crown.png"
import FlowerLotus from "../images/Flowerlotus.png"
import RainbowCloud from "../images/RainbowCloud.png"
import User from "../images/User.png"




const IdomaCulture = () =>{
    return[
        <>
            {/* <div className="test">
                <div className="div1">
                   <p>Yes oo react</p>
                </div>
                <div className="div2">
                    <p>How are you</p>
                </div>
            </div> */}
            <div className="home">
                <div className="top">
                    <img src={home1} alt="home1" />
                    <img src={home2} alt="home2" />
                </div>
                <div className="text">
                    <img src={shadow} alt="shadow" />
                    
                </div>
            </div>
            {/* <div className="letters">
                        <h1>Step into the world <br />of the Idoma culture</h1>
                        <p>Welcome to meet Idoma, your gateway to the rich traditions , vibrant heritage and timeless stories of the Idoma people of Benue State, Nigeria.</p>
                        <a href="">Learn About Our History <i className='fas fa-arrow-up-right'></i></a>
                    </div> */}
            <div className="home-footer">
                <div class="iterm">
                    <p>Est populations</p>
                    <p><span>731457</span></p>
                </div>
                <div class="iterm"><h5>|</h5></div>

                <div class="iterm">
                    <p>LGA's</p>
                    <p><span>9</span></p>
                </div>
                <div class="iterm"><h5>|</h5></div>
                <div class="iterm">
                    <p>Languages</p>
                    <p><span>4</span></p>
                </div>
                <div class="iterm"><h5>|</h5></div>
                <div class="iterm">
                    <p>Land mass (km)</p>
                    <p><span>3,421</span></p>
                </div>
                <div class="iterm"><h5>|</h5></div>
                <div class="iterm">
                    <p>Location</p>
                    <p><span>Benue South</span></p>
                </div>
                <div class="iterm"><h5>|</h5></div>
                <div class="iterm">
                    <p>one</p>
                    <p><span>Idoma</span></p>
                </div>
            </div>

            {/* map */}

            <div class="container">
                <div class="history">
                    <h1>History Of Idoma</h1>
                    <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit. From the heart of Benue State Nigeria, their culture is a tapestry of art, music and storytlling. At meet Idoma we aim to preseve and share this rich heritage with the world..... </p>
                    <a href="#history.html" class="btn">Learn more <img src={ArrowUPRight} alt="Arrow up right" /></a>
            
                </div>
                <div class="map">
                <img src={idomamap} alt="idomamap" />
                </div>
            </div>
            <div class="intrest">
                <h1>Browse topics & Interest</h1>
                <p>The Idoma people are known for their vibrant traditions, deep-rooted <br /> history, and enduring spirit</p>
                <div class="container">
                    <div class="item">
                        <a href="">
                            <img src={FlowerLotus} alt="flower" />
                            <h1>Culture</h1>
                            <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit </p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src={ChartBar} alt="chart" />
                            <h1>Economy</h1>
                            <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit </p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src={Crown} alt="crown" />
                            <h1>Trad Council</h1>
                            <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit </p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src={Cherries} alt="home1" />
                            <h1>Market days</h1>
                            <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit </p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src={Cherries} alt="cherrie" />
                            <h1>Places</h1>
                            <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit </p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src={RainbowCloud} alt="home1" />
                            <h1>Icons</h1>
                            <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit </p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src={BuildingApartment} alt="home1" />
                            <h1>LGA's</h1>
                            <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit </p>
                        </a>
                    </div>
                    <div class="item">
                        <a href="">
                            <img src={User} alt="home1" />
                            <h1>Events</h1>
                            <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit </p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Interest */}
            <div class="image-container">
                <img src={intrest} alt="interst" />
                <div class="text-overlay">
                    <h1>Invest in Idoma land</h1>
                    <p>
                        The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit
                    </p>
                    <p><a href="#history.html">Learn more <i className='fa fa-external-link'></i></a></p>
                </div>
            </div>


            {/* Projects shaping idoma land */}


            <div class="project">
                <div class="main">
                    <h1>Projects Shaping Idoma Land</h1>
                    <p>The Idoma people are known for their vibrant traditions, deep-rooted history, and enduring spirit</p>
                </div>
                <div class="school">
                    <figure>
                        <img src={nvit} alt="nvit" />
                        <figcaption>New Vision Institute Of Technology(NVIT)</figcaption>
                    </figure>
                    <figure>
                        <img src={feduni} alt="feduni" />
                        <figcaption>Federal University Of Health Science(FUHHSO)</figcaption>
                    </figure>
                    <figure>
                        <img src={benpoly} alt="Benpoly" />
                        <figcaption>Benue State Polytechnic, Ugbokolo</figcaption>
                    </figure>
                </div>
               <a href="">Browse all places<img src={ArrowUPRight} alt="Arrow up right" /></a>
            </div> 

            <div className="trad-council">
                <h1>Traditional council</h1>
                <p>The Idoma people are known for their vibrant traditions, deep-rooted <br /> history, and enduring spirit.</p>
                <div className="trad-container">
                   <div>
                         <img src={odugbo} alt="odugbo" />
                        <p>HRH. Agabaidu Elaigwu Odogbo John</p>
                        <p><span>Och’Idoma 1 (2017 - Present)</span></p>
                   </div>
                   <div>
                        <img src={obekpa} alt="obekpa" />
                        <p>HRH. Agaibaidu Late Elias Ikoyi Obekpa.</p>
                        <p><span>Och’Idoma 1 (2017 - Present)</span></p>
                   </div>
                   <div>
                        <img src={ogbu} alt="ogbu" />
                        <p>HRH. Agabaidu Late Edwin Ogbede Ogbu.</p>
                        <p><span>Och’Idoma 1 (2017 - Present)</span></p>
                   </div>
                   <div>
                        <img src={ajene} alt="ajene" />
                        <p>HRH. Agabaidu Late Abraham Ajene Okpabi.</p>
                        <p><span>Och’Idoma 1 (2017 - Present)</span></p>
                   </div>
                </div>
                <a href="">Browse all places  <img src={ArrowUPRight} alt="Arrow up right" /></a>
            </div>


            {/* Footer */}
            <footer>
                <h2>Idoma, <span>Good Morning</span> ☀️</h2>
                <div className="footer">
                    <div class="iterm">
                        <p>LINKS</p>
                        <a href="">Vendor</a>
                        <a href="">Organizers</a>
                        <a href="">Event Owner</a>
                        <a href="">Attendees</a>
                    </div>
                    <div class="iterm">
                        <p>LINKS</p>
                        <a href="">Vendor</a>
                        <a href="">Organizers</a>
                        <a href="">Event Owner</a>
                        <a href="">Attendees</a>
                    </div>
                    <div class="iterm">
                        <p>LINKS</p>
                        <a href="">Vendor</a>
                        <a href="">Organizers</a>
                        <a href="">Event Owner</a>
                        <a href="">Attendees</a>
                    </div>
                    <div class="iterm">
                        <p>LINKS</p>
                        <a href="">Vendor</a>
                        <a href="">Organizers</a>
                        <a href="">Event Owner</a>
                        <a href="">Attendees</a>
                    </div>
                    <div class="iterm">
                        <p>LINKS</p>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                
                <div className="foot-note">
                        <div className="left">
                            <a href="">Terms of Use</a>
                            <a href="">Privacy</a>
                        </div>
                        <div className="right">
                            <p>@ 2024 meet idoma</p>
                        </div>
                    </div>

            </footer>


            
        </>
    ]
}
export default IdomaCulture