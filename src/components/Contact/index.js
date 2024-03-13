import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import "./contact.scss";

export default function Contact() {
    return (
        <>
            <div className="contact__fixed">
                <ul>
                    <li className="fixed-phone">
                        <a href="#">
                            <FaPhoneAlt />
                        </a>
                    </li>
                    <li className="fixed-mes">
                        <a href="#">
                            <FaFacebookMessenger />
                        </a>
                    </li>
                    <li className="fixed-mesnor">
                        <a href="#">
                            <IoMdMail />
                        </a>
                    </li>
                    <li className="fixed-arrow">
                        <a href="#header">
                            <FaArrowUp />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}