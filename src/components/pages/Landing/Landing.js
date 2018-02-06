import React, { Component } from "react";
import "./Landing.css";
import axios from "axios";
import Create from "../../create";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      min: null,
      max: null
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3005/api/users/min").then(res => {
      this.setState({ min: res.data.min });
    });
    axios.get("http://localhost:3005/api/users/max").then(res => {
      this.setState({ max: res.data.max });
    });
  }

  handleEmail(val) {
    this.setState({ email: val });
  }

  handlePassword(val) {
    this.setState({ password: val });
  }

  handleCreate() {
    const { email, password } = this.state;
    axios
      .post("http://localhost:3005/api/users/create", { email, password })
      .then(() => this.props.history.push("/home"))
      .catch(console.log);
  }

  render() {
    const { min, max } = this.state;
    return (
      <div>
        <p>Email</p>
        <input onChange={e => this.handleEmail(e.target.value)} />
        <p>Password</p>
        <input onChange={e => this.handlePassword(e.target.value)} />
        <Create create={this.handleCreate} />
        <Link to="/home">Go to Home</Link>
        <p>Lowest ID:</p>
        <p>{min}</p>
        <p>Highest ID:</p>
        <p>{max}</p>
      </div>
    );
  }
}

export default Landing;
