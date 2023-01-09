import { 
    VerticalTimeline,
    VerticalTimelineElement,
 } from "react-vertical-timeline-component";
 import "react-vertical-timeline-component/style.min.css";
 import SchoolIcon from "@material-ui/icons/School";
 import WorkIcon from '@mui/icons-material/Work';
 import "../styles/Experience.css"



export const Experience = () => {

    return (
        <article className="experience">
            <VerticalTimeline lineColor="#3e497a">

            <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Jan-2023 - present"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Software Developer
                    </h3>
                    <h4>Home Office UK</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Jul-Oct/2022"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Coding Bootcamp Student 
                    </h3>
                    <h4>Manchester | United Kingdom</h4>
                    <p>I learned full-stack software development as a student of their 13-week highly regarded national coding Bootcamp. Followed a practical, industry-led curriculum. Best practices taught throughout, including version control with git, TDD, and pair programming
</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="May-Dec/2022"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Rocketseat | Coding platform  
                    </h3>
                    <h4>Brazil (Remote)</h4>
                    <p>Rocketseat is an online interactive platform that offers coding classes, especially teaching React. This application was built in a bootcamp called Next Level Week, when I managed to build a software to get feedback from users, following tutor and course instructions, using React, TypeScript, Tailwind CSS, and NodeJS.
This is a widget to collect feedback from users. Front-end and back-end.

</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Jan-Jun/2022"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Web development | New Pioneers Project   
                    </h3>
                    <h4>Freelancer - Rochdale</h4>
                    <p>Web application development coordinator for the New Pioneers Project as freelancer. As my official tech job in the industry for a company, this project helped me to feel confident using basic software development tools such as HTML5, CSS3 and JavaScript. To give the best designed chosen by the Project manager, I also learned few design tools, e.g., Figma, GIMP and colour pallet. 
                    </p>
                    <p>
                    Know the project <a
                    href="https://newpioneersproject.co.uk/" 
                    style={{textDecoration: "none", color: "inherit"}}
                    target="_blank"
                    rel="noreferrer"
                    >clicking here
                    </a>!
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Feb-May/2022"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > English at Level 2
                    </h3>
                    <h4>Pearson Edexcel Functional Skills</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Jan/22"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > GCSE Maths equivalency (A-C/9-4)
                    </h3>
                    <h4>UK ENIC (UK Department of Education)</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Aug-Dec/2021"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Web development | Milena Massage Therapist   
                    </h3>
                    <h4>Freelancer - Rochdale</h4>
                    <p>I had a chance to build a simple portfolio for my wife, using HTML5, CSS3 and JavaScript. She is becoming a Sports Massage Therapist and this application will help her to reach and communicate with her clients.
                    </p>
                    <p>
                    Know the project <a
                    href="http://milenamassagetherapy.co.uk/" 
                    style={{textDecoration: "none", color: "inherit"}}
                    target="_blank"
                    rel="noreferrer"
                    >clicking here
                    </a>!
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Jan-Dec/2021"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Codecademy | Full-stack online platform  
                    </h3>
                    <h4>Remote</h4>
                    <p>
                        I had a chance to have my first contact with coding using this platform. Basics in HTML, CSS and JavaScript.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Oct/18 - Jul/22"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Stock Clerk | XPO Logistics Inc.    
                    </h3>
                    <h4>On-site, Manchester</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Set/17 - Set/18"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Services Operator | DSS Direct Services Solutions     
                    </h3>
                    <h4>On-site, Manchester</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Nov/15 - Aug/17"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Leader Assistant | Noonan Services
                    </h3>
                    <h4>On-site, London</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Jan/2012 - Dec/2014"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Lawyer Assistant | Costa Lawyers and Co.
                    </h3>
                    <h4>On-site, Joinville-SC / Brazil</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Set/2006 - Dec/2011"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Lawyer Assistant | Schettert Lawyers
                    </h3>
                    <h4>On-site, Joinville-SC / Brazil</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="Jan-Ago/2006"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Broker Assistant | Cassiano Brokers Inc.
                    </h3>
                    <h4>On-site, Joinville-SC / Brazil</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2007-2012"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Law
                    </h3>
                    <h4>Joinville-SC / Brazil</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2003-2005"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                    <h3 
                    className="vertical-timeline-element-title"
                    > Adventist High School - Santo Amaro
                    </h3>
                    <h4>Sao Paulo-SP/ Brazil</h4>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </article>
    )
}