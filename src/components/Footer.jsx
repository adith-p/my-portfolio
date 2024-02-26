const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    © {new Date().getFullYear()} Adith's Portfolio
                </p>
                <div className="social_icons">
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
        </>
    )


}

export default Footer;