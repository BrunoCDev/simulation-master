import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import RenderUsers from "../../renderUsers";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/api/users`).then(res => {
      this.setState({ users: res.data });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Link to="/">Go back to Landing</Link>
        <RenderUsers users={users} />
      </div>
    );
  }
}

export default Home;
