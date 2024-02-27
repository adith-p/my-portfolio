import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                {/* <div className="about-text bg-white p-2.5 rounded-md text-black"> */}
                <div className="about-text  p-2.5 text-white">
                    <p className="title">As a developer...</p>
                    <p>
                        my passion lies in creating elegant and effective solutions to complex challenges. Having a strong foundation in software development, especially backend technologies like <strong>Python</strong>, <strong>Django</strong>, <strong>Django Rest Framework</strong>, <strong>FastAPI</strong>, <strong>PostgreSQL</strong>, <strong>Celery</strong>, and <strong>Redis</strong>, I enjoy backend development.
                    </p>
                    <p>
                        Although I dabbled in front-end technologies like <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>, I found my true calling in back-end development and chose to focus my efforts there.
                    </p>
                    <p >
                        With the goal of improving efficiency, enhancing user experience, and maintaining the highest standards of code quality, I am constantly looking for opportunities to hone my skills In my journey throughout, I have handled a variety of projects, ranging from straightforward backend applications to much more complex ones. My expertise extends to a variety of development tools and frameworks including <strong>Git</strong>, <strong>VS Code</strong>, <strong>Linux</strong>, and <strong>Nginx</strong>. I maintain a strong interest in exploring new backend technologies and am dedicated to continuous learning and development.
                    </p>
                </div>


                <div className="about-img">
                    <Image src="/images/unsplash.jpg" className="profile-img" width={300} height={500}></Image>
                </div>
            </div>

        </div>
    )
}


export default About;