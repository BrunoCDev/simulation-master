import React, { Component } from "react";
class Create extends Component {
  render(props) {
    return (
      <div>
        <button onClick={this.props.create}>Create User</button>
      </div>
    );
  }
}

export default Create;
