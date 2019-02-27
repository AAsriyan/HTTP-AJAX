import React from "react";

const FriendButtons = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.handleDelete(props.friend.id)}>
        Delete
      </button>
      <button onClick={props.handleEdit}>Update</button>
    </div>
  );
};

export default FriendButtons;
