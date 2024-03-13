import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from"../../assets/image/lg.png";
import "./Header.scss";
import "../../scss/base.scss";

export default function Header() {
    return (
        <>
            <div className="inner-header">
                <div className="inner-header__contact container">
                    <ul className="inner-header__contact__left">
                        <li className="inner-header__contact__left__item">
                            <a href="#">
                                <FiPhone />
                                <span>+84 903 589 689</span>
                            </a>
                        </li>
                        <li className="inner-header__contact__left__item">
                            <a href="#">
                                <MdEmail />
                                <span>info@ecotravelvietnam.com</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="inner-header__contact__right">
                        <li className="inner-header__contact__right__item">
                            <AiOutlineGlobal />
                            <div className="inner-header__contact__right__item__lang lang">
                                <div className="lang__menu">
                                    <span>English</span>
                                    <IoIosArrowDown />
                                </div>
                                <div className="lang__sub-menu">
                                    <span>Vietnamese</span>
                                </div>
                            </div>
                        </li>
                        <li className="inner-header__contact__right__item">
                            <a href="#">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li className="inner-header__contact__right__item">
                            <a href="#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li className="inner-header__contact__right__item">
                            <a href="#">
                                <FaYoutube />
                            </a>
                        </li>
                        <li className="inner-header__contact__right__item">
                            <a href="#">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className="inner-header__contact__right__item">
                            <a href="#">
                                <FaTiktok />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="inner-header__nav container">
                <div className="inner-header__nav__img">
                    <img src={logo} alt="" />
                </div>
                <ul className="inner-header__nav__list">
                    <li className="inner-header__nav__list__item">
                        <a href="#">Home</a>
                    </li>
                    <li className="inner-header__nav__list__item">
                        <a href="#">Destinations</a>
                    </li>
                    <li className="inner-header__nav__list__item">
                        <a href="#">Package Tours</a>
                    </li>
                    <li className="inner-header__nav__list__item">
                        <a href="#">group tours</a>
                    </li>
                    <li className="inner-header__nav__list__item">
                        <a href="#">Home</a>
                    </li>
                    <li className="inner-header__nav__list__item">
                        <a href="#">cruises tours</a>
                    </li>
                    <li className="inner-header__nav__list__item">
                        <a href="#">about us</a>
                    </li>
                    <li className="inner-header__nav__list__item">
                        <a href="#">contact us</a>
                    </li>
                </ul>
            </div>
        </>
    )
}