import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';

function Project(props) {
    return (
        <Cell col={4}>
            <Card shadow={0} style={{width: '80%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: `url(${props.img}) center / cover`}}>
                    {props.name}
                </CardTitle>
                <CardText>
                    {props.desc}
                </CardText>
                <CardActions border>
                    <Button href={props.github} colored>GitHub</Button>
                    <Button href={props.demo} colored>Demo</Button>
                </CardActions>
            </Card>
        </Cell>
    )
}

class Projects extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} id="projects">
                <div className="projects-title">
                    <h1>Projects</h1>
                    <hr/>
                </div>
                <Grid className="projects-grid">
                    <Project
                        name="Project 1"
                        desc="fat"
                        img="http://www.getmdl.io/assets/demos/welcome_card.jpg"
                        github="/"
                        demo="/"
                    />
                    <Project
                        name="Project 2"
                        desc="fat"
                        img="https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg"
                        github="/"
                        demo="/"
                    />
                    <Project
                        name="Project 3"
                        desc="fat"
                        img="http://www.getmdl.io/assets/demos/welcome_card.jpg"
                        github="/"
                        demo="/"
                    />
                </Grid>
            </div>
        )
    }
}

export default Projects;
