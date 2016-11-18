import React, {Component} from 'react';
import {Link} from 'react-router';

class UserList extends Component {
	handleClick = (e) => {
		console.log('this is:', this, '\n e', e.nativeEvent);
	};

	render() {
		return (
			<ul>
				{this.props.users.map((user) => {
					return (
						<li key={user.id}>
							<Link to={`user/${user.id}`}>{user.name}</Link>
							| <span onClick={this.handleClick}> CLICK </span>
							{/*= <Link to={`profile/${user.id}`}>Profile</Link>*/}
						</li>
					);
				})}
			</ul>
		);
	}
}

export default UserList;
