import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { converts, panamx, wrr, guitar } from '../images';

function Entry(props) {
    return (
        <Cell col={4}>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" id="logoimg" src={props.img} alt="logo"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        {props.name}
                        <i className="material-icons right">more_vert</i>
                    </span>
                    <p>{props.desc}</p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        {props.name}
                        <i className="material-icons right">close</i>
                    </span>
                    <span>{props.loc} - {props.date}</span>
                    <p>{props.detail}</p>
                    <p>{props.role}</p>
                    <p>Languages/Frameworks: <b>{props.tools}</b></p>
                </div>
            </div>
        </Cell>
    )
}

class Projects extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} id="projects">
                <div className="project-title">
                    <h1>Projects</h1>
                    <hr/>
                </div>
                <Grid className="project-grid">
                    <Entry
                        name="Converts"
                        desc="Converts is a full stack web application that that visualizes and analyzes financial instruments."
                        loc="New York, NY"
                        date="Summer 2019"
                        detail="With Converts, a portfolio manager is able to analyze and visualize financial instruments, specifically convertible bonds. Convertibles can be searched and filtered by stock ticker, bank provider, and pricing type. Selected instruments are displayed on both in graph and table form to show price changes. X and Y axis indicates stock and bond price, while color depth indicates time. Converts also allows you to conviniently calculate delta neutrals and predicted PNL given user defined inputs. Finally, converts allows you to screen all existing bonds and sort on ones with high PNL. Daily cron job is executed to backup current database and cleanup old backups older than 10 days."
                        role="I worked on both frontend and backend of the project. I designed and implemented the schema of the database using PostgreSQL and ORM, constructed server using Python Flask, and frontend interface using jQuery/HTML/CSS. I used HighCharts JS library to create the visualizations. I worked with an experienced technology consultant who helped me set up AWS, import data to the database using DashHub, and regular code reviews."
                        tools="AWS, Flask, FlaskSQLAlchemy, jQuery, PostgreSQL, HTML/CSS, Bootstrap, Linux"
                        img={converts}
                        />
                    <Entry
                        name="PANAMX"
                        desc="A matrix manipulation language written in OCaml and LLVM."
                        loc="New York, NY"
                        date="Spring 2019"
                        detail="A matrix manipulation language developed as
                        a group project with 3 other students for COMS 4115 Programming Languages & Translators. PANAMX is an imperative, highly intuitive and user friendly programming language that is designed for matrix manipulation. PANAMX is implmeneted with a matrix data type that users can conveniently declare and initialize. Our group also implemented a rich library of build-in matrix operators and functions that can be easily used. The syntax of PANAMX is similar to that of C. For our final demonstration, our language was used to solve for x in common matrix equation Ax=B, find eigen values, construct a working perceptron, and OOP."
                        role="I was the project manager of this group, which means I was in charge of project planning and timely completion of deliverables. I used Slack, WeChat, and google calendars to make sure my team had effective communication and clear deadlines. I encouraged Agile methodology, by putting focus on trust, iterative development, maintaining working code in main branch, adapting to changing requirements, and failing fast/early. I helped maintain the github repo, scheduled meetings, plan project milestones, worked heavily on implmenting various build-in matrix operators and functions, and made key decisions on many design aspects of our language."
                        tools="OCaml, LLVM, C, Docker"
                        img={panamx}
                        />
                </Grid>
                <Grid className="project-grid">
                    <Entry
                        name="Linux WRR Scheduler"
                        desc="A weighted round-robin CPU scheduler for the Linux kernel."
                        loc="New York, NY"
                        date="Fall 2019"
                        detail="Group programming assignment with one other person for COMS 4118 Operating Systems. Implemented a linux kernel scheduler that supports weighted round-robin scheduling policy. The scheduler was set to default scheduler for init and all of its children. The scheduler assigns tasks to the CPU based on minimum total weight. The scheduler supports multi-core load balancing. Implemented system calls setWeight and getWeight that were used in test programs to assess correctness of scheduler. Test programs forked multiple processes with different weights that exited at different times to them to see if they correctly balance."
                        tools="C, Linux, VMWare"
                        img={wrr}
                        />
                    <Entry
                        name="LoopGuitar"
                        desc="A web app that allows you to create and save video loops on YouTube vidoes."
                        loc="New York, NY"
                        date="Spring 2019"
                        detail="Final project for COMS 4170 User Interface Design. Built a full stack web app that allows users to create and save video loops on YouTube videos. At the time, I was trying to learn fingerstyle guitar from watching YouTube, and I found it very tedious to have to click and drag progress bar everytime I wanted to practice a particular part I was stuck on. So I wanted to build a simple interface that allows me to create and save loops that I can play over and over again to practice. Users can search for existing YouTube tutorials, or add their own video. Data persists between from switching videos. Finally, a progress page was implemented that keeps track of time spent practicing for each song/video. This project focused heavily on iterative design, hence the report includes many prototypes and versions that lead up to the final product."
                        tools="jQuery, HTML/CSS, BootStrap, AJAX, Python, Flask"
                        img={guitar}
                        />
                </Grid>
            </div>
        )
    }
}

export default Projects;
