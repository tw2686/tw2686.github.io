import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';

function Entry(props) {
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

class Experience extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} id="experiences">
                <div className="experience-title">
                    <h1>Experience</h1>
                    <hr/>
                </div>
                <Grid className="experience-grid">
                        <Entry/>
                </Grid>
            </div>
        )
    }
}

export default Experience;
