import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} id="projects">
                <div className="projects-title">
                    <h1>Projects</h1>
                    <hr/>
                </div>
                <Grid className="projects-grid">
                    <Cell col={4}>
                        { /* Project 1 */ }
                        <Card shadow={0} style={{width: '80%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    <Cell col={4}>
                        { /* Project 2 */ }
                        <Card shadow={0} style={{width: '80%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        { /* Project 3 */ }
                        <Card shadow={0} style={{width: '80%', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;
