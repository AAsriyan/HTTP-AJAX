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
    id: "",
    isEditing: false
  };

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends").then(res => {
      this.setState({ friends: res.data });
    });
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEdit = e => {
    e.preventDefault();
    console.log(e);
    this.setState(prevState => {
      return this.setState({ isEditing: !prevState.isEditing });
    });
  };

  handleDelete = id => {
    // const unDeleted = this.state.friends.filter(friend => friend.id !== id);

    // this.setState({ friends: unDeleted });

    axios.delete(`http://localhost:5000/friends/${id}`).then(res => {
      this.setState({ friends: res.data });
    });
  };

  addFriend = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => {
        this.setState({ friends: res.data });
      });
  };

  render() {
    return (
      <div className="App">
        <FriendsList
          friends={this.state.friends}
          isEditing={this.state.isEditing}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
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
