import React, { Component } from 'react';
import { dld, deloitte, sunevision, albion } from '../images';

function Entry(props) {
    return (
        <div className="col s12 m12 l6">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" id="logoimg" src={props.img} alt="logo"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-">
                        {props.name}
                        <i className="material-icons right">more_vert</i>
                    </span>
                    <p className="biggerFont">{props.role} {props.date}</p>
                </div>
                <div className="card-reveal biggerFontp">
                    <span className="card-title grey-text text-darken-4">
                        {props.name}
                        <i className="material-icons right">close</i>
                    </span>
                    <p>{props.loc} - {props.date}</p>
                    <p>{props.role}</p>
                    <div className="biggerFontu">{props.detail}</div>
                    <p>Languages/Frameworks: <b>{props.tools}</b></p>
                </div>
            </div>
        </div>
    )
}

class Experience extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} id="experiences">
                <div className="container">
                    <div className="row experience-title">
                        <div className="col s12 m12 l12">
                            <h1>Experience</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row experience-grid">
                        <Entry
                            name="DLD Asset Management, LP"
                            role="Software Engineering Intern"
                            loc="New York, NY"
                            date="Summer 2019"
                            detail={
                                <ul>
                                    <li>● Built software tools to assist hedge fund portfolio managers in managing risk and achieving positive returns</li>
                                    <li>● Worked under experienced technology consultant to produce industry standard code with daily code reviews</li>
                                    <li>● Worked on full stack web application called converts that visualizes and analyzes financial instruments</li>
                                </ul>
                            }
                            tools="AWS, Flask, jQuery, PostgreSQL"
                            img={dld}
                            />
                        <Entry
                            name="Deloitte Touche Tohmatsu Ltd"
                            role="Advisory in Audit Intern"
                            loc="Hong Kong"
                            date="Summer 2018"
                            detail={
                                <ul>
                                    <li>● Used Python and VBA to automate review process of IT protocols and controls</li>
                                    <li>● Implemented scripts in ACL software to perform auditing and data analysis tasks</li>
                                </ul>
                            }
                            tools="ACL, Python, Excel VBA"
                            img={deloitte}
                            />
                    </div>
                    <div className="row experience-grid">
                        <Entry
                            name="SUNeVision Holdings Ltd"
                            role="Software Engineer Intern"
                            loc="Hong Kong"
                            date="Summer 2018"
                            detail={
                                <ul>
                                    <li>● Assisted in Oracle data migration with documentation of essential data center operations</li>
                                    <li>● Developed informational web applications using LAMP stack</li>
                                </ul>
                            }
                            tools="Linux, Apache, MySQL, PHP"
                            img={sunevision}
                            />
                        <Entry
                            name="Albion College Information Technology"
                            role="Programmer Analyst"
                            loc="Albion, MI"
                            date="Aug 2017 - May 2018"
                            detail={
                                <ul>
                                    <li>● Developed data reporting web applications using reporting enterprise software Argos</li>
                                    <li>● Implemented SQL queries to extract information from Oracle database</li>
                                </ul>
                            }
                            tools="SQL, Argos, DataGrip, Oracle"
                            img={albion}
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;
