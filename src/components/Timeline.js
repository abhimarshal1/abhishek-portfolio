import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap, FaCity, FaStar } from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';
import { experience } from './exp-data'

const Timeline = () => {
    return (
        <section id="workexperience">
            <div className="sep-txt text-center pt-4 pb-5">
                <span>Experience</span>
            </div>
            <VerticalTimeline>
                {
                    experience.map(({ type, duration, organization, role, team, details, location, active }) => {
                        return (

                            <VerticalTimelineElement key={duration}
                                className={active ? `vertical-timeline-element--${type} active` : `vertical-timeline-element--${type}`}
                                contentStyle={active ? { background: '#C33764', color: '#fff' } : {}}
                                contentArrowStyle={active ? { borderRight: '7px solid  #C33764' } : {}}
                                date={duration}
                                iconStyle={{ background: '#1D2671', color: '#fff' }}
                                icon={type === 'work' ? <FaCity /> : <FaGraduationCap />}
                            >
                                <h3 className="vertical-timeline-element-title timeline-title">{role}</h3>
                                <h4 className="vertical-timeline-element-subtitle timeline-subtitle">{organization}</h4>
                                <h5 className="vertical-timeline-element-subtitle timeline-subtitle-2">{`${team}, ${location}`}</h5>
                                <ul className="pt-3 summary-content">
                                    {details.map((task, index) => {
                                        return (<li key={index} dangerouslySetInnerHTML={{
                                            __html: task
                                        }}></li>);
                                    })}
                                </ul>

                            </VerticalTimelineElement>);
                    })
                }
                <VerticalTimelineElement
                    iconStyle={{ background: '#1D2671', color: '#fff' }}
                    icon={<FaStar />}
                />
            </VerticalTimeline>
        </section>
    )
}

export default Timeline
