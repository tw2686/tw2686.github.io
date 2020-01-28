import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection } from 'react-mdl';
import Main from './components/main';
import Pdf from './docs/JWong_Resume_Spring2020.pdf';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">

                <Layout fixedHeader>
                    <Header className="header-color" title={<a href="#landing">James Wong</a>} waterfall>
                        <Navigation className="nav-style">
                            <a href="#about">About</a>
                            <a href={Pdf} rel="noopener noreferrer" target="_blank">Resume</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </Navigation>
                    </Header>
                    <Drawer className="drawer-color" title={<a href="#landing">James Wong</a>}>
                        <Navigation>
                            <a href="#about">About</a>
                            <a href={Pdf} rel="noopener noreferrer" target="_blank">Resume</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main></Main>
                        <Footer size="mini">
                            <FooterSection type="left" logo={<div>&copy; James Wong {new Date().getFullYear()}</div>}>
                            </FooterSection>
                        </Footer>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
