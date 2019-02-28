import React, { Component } from "react";
import FriendButtons from "./FriendButtons";

export class Friend extends Component {
  state = {
    isEditing: false
  };

  handleEdit = e => {
    e.preventDefault();

    this.state.isEditing
      ? this.setState({ isEditing: false })
      : this.setState({ isEditing: true });
  };

  reset = () => {
    this.state.isEditing
      ? this.setState({ isEditing: false })
      : this.setState({ isEditing: true });
  };

  render() {
    {
      if (this.state.isEditing) {
        return (
          <form onSubmit={this.props.updateFriend}>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={this.props.name}
              onChange={this.props.handleChanges}
            />
            <input
              type="text"
              placeholder="Enter Age"
              name="age"
              value={this.props.age}
              onChange={this.props.handleChanges}
            />
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={this.props.email}
              onChange={this.props.handleChanges}
            />
            <FriendButtons
              friend={this.props.friend}
              isEditing={this.state.isEditing}
              handleEdit={this.props.handleEdit}
              handleDelete={this.props.handleDelete}
              updateFriend={this.props.updateFriend}
              reset={this.reset}
            />
          </form>
        );
      } else {
        return (
          <div className="friend-card">
            <h2>Name: {this.props.friend.name}</h2>
            <p>Age: {this.props.friend.age}</p>
            <p>Email: {this.props.friend.email}</p>
            <FriendButtons
              friend={this.props.friend}
              isEditing={this.state.isEditing}
              handleEdit={this.handleEdit}
              handleDelete={this.props.handleDelete}
              updateFriend={this.updateFriend}
            />
          </div>
        );
      }
    }
  }
}

export default Friend;

// const Friend = props => {
//   {
//     if (props.isEditing) {
//       return (
//         <form onSubmit={props.addFriend}>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             name="name"
//             value={props.name}
//             onChange={props.handleChanges}
//           />
//           <input
//             type="text"
//             placeholder="Enter Age"
//             name="age"
//             value={props.age}
//             onChange={props.handleChanges}
//           />
//           <input
//             type="text"
//             placeholder="Enter Email"
//             name="email"
//             value={props.email}
//             onChange={props.handleChanges}
//           />
//           <FriendButtons
//             friend={props.friend}
//             isEditing={props.isEditing}
//             handleEdit={props.handleEdit}
//             handleDelete={props.handleDelete}
//           />
//         </form>
//       );
//     } else {
//       return (
//         <div className="friend-card">
//           <h2>Name: {props.friend.name}</h2>
//           <p>Age: {props.friend.age}</p>
//           <p>Email: {props.friend.email}</p>
//           <FriendButtons
//             friend={props.friend}
//             isEditing={props.isEditing}
//             handleEdit={props.handleEdit}
//             handleDelete={props.handleDelete}
//           />
//         </div>
//       );
//     }
//   }
// };

// export default Friend;
