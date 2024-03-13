import Slider from "react-slick";
import { FaClock } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import "../../scss/style.scss";
import PrevArrow from "../PrevArrow";
import NextArrow from "../NextArrow";
import { FaStar } from "react-icons/fa";
import { toursData } from "./data";

export default function CruiseTours() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
        };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {toursData.map((tour) => 
                        <div className="section-3__main__item">
                            <div className="section-3__main__item__img"  >
                                <img src={tour.thumb} alt="image here..." />
                            </div>
                            <div className="section-3__main__item__desc section-5__main__item__desc">
                                <h4 className="section-3__main__item__desc__name section-5__main__item__desc__name">{tour.name}</h4>
                                <div className="section-5__star">
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                    <FaStar className="star" />
                                </div>
                                <div className="section-5__main__item__desc__info">
                                    <div className="section-5__main__item__desc__info__left
                                    section-3__main__item__desc__info__left">
                                        <FaClock />
                                        <span>{tour.time}</span>
                                    </div>
                                    <div className="section-5__main__item__desc__info__right section-3__main__item__desc__info__right">
                                        <RiMoneyDollarCircleFill />
                                        <span>Price from <b>{tour.price}</b> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
            </Slider>
        </div>
    )
}