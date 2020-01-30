import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: '0', background: '#E8DBD1'}} id="contact">
                <Grid>
                    <Cell col={12}>
                        <div className="contact-title" >
                            <h1>Contact</h1>
                            <hr/>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div className="row contact-grid">
                            <div className="col s12 m12 l4">
                                {/* Email */}
                                <a href={"mailto: tw2686@columbia.edu"} rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope-square" aria-hidden="true"></i>
                                </a>
                                <p>tw2686@columbia.edu</p>
                            </div>
                            <div className="col s12 m12 l4">
                                {/* Phone */}
                                <div>
                                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                                </div>
                                <p>(734) 623-3650</p>
                            </div>
                            <div className="col s12 m12 l4">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/jameswong912/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <p>LinkedIn://jameswong912</p>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
