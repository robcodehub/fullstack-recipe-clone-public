import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addRecipeThunk } from './store'


//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW RECIPE SECTION////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


//====================WRITE A ROUTE TO ADD A NEW RECIPE===========================
//================================ADD RECIPE======================================
//================================================================================

/*
const _AddRecipe = () => {

}


const AddRecipe = connect(({recipes, users}) => {
  return {
    users,
    recipes
  }
})(_AddRecipe)

*/
//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////ADD NEW CLASS AND FORM////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//CREATING THE ADD NEW RECIPE AS A CLASS

class _AddNewRecipeForm extends Component {
  constructor() {
    super();

  this.state = {
    name: "",
    cuisine: "",
    healthScore: "",
    ingredients: "",
    directions: "",
    imageURL: ""
    }
    this.createNewRecipe = this.createNewRecipe.bind(this);
  }

  /*onChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }*/


   createNewRecipe(ev) {
    ev.preventDefault()
      this.props.create(this.state);
  }


  render() {
    console.log("PROPS IN RENDER======", this.props)
    const { name, cuisine, healthScore, ingredients, directions, imageURL } = this.state;
    const { createNewRecipe } = this;
    const cuisinesSelect = ['desert', 'italian']

    const healthScores = [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0]
    return (
      <div>
          Add New Recipe Form coming soon...
        <form id="new-recipe-form" onSubmit={createNewRecipe}>
          Recipe Name: <input type="text" name="name" onChange={ev => this.setState({[ev.target.name]: ev.target.value})}/>
          Cuisine: <select> {cuisinesSelect.map(cuisine => <option key={cuisine} value={cuisine}>{cuisine}</option>)} </select>
          Health Score: <select> {healthScores.map(score => <option key={score} value={score}>{score}</option>)} </select>
          Ingredients: <input name="ingredients" type="text" onChange={ev => this.setState({[ev.target.name]: ev.target.value})}/>
          Directions: <input type="text" name="directions" onChange={ev => this.setState({[ev.target.name]: ev.target.value})}/>
          Link to Image (Image URL): <input type="text" name="imageURL" onChange={ev => this.setState({[ev.target.name]: ev.target.value})}/>

          <button type="submit"> Add New Recipe </button>
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
    create: addRecipeThunk
}


const AddNewRecipeForm = connect(mapStateToProps, mapToDispatch)(_AddNewRecipeForm)
export default AddNewRecipeForm;



/*
mapDispatchToProps = (dispatch) => {
  return {
    addRecipesAction: () => {
      dispatch(addRecipesThunk());
    }
  }
}
*/

/*

const AddNewRecipeForm = connect(({recipes,users}) => {
  return {
    recipes,
    users
  }
}, (dispatch) => {
  return {
    createNewRecipe: (recipe) => dispatch(addRecipeAxios(recipe))
    }
})(_AddNewRecipeForm)

*/


/*

const AddNewRecipeForm = connect(({recipes,users}) => {
  return {
    recipes,
    users
  }, {ACTION CREATOR HERE???}
})(_AddNewRecipeForm)

*/




/*
const AddNewRecipeForm = connect(({recipes,users}) => {
  return {
    recipes,
    users
  }
}, (dispatch) => {
  return {
    createNewRecipe: (recipe) => dispatch(addRecipeAxios(recipe))
    }
})(_AddNewRecipeForm)
*/


//THE BELOW HAS BEEN COMMENTED OUT UNTIL THIS IS CONVERTED TO REDUX THUNKS
/*
/*
const AddNewRecipeForm = connect(({recipes,users}) => {
  return {
    recipes,
    users
  }
}, (dispatch) => {
  return {
    createNewRecipe: (recipe) => dispatch(addRecipeThunk(recipe))
    }
})(_AddNewRecipeForm)
*/
