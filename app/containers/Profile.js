import React, { Component } from 'react';

class Profile extends Component {

  componentDidMount() {
    console.log('Profile', this.props.params);
  }

  render() {
    return (
      <div>
        Profile
      </div>
    );
  }
}


export default Profile;
