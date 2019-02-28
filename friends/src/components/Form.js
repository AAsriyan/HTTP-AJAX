import React from "react";
import { Route, Link } from "react-router-dom";

const Form = props => {
  return (
    <form onSubmit={props.addFriend}>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={props.name}
        onChange={props.handleChanges}
        //autoComplete="off"
        required
      />
      <input
        type="number"
        placeholder="Enter Age"
        name="age"
        value={props.age}
        onChange={props.handleChanges}
        //autoComplete="off"
        required
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={props.email}
        onChange={props.handleChanges}
        //autoComplete="off"
        required
      />
      <Link to="/friends-list">
        <button type="submit">Submit</button>
      </Link>
      <Route path="/friends-list" />
    </form>
  );
};

export default Form;
