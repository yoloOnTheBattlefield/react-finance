import React from 'react';
import { Link } from 'react-router';
import { Grid, Jumbotron, Button } from 'react-bootstrap';

const Landing = () => {
  return (
    <Grid id='Landing' className='container-fluid'>
      <Jumbotron id='landing-jumbotron'>
        <h1>yoloOnTheBattlefield starter kit</h1>
        <h6>A simple finance app</h6>
        <Button className='nav-btn'>
          <Link className='link' to='what-is-a-rainy-day-fund' >Okay I Get It - show me the stuff</Link>
        </Button>
      </Jumbotron>
    </Grid>
  )
}

export default Landing;
