import Link from "next/link";


const Navbar = () => {
    return (
        <div className="nav-container ">
            <div className="logo">
                <Link href="/">
                    Adith P | Backend Developer
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/1dJysEaCfNhrp56i5Cbvadu7tCu66RInz/view?usp=sharing" target="_blank" className="cta-btn">Download Resume</a>

        </div>
    )
}


export default Navbar;