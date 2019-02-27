import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.addFriend}>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={props.name}
        onChange={props.handleChanges}
      />
      <input
        type="text"
        placeholder="Enter Age"
        name="age"
        value={props.age}
        onChange={props.handleChanges}
      />
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        value={props.email}
        onChange={props.handleChanges}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
