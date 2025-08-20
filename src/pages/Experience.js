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
                    date="Apr/25 - present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Developer
                        </h3>
                        <h4>Home Office UK</h4>
                </VerticalTimelineElement>



                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jun/24 - Apr/25"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Associate Software Developer
                        </h3>
                        <h4>Home Office UK</h4>
                </VerticalTimelineElement>



                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jan/23 - Jun/24"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Software Developer Apprentice
                        </h3>
                        <h4>Home Office UK</h4>
                </VerticalTimelineElement>



                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jan/23 - Jun/24"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Software Development
                        </h3>
                        <h4>Institute for Apprenticeships & Technical Education - HM Government (QA limited)</h4>
                        <h5>Level 4 - HNC</h5>
                </VerticalTimelineElement>



                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jul/22 - Jan/23"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Student
                        </h3>
                        <h4>Northcoders Bootcamp</h4>
                        <h5>Manchester</h5>
                        <p>I learned full-stack software development as a student of their 13-week highly regarded national coding Bootcamp. Followed a practical, industry-led curriculum. Best practices taught throughout, including version control with git, TDD, and pair programming
    </p>
                </VerticalTimelineElement>



                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Abr/22 - Apr/23"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        >  Student
                        </h3>
                        <h4>Rocketseat | Coding platform</h4>
                        <p>Rocketseat is an online interactive platform that offers coding classes, especially teaching React. This application was built in a bootcamp called Next Level Week, when I managed to build a software to get feedback from users, following tutor and course instructions, using React, TypeScript, Tailwind CSS, and NodeJS.
    This is a widget to collect feedback from users. Front-end and back-end.

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
                        > English Functional Skills
                        </h3>
                        <h4>Rochdale Training | Pearson Edexcel</h4>
                        <h5>Level 2</h5>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jan-Jun/2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Web development | Freelancer   
                        </h3>
                        <h4>New Pioneers Project</h4>
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
                    date="Jan-May/22"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Maths
                        </h3>
                        <h4>NARIC</h4>
                        <h5>Comparable with GCSE C/4</h5>
                    </VerticalTimelineElement>



                     <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jan-Dec/2021"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Student  
                        </h3>
                        <h4>Codecademy | Full-stack online platform</h4>
                        <p>
                            I had a chance to have my first contact with coding using this platform. Basics in HTML, CSS and JavaScript.
                        </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jun/20 - Dec/21"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Web development | Freelancer
                        </h3>
                        <h4>Milena Massage Therapist</h4>
                        <h5>Rochdale</h5>
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
                    date="Jan/19 - Dec/20"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Student
                        </h3>
                        <h4>DevMedia | Full-stack online platform</h4>
                        <p>
                            Basics in HTML, CSS and JavaScript.
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
                        > Stock Clerk    
                        </h3>
                        <h4>XPO Logistics Inc.</h4>
                        <h5>Manchester</h5>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Set/17 - Set/18"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Services Operator     
                        </h3>
                        <h4>DSS Direct Services Solutions</h4>
                        <h5>Manchester</h5>
                    </VerticalTimelineElement>




                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2016-2017"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Civil Procedural Law
                        </h3>
                        <h4>Estacio de Sa University</h4>
                        <h5>Postgraduate Diploma / RQF level 7</h5>
                    </VerticalTimelineElement>




                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2016-2017"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Employment Law and Process
                        </h3>
                        <h4>Estacio de Sa University</h4>
                        <h5>Postgraduate Diploma / RQF level 7</h5>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Nov/15 - Aug/17"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Leader Assistant
                        </h3>
                        <h4>Noonan Services</h4>
                        <h5>London</h5>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jan/12 - Dec/14"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Lawyer
                        </h3>
                        <h4>Costa Lawyers and Co.</h4>
                        <h5>Joinville-SC / Brazil</h5>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jan/07 - Dec/11"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Lawyer Assistant
                        </h3>
                        <h4>Schettert Lawyers</h4>
                        <h5>Joinville-SC / Brazil</h5>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2007-2012"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Law (degree) 
                        </h3>
                        <h4>Faculdade Guilherme Guimbala (Brazil)</h4>
                        <h5>Bachelor's degree / RQF level 6</h5>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Jun-Dec/06"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Broker Assistant
                        </h3>
                        <h4>Cassiano Brokers Inc.</h4>
                        <h3>Joinville-SC / Brazil</h3>
                    </VerticalTimelineElement>


        
                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2003-2005"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                    >
                        <h3 
                        className="vertical-timeline-element-title"
                        > Upper Secondary Education 
                        </h3>
                        <h4>Adventist High School</h4>
                        <h5>GCE Advanced Subsidiary (AS) level / RQF level 3</h5>
                    </VerticalTimelineElement>



                </VerticalTimeline>
            </article>
        )
    }