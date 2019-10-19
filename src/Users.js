import React from 'react';

import { Component } from 'react';


import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNewUserForm from './AddNewUserForm';

import { deleteUserAction } from './store'
import { deleteUserThunk } from './store'

//////////////////////USERS CONNECTED COMPONENT////////////////////////////////////

/*
const _Users = ({users}) => {
  return (
    <div>
      {users.length} Users coming soon...
      {users.map(user => <div key={user.id}> <br /> Chef Name: {user.username} <br /> Chef Score: {user.chefScore} <br /> Profile Image: <br /> <img height="150" width="150" src={user.imageURL} /> <Link to={`/users/${user.id}`}> Link to User</Link> <br /> <br /> <br /> <button onClick={ () => deleteUser(user.id) }  classname="delete-user"> X </button> Delete User Above <br /></div>)}
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

/*
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





/*



import React from 'react';

import { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNewRecipeForm from './AddNewRecipeForm';

import {deleteUserAction} from './store'
import { deleteUserThunk } from './store'






//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW RECIPE SECTION////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW CLASS AND FORM////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//CREATING THE ADD NEW USER AS A CLASS

*/

class _Users extends Component {
  constructor() {
    super();

  this.state = {
    }
    this.deleteUser = this.deleteUser.bind(this);
  }

   async deleteUser(userId) {
     console.log("USER IN DELETE USER======", userId)
    await this.props.delete(userId)
  }

  render() {
    console.log("PROPS IN RENDER USERS======", this.props)
    const { deleteUser } = this;
    const { users } = this.props;

    //const chefsTest = recipes.filter(recipe => recipe.user)


  console.log("USERS =======", users)
  //console.log("RECIPES WITH CHEF =======", chefsTest)
  console.log("PROPS ======", this.props)
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



