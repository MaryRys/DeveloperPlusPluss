import React from 'react';

import './UserProfile.scss';

class UserProfile extends React.Component {
  render() {
    return (
      <div className="userProfile col text-center">
        <h2>User</h2>
        <img src="https://i.imgur.com/3QZpu6w.jpg" alt="userImage"></img>
        <h4>Username</h4>
        <p>This is my bio</p>
        <p>www.github.com</p>
      </div>
    );
  }
}

export default UserProfile;
