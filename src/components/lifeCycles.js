import React, { Component } from "react";

// BELOW IS THE ORDER OF THE REACT COMPONENT LIFE CYCLE

class LifeCycles extends Component {
  // FIRST (CONSTRUCTOR)
  constructor() {
    super();
  }

  // COMPONENT METHODS ARE OPTIONAL BUT THEY ARE PART OF THE LIFE CYCLE HOOKS
  // I WILL PUT HERE SOME EXAMPLES OF THOSE METHODS BUT NOT ALL OF THEM

  componentWillMount() {
    // SECOND
  }

  componentDidMount() {
    // FOURTH
  }

  // THIRD (RENDER())
  render() {
    return <div />;
  }
}

export default LifeCycles;
