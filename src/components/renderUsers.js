import React, { Component } from "react";
import axios from "axios";

class RenderUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      users: []
    };

    this.deleteUser = this.deleteUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.setState({ users: this.props.users });
  }

  componentWillReceiveProps(nextProps) {
    const { users } = this.state;
    if (users !== nextProps.users) this.setState({ users: nextProps.users });
  }

  deleteUser(id) {
    axios
      .delete("http://localhost:3005/api/users/delete", { data: { id } })
      .then(res => {
        this.setState({ users: res.data });
      });
  }

  updateUser(id) {
    axios.put("http://localhost:3005/api/users/update", { id }).then(res => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.users.map((el, i) => (
          <div key={el.id} style={{ marginTop: 50 }}>
            <p>{el.id}</p>
            <p>{el.email}</p>
            <p>{el.password}</p>
            <button onClick={() => this.deleteUser(el.id)}>Delete</button>
            <button onClick={() => this.updateUser(el.id)}>
              Make User Anonymous
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default RenderUsers;
