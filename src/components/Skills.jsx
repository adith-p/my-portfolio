import Image from "next/image";
import postgresql from "/public/assets/skills/postgresql.png";
import django from "/public/assets/skills/django.png";
import drf from "/public/assets/skills/DRF.png";
import celery_black from "/public/assets/skills/celeryblack.png";
import redis from "/public/assets/skills/redis.png";
import fastapi from "/public/assets/skills/fastapi.png";
import nginx from "/public/assets/skills/nginx.png";
import vscode from "/public/assets/skills/vscode.png";


const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card python">
                    <i className="fa-brands fa-python Python-icon"></i>
                    <p>Python</p>
                </div>

                <div className="skill-card django">
                    <i className="fa-brands fa-Django Django-icon"></i>
                    <Image src={django.src} className="PostgreSQL-icon" width={25} height={25} />
                    <p>Django</p>
                </div>

                <div className="skill-card drf">

                    <Image src={drf.src} className="drf-icon" width={25} height={25} />
                    <p>DRF</p>
                </div>

                <div className="skill-card fastapi">

                    <Image src={fastapi.src} className="fastapi-icon" width={25} height={25} />
                    <p>FastAPI</p>
                </div>

                <div className="skill-card psql">

                    <Image src={postgresql.src} className="postgresql-icon" width={25} height={25} />
                    <p>PostgreSQL</p>
                </div>

                <div className="skill-card celery">

                    <Image src={celery_black.src} className="celery-icon" width={25} height={25} />
                    <p>Celery</p>
                </div>

                <div className="skill-card redis">

                    <Image src={redis.src} className="redis-icon" width={25} height={25} />
                    <p>Redis</p>
                </div>

                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>

                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>

                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>

                <div className="skill-card bootstrap">
                    <i className="fa-brands  fa-bootstrap"></i>
                    <p>Bootstrap</p>
                </div>

                <div className="skill-card git">
                    <i className="fa-brands  fa-github"></i>
                    <p>GitHub</p>
                </div>

                <div className="skill-card VSCode">

                    <Image src={vscode.src} className="celery-icon" width={25} height={25} />
                    <p>VS Code</p>
                </div>

                <div className="skill-card linux">
                    <i className="fa-brands fa-linux"></i>
                    <p>Linux</p>
                </div>

                <div className="skill-card nginx">
                    <Image src={nginx.src} className="celery-icon" width={25} height={25} />
                    <p>Nginx</p>
                </div>

            </div>
        </div>
    )
}

export default Skills;