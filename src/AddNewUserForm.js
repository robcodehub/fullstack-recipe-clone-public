import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addUserThunk } from './store'

//====================WRITE A ROUTE TO ADD A NEW USER===========================
//================================ADD RECIPE======================================
//================================================================================



class _AddNewUserForm extends Component {
  constructor() {
    super();

  this.state = {
    username: "",
    email: "",
    chefscore: "",
    imageURL: ""
    }
    this.createNewUser = this.createNewUser.bind(this);
    this.onChangeSetState = this.onChangeSetState.bind(this);
  }

  onChangeSetState(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }


   createNewUser(ev) {
    ev.preventDefault()
      this.props.create(this.state);
  }


  render() {
    console.log("PROPS IN RENDER======", this.props)
    const { username, email, chefscore, imageURL } = this.state;
    const { createNewUser, onChangeSetState } = this;

    const chefScores = [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0]
    return (
      <div>
        <form id="new-user-form" onSubmit={createNewUser}>
          User Name: <input type="text" name="name" onChange={onChangeSetState}/>
          Email: <input name="email" type="text" onChange={onChangeSetState}/>
          Chef Score: <select name="chefscore" onChange={onChangeSetState}> {chefScores.map(score => <option key={score} value={score}>{score}</option>)} </select>
          Link to Image (Image URL): <input type="text" name="imageURL" onChange={onChangeSetState}/>

          <button type="submit"> Add New User </button>
        </form>

      </div>
    )

  }

}

/*
const AddNewRecipeForm = connect(({recipes,users}) => {
  return {
    recipes,
    users
  }
})(_AddNewRecipeForm)
*/

//CONNECTED ADD NEW RECIPE FORM TO ACTION CREATOR

//MAPSTATETOPROPS - NOT REQUIRED??? - ALREADY FACTORED INTO CONNECT


const mapStateToProps = ({ users, recipes }) => {
  return {
    users,
    recipes
  }
}

const mapToDispatch = {
    create: addUserThunk
}


const AddNewUserForm = connect(mapStateToProps, mapToDispatch)(_AddNewUserForm)
export default AddNewUserForm;
