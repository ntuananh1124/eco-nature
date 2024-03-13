import Header from "../components/Header";
import "../scss/style.scss";
import sec1 from"../assets/image/Layer 290.png";
import { FaFlag } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import col1 from "../assets/image/col1.png" 
import col2 from "../assets/image/col2.png" 
import col3 from "../assets/image/col3.png" 
import col4 from "../assets/image/col4.png" 
import Section2Slider from "../components/BestSeller";
import PopularTours from "../components/PopularTours";
import IndoChinaTours from "../components/IndoChinaTours";
import CruiseTours from "../components/CruiseTours";
import hotel from "../assets/image/hotel.png";
import car from "../assets/image/car.png";
import visa from "../assets/image/visa.png";
import fares from "../assets/image/fares.png";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
import tripadvisor from "../assets/image/tripadvisor.png";
import routard from "../assets/image/routard.png";
import trustpilot from "../assets/image/Trustpilot.png";
import choice from "../assets/image/200.png";
import routard2 from "../assets/image/200routard.png"
import Staff from "../components/Staff";
import Blogs from "../components/Blogs";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Layout() {
    return (
        <>
            <Contact />

            <header className="header" id="header">
                <Header />
            </header>

            <main className="main">
                {/* Section 1 */}
                <div className="section-1">
                    <div className="section-1__image">
                        <img src={sec1} alt="image here..." />
                    </div>
                    <div className="container">
                        <div className="section-1__search">
                            <ul className="section-1__search__list">
                                <li className="section-1__search__item">
                                    <input type="text" placeholder="Where do you want to go...."/>
                                </li>
                                <li className="section-1__search__item line">
                                    <FaFlag />
                                    <div className="section-1__search__item__sug">
                                        <span>Tour type</span>
                                        <IoIosArrowDown />
                                    </div>
                                </li>
                                <li className="section-1__search__item line">
                                    <FiMapPin />
                                    <div className="section-1__search__item__sug">
                                        <span>Place of departure</span>
                                        <IoIosArrowDown />
                                    </div>
                                </li>
                                <li className="section-1__search__item line">
                                    <FaRegCalendarAlt />
                                    <div className="section-1__search__item__sug">
                                        <span>Duration</span>
                                        <IoIosArrowDown />
                                    </div>
                                </li>
                                <li className="section-1__search__item">
                                    <button className="section-1__search__btn">
                                        <IoMdSearch />
                                        <span>Search</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="section-1__services">
                            <div className="section-1__services__column">
                                <div className="section-1__services-img">
                                    <img src={col1} alt="col1" />
                                </div>
                                <div className="section-1__services-info">
                                    <h4>Customizable by local experts</h4>
                                    <p>Personalize trip at the original price!</p>
                                </div>
                            </div>
                            <div className="section-1__services__column">
                                <div className="section-1__services-img">
                                    <img src={col2} alt="col1" />
                                </div>
                                <div className="section-1__services-info">
                                    <h4>Refund Guarantee</h4>
                                    <p>We believe in our work and promise to give you money back</p>
                                </div>
                            </div>
                            <div className="section-1__services__column">
                                <div className="section-1__services-img">
                                    <img src={col3} alt="col1" />
                                </div>
                                <div className="section-1__services-info">
                                    <h4>Good Price / Quality</h4>
                                    <p>95% satisfied more than expected !</p>
                                </div>
                            </div>
                            <div className="section-1__services__column">
                                <div className="section-1__services-img">
                                    <img src={col4} alt="col1" />
                                </div>
                                <div className="section-1__services-info">
                                    <h4>24/7 Local Support</h4>
                                    <p>We are always available online to provide assistance at anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="section-2">
                    <div className="container">
                        <div className="section-2__header">
                            <h2 className="section-2__header__name">Best-seller Tours</h2>
                        </div>
                        <div className="section-2__main">
                            <Section2Slider />
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="section-3">
                    <div className="container">
                        <div className="section-3__header">
                            <h2 className="section-3__header__name">Our Most Popular Tours</h2>
                        </div>
                        <div className="section-3__main">
                            <PopularTours />
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="section-4">
                    <div className="container">
                        <div className="section-4__header section-3__header">
                            <h2 className="section-3__header__name">Our Indochina Tours</h2>
                        </div>
                        <div className="section-4__main">
                            <IndoChinaTours />
                        </div>
                    </div>
                </div>

                {/* Section 5 */}
                <div className="section-5">
                    <div className="container">
                        <div className="section-5__header section-3__header">
                            <h2 className="section-3__header__name">Cruise Tours</h2>
                        </div>
                        <div className="section-5__main">
                            <CruiseTours />
                        </div>
                    </div>
                </div>

                {/* Section 6 */}
                <div className="section-6">
                    <div className="container">
                        <div className="section-2__header section-6__header">
                            <h2 className="section-6__header__name section-2__header__name">Services of Eco Nature Travel</h2>
                        </div>
                        <div className="section-6__main">
                            <div className="section-6__main__item">
                                <div className="section-6__main__item__img">
                                    <img src={hotel} alt="" />
                                </div>
                                <div className="section-6__main__item__info">
                                    <h4>Hotel Service</h4>
                                    <p>Best hotels in famous  destinations.</p>
                                </div>
                            </div>
                            <div className="section-6__main__item">
                                <div className="section-6__main__item__img">
                                    <img src={car} alt="" />
                                </div>
                                <div className="section-6__main__item__info">
                                    <h4>Car for rent services</h4>
                                    <p>Car rental service at good prices from reputable and thoughtful car companies.</p>
                                </div>
                            </div>
                            <div className="section-6__main__item">
                                <div className="section-6__main__item__img">
                                    <img src={visa} alt="" />
                                </div>
                                <div className="section-6__main__item__info">
                                    <h4>Visa Service</h4>
                                    <p>Fast and cheap Visa service. Comprehensive visa , simple procedure</p>
                                </div>
                            </div>
                            <div className="section-6__main__item">
                                <div className="section-6__main__item__img">
                                    <img src={fares} alt="" />
                                </div>
                                <div className="section-6__main__item__info">
                                    <h4>Fares Service</h4>
                                    <p>Cheapest air tickets, many attractive promotions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 7 */}
                <div className="section-7">
                    <div className="container">
                        <div className="section-7__inner">
                            <div className="section-7__header section-2__header">
                                <h2 className="section-7__header__name section-3__header__name">Eco Travel is highly recommended on</h2>
                                <p>Embracing the mission of "Satisfied more than expected" and providing authentic experiences, we have received numerous recommendations on reputable travel forums</p>
                            </div>
                            <div className="section-7__main">
                                <div className="section-7__para">
                                    <div className="section-7__para__img tripadvisor">
                                        <img src={tripadvisor} alt="" />
                                    </div>
                                    <BiSolidQuoteLeft className="quote__left" />
                                    <p>Exceptional discoveries, excellent guide, impeccable organization. Personalize support based on listening and meeting needs. Constant availability. Very reputable travel agency in Vietnam, highly recommended.</p>
                                    <b>Tripadvisor.com@excellent</b>
                                    <BiSolidQuoteRight className="quote__right" />
                                </div>
                                <div className="section-7__para">
                                    <div className="section-7__para__img">
                                        <img src={routard} alt="" />
                                    </div>
                                    <BiSolidQuoteLeft className="quote__left" />
                                    <p>A reputable and highly recommended local travel agency in Hanoi, Vietnam. The company has made every effort to always listen to customers and meet our requests at competitive prices.</p>
                                    <b>Review on Routard Guide</b>
                                    <BiSolidQuoteRight className="quote__right" />
                                </div>
                                <div className="section-7__para section-7__para__final">
                                    <div className="section-7__para__final__img">
                                        <img src={trustpilot} alt="" />
                                    </div>
                                    <div className="section-7__para__final__col">
                                        <div className="section-7__para__final__img">
                                            <img src={choice} alt="" />
                                        </div>
                                        <div className="section-7__para__final__img">
                                            <img src={routard2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 8 */}
                <div className="section-8">
                    <div className="container">
                        <div className="section-8__inner">
                            <div className="section-7__header section-2__header">
                                <h2 className="section-7__header__name section-3__header__name">Dedicated Staff</h2>
                                <p>With a team of enthusiastic and committed staff members, we always eager to listen to your opinions and requirements</p>
                            </div>
                            <div className="section-8__main">
                                <Staff />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 9 */}
                <div className="section-9">
                    <div className="container">
                        <div className="section-9__inner">
                            <div className="section-9__header">
                                <h2 className="section-9__header__name">About Us</h2>
                            </div>
                            <div className="section-9__main">
                                <p>How to have a great trip as you expected? Among trusted online travel agencies, Eco Nature Travel Vietnam is one of the local companies that guarantees you an enjoyable trip beyond your expectations. We bring you amazing beauty as you discover the hidden charms of Vietnam, Laos and Cambodia. We have received high ratings from previous customers; We are therefore honored to promote ourselves as an organizer of Vietnam tours for you. Please contact us and tell us your request, we will provide you with a memorial cruise trip!</p>
                            </div>
                            <div className="section-9__btn">
                                <button>View more</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 10 */}
                <div className="section-10">
                    <div className="container">
                        <div className="section-10__inner">
                            <div className="section-10__header section-2__header">
                                <h2 className="section-10__header__name section-3__header__name">Travel Blogs</h2>
                            </div>
                            <div className="section-10__main">
                                <Blogs />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 11 */}
                <div className="section-11">
                    <div className="container">
                        <div className="section-11__inner">
                            <div className="section-9__header">
                                <h2 className="section-9__header__name">Quick Tour Inquiry</h2>
                            </div>
                            <div className="section-11__main">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <Footer />
                </div>
            </footer>
        </>
    )
}