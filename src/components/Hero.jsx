import Image from "next/image";
import dp from "../public/images/dp.jpg";
import dppng from "../public/images/dp.png";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src={dppng.src} className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Adith 👋</h1>
                <p>
                    I'm a software developer based in Kerala, India. I specialize in building
                    API, applications, and everything in between.
                </p>
                <div className="social-icons">
                    <a
                        href="" target="_blank" aria-label="Twitter"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://github.com/adith-p"
                        aria-label="GitHub" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/adith-prakash008/" aria-label="LinkedIn" target="_blank" >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Hero;