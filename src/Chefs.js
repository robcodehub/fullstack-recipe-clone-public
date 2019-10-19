import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


  //////////////////////CHEFS CONNECTED COMPONENT////////////////////////////////////
    //{recipes.filter(recipe => recipe.user)}
    const _Chefs = ({recipes, users}) => {

      const allChefs = (recipes.filter(recipe => recipe.userId !== null)).map(recipe => recipe.user)

      console.log("All CHEFS====", allChefs)



      /*
      const reducedChefs = allChefs.reduce((all, chef) => {
        if (!all[chef.id]) {
          all[chef.id] = chef;
        }
        return all;
      }, {});

      const reducedArr = [];
      reducedArr.push(reducedChefs);

      console.log("REDUCED Arr =======", reducedArr)

      console.log("REDUCED CHEFS =======", reducedChefs)
      */

      return (
        <div>
          {allChefs.map(chef => <div key={chef.id}><p>Chef Name:</p> {chef.username} </div>)}
          <TopChef />
        </div>
      )
    }

    /*
    const Chefs = connect(({recipes, users}) => {
      return {
        recipes,
        users
      }
    })(_Chefs)
*/


const mapStateToProps = ({ users, recipes }) => {
  return {
    users,
    recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRecipesAction: () => {
      dispatch(setRecipesThunk());
    }
  }
}

const Chefs = connect(mapStateToProps, mapDispatchToProps)(_Chefs)
export default Chefs;
