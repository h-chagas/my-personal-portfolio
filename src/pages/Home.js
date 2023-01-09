import GitHub from "@mui/icons-material/GitHub"
import LinkedIn from "@mui/icons-material/LinkedIn"
import MailIcon from "@mui/icons-material/Mail"
import "../styles/Home.css";


export const Home = () => {



    return (
        <div className="home">
            <section className="about">
                <h2>Hi! I'm Hugo Chagas
                </h2>
                    <div className="prompt">
                        <p>
                    and I am a Junior Full Stack Development. I am now working for UK Home Office and really loving it!
I am a person who seeks real-world experience in order to pursue my goals, offering strong interpersonal and task prioritisation skills. I can focus on my work and am capable of supporting others as needed. When I face a demanding situation, whatever it may be, I can analyse the context and make the best decision to tackle the issue. 
                        </p>
                        <LinkedIn />
                        <MailIcon />
                        <GitHub />
                     </div>
                
            </section>
            <section className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>React, HTML5, CSS3, Sass/SCSS</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>Node.js, JSON, Express, SQL, HTTP requests, Lodash</span>
                    </li>
                    <li className="item">
                        <h2>Testing</h2>
                        <span>Jest</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript (Functional and OOP / SOLID design principles)</span>
                    </li>
                    <li className="item">
                        <h2>Principles and Methods</h2>
                        <span>AGILE and TDD</span>
                    </li>
                    <li className="item">
                        <h2>Other technologies</h2>
                        <span>Git, GitHub, npm</span>
                    </li>
                </ol>
            </section>
        </div>
    )
}