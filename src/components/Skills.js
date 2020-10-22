import React from 'react'
import ProgressBar from 'react-customizable-progressbar'
import { skills } from './skill-data'
import { SiKubernetes, SiGo, SiRails, SiMongodb } from "react-icons/si";
import { FaReact, FaJs, FaPython, FaNodeJs, FaEmber, FaHtml5, FaCss3Alt, FaJava, FaDocker, FaDatabase, } from "react-icons/fa";


const Skills = () => {
    const components = {
        React: FaReact,
        Js: FaJs,
        Python: FaPython,
        NodeJs: FaNodeJs,
        Ember: FaEmber,
        Html5: FaHtml5,
        Css3: FaCss3Alt,
        Java: FaJava,
        Docker: FaDocker,
        Database: FaDatabase,
        Go: SiGo,
        Mongodb: SiMongodb,
        Ror: SiRails,
        Kubernetes: SiKubernetes
    };

    return (
        <section className='intro-2' id="skills">
            <div className="sep-txt text-center pt-4 text-white">
                <span>Skills</span>
            </div>
            <div className="item skill-container">
                {
                    skills.map(({ name, score, icon }) => {
                        const TagName = components[icon];
                        return (
                            <div key={name}>
                                <ProgressBar
                                    radius={100}
                                    progress={score}
                                    strokeWidth={15}
                                    strokeColor="#f5a25d"
                                    strokeLinecap="round"
                                    trackStrokeWidth={10}
                                    counterClockwise
                                >
                                    <div className="indicator">
                                        <div className="tech-icons"><TagName /></div>
                                        <div>{name}</div>
                                    </div>
                                </ProgressBar>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills
