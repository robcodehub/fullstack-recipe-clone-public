import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addUserThunk } from './store'


//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW USER FORM/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////



class _AddNewUserForm extends Component {
  constructor() {
    super();

  this.state = {
    username: "",
    email: "",
    chefscore: "",
    imageURL: "https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png"
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
      this.setState({
        username: "",
        email: "",
        chefscore: "",
        imageURL: "https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png"
      });
  }


  render() {

    const { username, email, chefscore, imageURL } = this.state;
    const { createNewUser, onChangeSetState } = this;

    const chefScores = [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0]
    return (
      <div>
        <form id="new-user-form" onSubmit={createNewUser}>
          User Name: <input type="text" name="username" onChange={onChangeSetState}/>
          Email: <input name="email" type="text" onChange={onChangeSetState}/>
          Chef Score: <select name="chefscore" onChange={onChangeSetState}> {chefScores.map(score => <option key={score} value={score}>{score}</option>)} </select>
          Link to Image (Image URL): <input type="text" name="imageURL" onChange={onChangeSetState}/>

          <button type="submit"> Add New User </button>
        </form>

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
    create: addUserThunk
}


const AddNewUserForm = connect(mapStateToProps, mapToDispatch)(_AddNewUserForm)
export default AddNewUserForm;
