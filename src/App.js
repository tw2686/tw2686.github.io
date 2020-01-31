import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import resume from './docs/JWong_Resume_Spring20.pdf';

class App extends Component {
    render() {
        return (
            <div id="#top">
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <a className="brand-logo" href="#top">James</a>
                            <a href="/#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down nav-font">
                                <li><a href="#about">About</a></li>
                                <li><a href={resume} rel="noopener noreferrer" target="_blank">Resume</a></li>
                                <li><a href="#experiences">Experience</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href={resume} rel="noopener noreferrer" target="_blank">Resume</a></li>
                    <li><a href="#experiences">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div>
                    <Main></Main>

                    <footer className="page-footer">
                        <div className="container center">
                            © James Wong {new Date().getFullYear()}
                        </div>
                    </footer>
                </div>
            </div>

        );
    }
}

export default App;
