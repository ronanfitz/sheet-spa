import React, { Component } from 'react';
import { connect } from 'react-redux';


class Cell extends Component {
  render() {
    return (
      <div />
    );
  }
}


const mapStateToProps = (state) => {
  const cell = state.sheet.values;
  return {
    cell,
  };
};

export default connect(
  mapStateToProps,
)(Cell);