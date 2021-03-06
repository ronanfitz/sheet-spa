import React from 'react';
import { connect } from 'react-redux';
import { Segment, Container } from 'semantic-ui-react';
import Spreadsheet from './Components/Spreadsheet/Spreadsheet';

const App = () => (
  <div className="App">
    <Container>
      <Segment>
        <Spreadsheet />
      </Segment>
    </Container>
  </div>
);

export default connect(mapStateToProps)(App);
