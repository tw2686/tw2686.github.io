import React, { Component } from 'react';
// import { backgroundPic } from '../images';

class Home extends Component {
    render() {
        return (
            <section className="home-grid scrollspy valign-wrapper" id="home">
                {/* style={{background: `url(${backgroundPic}) center / cover`}} */}
                <div className="container home-container">
                    <div className="row">
                        <div className="col s12">
                            <div className="banner-text">
                                <h1>James Wong</h1>
                                <hr/>
                                <p>BS Computer Science, Columbia University, Class of 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className="row social-links">
                        <div className="col s12 m12 l4">
                            {/* Email */}
                            <a href={"mailto: tw2686@columbia.edu"} rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope-square" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="col s12 m12 l4">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jwong912/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="col s12 m12 l4">
                            {/* Github */}
                            <a href="https://github.com/tw2686" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;
