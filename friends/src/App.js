import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/FriendsList";
import Friend from "./components/Friend";
import Form from "./components/Form";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  state = {
    friends: [],
    name: "",
    age: "",
    email: ""
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = (e, id) => {
    e.preventDefault();

    axios.delete(`http://localhost:5000/friends/${id}`).then(res => {
      this.setState({ friends: res.data });
    });
  };

  addFriend = e => {
    e.preventDefault();

    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/friends-list");
      })
      .catch(err => console.log(err));
  };

  updateFriend = (e, id, edit) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/friends/${id}`, {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age
      })
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/friends-list");
      });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Lambda's Friends</h1>
          <div>
            <NavLink to="/friends-form">{`${
              this.state.activeItem ? "Update" : "Add"
            } Friend`}</NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/friends-list">Friends</NavLink>
          </div>
        </nav>

        <Route
          path="/friends-list"
          exact
          render={props => (
            <FriendsList
              {...props}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
              friends={this.state.friends}
              handleChanges={this.handleChanges}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              updateFriend={this.updateFriend}
            />
          )}
        />
        <Route
          path="/friends-list/:id"
          render={props => (
            <Friend
              {...props}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
              handleChanges={this.handleChanges}
              friends={this.state.friends}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              updateFriend={this.updateFriend}
            />
          )}
        />
        <Route
          path="/friends-form"
          render={props => (
            <Form
              {...props}
              friends={this.state.friends}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
              handleChanges={this.handleChanges}
              addFriend={this.addFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
