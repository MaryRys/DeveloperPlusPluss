import React from 'react';
import PropTypes from 'prop-types';

import './UserProfile.scss';

class UserProfile extends React.Component {
static propTypes ={
  profile: PropTypes.object,
}

render() {
  const { profile } = this.props;
  return (
      <div className="userProfile col text-center">
        <h2>{profile.name}</h2>
        <img src={profile.avatar_url} alt="userImage" width="200px"></img>
        <h4>{profile.login}</h4>
        <p>{profile.bio}</p>
        <p>{profile.html_url}</p>
        <p># Commits Since...</p>
      </div>
  );
}
}

export default UserProfile;
