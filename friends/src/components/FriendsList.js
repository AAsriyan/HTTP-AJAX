import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          name={props.name}
          age={props.age}
          email={props.email}
          handleDelete={props.handleDelete}
          updateFriend={props.updateFriend}
          handleChanges={props.handleChanges}
        />
      ))}
    </div>
  );
};

export default FriendsList;
