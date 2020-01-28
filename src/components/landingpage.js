import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} id="landing">
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <div className="banner-text">
                            <h1>James Wong</h1>
                            <hr/>
                            <p>BS Computer Science, Columbia University, Class of 2020</p>
                            <Grid className="social-links">
                                <Cell col={4}>
                                    {/* Email */}
                                    <a href={"mailto: tw2686@columbia.edu"} rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-envelope-square" aria-hidden="true"></i>
                                    </a>
                                </Cell>
                                <Cell col={4}>
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/in/jameswong912/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                </Cell>
                                <Cell col={4}>
                                    {/* Github */}
                                    <a href="https://github.com/tw2686" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true"></i>
                                    </a>
                                </Cell>
                            </Grid>

                            {/*<div className="landing-buttons">
                                <Button id="resume-button" href={Pdf} rel="noopener noreferrer" target="_blank">Resume</Button>
                                <Button id="resume-button" href="#projects">Projects</Button>
                                </div>*/}

                            </div>

                        </Cell>
                    </Grid>
                </div>
            )
        }
    }

    export default Landing;
