import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import f1 from "../../assets/image/f1.png";
import f2 from "../../assets/image/f2.png";
import f3 from "../../assets/image/f3.png";

export default function Footer() {
    return (
        <>
            <div className="footer__main">
                <div className="footer__main__top">
                    <div className="footer__list footer__list-one">
                        <ul>
                            <li>
                                <h4>PACKAGE TOURS</h4>
                            </li>
                            <li>Vietnam</li>
                            <li>Cambodia</li>
                            <li>Laos</li>
                        </ul>
                    </div>
                    <div className="footer__list footer__list-two">
                        <ul>
                            <li>
                                <h4>CRUISES TOURS</h4>
                            </li>
                            <li>Ha Long Bay Cruises</li>
                            <li>MeKong Detal Cruises</li>
                        </ul>
                    </div>
                    <div className="footer__list footer__list-three">
                        <ul>
                            <li>
                                <h4>DESTINATIONS</h4>
                            </li>
                            <li>Vietnam</li>
                            <li>Cambodia</li>
                            <li>Laos</li>
                        </ul>
                    </div>
                    <div className="footer__list footer__list-four">
                        <ul>
                            <li>
                                <h4>RESOURCES</h4>
                            </li>
                            <li>Term & Conditions</li>
                            <li>Payment</li>
                            <li>Travel Guide</li>
                            <li>Map</li>
                            <li>Travel FAQs</li>
                            <li>Link</li>
                            <li>Travel Blog</li>
                        </ul>
                    </div>
                    <div className="footer__list footer__list-five">
                        <ul>
                            <li>
                                <h4>ABOUT US</h4>
                            </li>
                            <li>Introduction</li>
                            <li>Eco Nature Team</li>
                            <li>Responsible Travel</li>
                            <li>Our Projects</li>
                            <li>Donation we have done</li>
                            <li>Business License</li>
                        </ul>
                        <div className="footer__list-five__list-bottom">
                            <ul>
                                <li>
                                    <a href="#">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaYoutube />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <FaTiktok />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__main__bottom">
                    <ul>
                        <li>
                            <img src={f1} alt="" />
                        </li>
                        <li>
                            <img src={f2} alt="" />
                        </li>
                        <li>
                            <img src={f3} alt="" />
                        </li>
                    </ul>
                    <div className="footer__main__bottom__rights">
                        <span><b>Eco Travel Co.,Ltd</b> - Business License No: 0701. Issued by VNAT</span>
                        <span>Copyright © 2021 by <b>EcoTravelVietnam.com</b> -  All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </>
    )
}