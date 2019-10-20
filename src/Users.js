import React from 'react';

import { Component } from 'react';


import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNewUserForm from './AddNewUserForm';

import { deleteUserAction } from './store'
import { deleteUserThunk } from './store'


//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW CLASS AND FORM////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////



class _Users extends Component {
  constructor() {
    super();

  this.state = {
    }
    this.deleteUser = this.deleteUser.bind(this);
  }

   async deleteUser(userId) {
    await this.props.delete(userId)
  }

  render() {

    const { deleteUser } = this;
    const { users } = this.props;

  return (
   <div>
      {users.length} Users coming soon...
      {users.map(user => <div key={user.id}> <br />
        Chef Name: {user.username} <br />
        Chef Score: {user.chefScore} <br />
        Profile Image: <br /> <img height="150" width="150" src={user.imageURL} />
        <Link to={`/users/${user.id}`}> Link to User</Link> <br /> <br /> <br />
        <button onClick={ () => deleteUser(user.id) }  className="delete-user"> X </button>
        Delete User Above <br /></div>)}
      <AddNewUserForm />
    </div>
  )
}



}


const mapStateToProps = ({ users, recipes }) => {
  return {
    users,
    recipes
  }
}

const mapToDispatch = {
  delete: deleteUserThunk
}


const Users = connect(mapStateToProps, mapToDispatch)(_Users)
export default Users;



