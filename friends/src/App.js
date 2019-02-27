import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList";
import Form from "./components/Form";
import uuidv4 from "uuidv4";

class App extends Component {
  state = {
    friends: [],
    name: "",
    age: "",
    email: "",
    id: ""
  };

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends").then(res => {
      this.setState({ friends: res.data });
    });
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();

    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      id: uuidv4()
    };

    this.setState({
      friends: [...this.state.friends, newFriend],
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
        <Form
          friends={this.state.friends}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleChanges={this.handleChanges}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

export default App;
