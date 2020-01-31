import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="contact-title" >
                                <h1>Contact</h1>
                                <hr/>
                            </div>
                        </div>
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
                                <a href="https://www.linkedin.com/in/jwong912/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <p>LinkedIn://jwong912</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;
