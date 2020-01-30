import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto', background: '#E8DBD1'}}>
                <Grid className="contact-title" id="contact">
                    <Cell col={12}>
                        <h1>Contact</h1>
                        <hr/>
                    </Cell>
                </Grid>
                <Grid className="contact-grid">
                    <Cell col={4}>
                        {/* Email */}
                        <a href={"mailto: tw2686@columbia.edu"} rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-envelope-square" aria-hidden="true"></i>
                        </a>
                        <p>tw2686@columbia.edu</p>
                    </Cell>
                    <Cell col={4}>
                        {/* Phone */}
                        <div>
                            <i className="fa fa-phone-square" aria-hidden="true"></i>
                        </div>
                        <p>(734) 623-3650</p>
                    </Cell>
                    <Cell col={4}>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/jameswong912/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        <p>LinkedIn://jameswong912</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
