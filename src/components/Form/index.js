import capcha from "../../assets/image/capcha.png";

export default function Form() {
    return (
        <>
            <form className="section-11__form" action="/submit" method="post">
                <div className="section-11__form__left">
                    <div className="section-11__form__left__top">
                        <input type="text" placeholder="*Full Name"/>
                        <input type="email" placeholder="*Email"/>
                    </div>
                    <div className="section-11__form__left__bottom">
                        <textarea type="text" placeholder="*Description of your wishes"/>
                    </div>
                </div>
                <div className="section-11__form__right">
                    <input type="text" placeholder="*Phone Number"/>
                    <img src={capcha} alt="capcha here..." className="section-11__form__right__capcha"/>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}