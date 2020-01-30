import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div id="about" style={{width: '100%', margin: 'auto'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <h1>About</h1>
                        <hr/>
                        <div className="about-content">
                            <p>
                                Hi, my name is James. I am currently studying at Columbia University, NY for my B.S. I am majoring in Computer Science with focuses on artifical intelligence and software systems. I also have a B.A degree from Albion College, MI in Engineering Physics, and minor in Applied Mathematics.
                            </p>
                            <p>
                                Most recently, I interned at DLD Asset Management, LP, a hedge fund at New York. I developed full stack web applications to help portfolio managers visualize data and manage risk. Previously, I've interned at Deloitte, SUNeVision Holdings, a big data center company, and the IT department at Albion College.
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;
