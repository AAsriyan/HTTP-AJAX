import React from "react";
import FriendButtons from "./FriendButtons";

const Friend = props => {
  {
    if (props.isEditing) {
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
          <FriendButtons
            friend={props.friend}
            isEditing={props.isEditing}
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete}
          />
        </form>
      );
    } else {
      return (
        <div className="friend-card">
          <h2>Name: {props.friend.name}</h2>
          <p>Age: {props.friend.age}</p>
          <p>Email: {props.friend.email}</p>
          <FriendButtons
            friend={props.friend}
            isEditing={props.isEditing}
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete}
          />
        </div>
      );
    }
  }
};

export default Friend;
