import React from 'react';
import { Grid, Row } from 'react-bootstrap';

const App = ({children}) => {
  return(
    <Grid id='App'>
      <Row>
        {children}
      </Row>
    </Grid>
  )
}

export default App;
