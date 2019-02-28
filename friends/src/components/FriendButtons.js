import React from "react";

const FriendButtons = props => {
  return (
    <div>
      <button onClick={e => props.handleDelete(e, props.friend.id)}>
        Delete
      </button>
      {!props.isEditing ? (
        <button onClick={props.handleEdit}>Update</button>
      ) : (
        <button onClick={e => props.updateFriend(e, props.friend.id)}>
          Submit
        </button>
      )}
    </div>
  );
};

export default FriendButtons;
