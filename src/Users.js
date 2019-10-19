import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNewUserForm from './AddNewUserForm';

//////////////////////USERS CONNECTED COMPONENT////////////////////////////////////
const _Users = ({users}) => {
  return (
    <div>
      {users.length} Users coming soon...
      {users.map(user => <div key={user.id}> <br /> Chef Name: {user.username} <br /> Chef Score: {user.chefScore} <br /> Profile Image: <br /> <img height="150" width="150" src={user.imageURL} /> <Link to={`/users/${user.id}`}> Link to User</Link> <br /></div>)}
      <AddNewUserForm />
    </div>
  )
}

//USERS CONNECTED COMPONENT
/*
const Users = connect(({users}) => {
  return {
    users
  }
})(_Users);
*/


const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsersAction: () => {
      dispatch(setUsersThunk());
    }
  }
}

const Users = connect(mapStateToProps, mapDispatchToProps)(_Users)
export default Users;
