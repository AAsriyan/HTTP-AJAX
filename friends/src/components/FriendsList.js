import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          handleDelete={props.handleDelete}
          handleEdit={props.handleEdit}
          isEditing={props.isEditing}
        />
      ))}
    </div>
  );
};

export default FriendsList;
