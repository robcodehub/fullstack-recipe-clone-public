import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



////////////////////////////TOP CHEF CONNECTED COMPONENT////////////////////////////////////
/////////////////////////RETURNS THE CHEF WITH THE HIGHEST RATING///////////////////////////

//==================CHANGES TO MAKE===============================================
//SHOULDN'T BE A CONNECTED COMPONENT - FINE FOR NOW BUT CONVERT TO JS FUNCTION LATER
//==================CHANGES TO MAKE===============================================

//CONVERTED TO STARTED JS BELOW - NEED TO REFERENCE AND DISPLAY THIS WITHIN ANOTHER FUNCTION

const calcTopChef = (recipes) => {

  const allChefs = (recipes.filter(recipe => recipe.userId !== null)).map(recipe => recipe.user)


  let topChef = allChefs[0];

  for (let i=0; i<allChefs.length; i++) {
    if(allChefs[i].chefScore > topChef.chefScore) {
      topChef = allChefs[i];
    }
  }

  return topChef;
}

//BELOW TO BE REMOVED AS IT DOESN'T NEED TO BE CONNECTED COMPONENT - REMOVE ONCE OTHER CODE ABOVE IS BEING USED
    const _TopChef = ({recipes, users}) => {

      const allChefs = (recipes.filter(recipe => recipe.userId !== null)).map(recipe => recipe.user)

      console.log("All CHEFS IN TOP CHEF FUNCTION ====", allChefs)

      let topChef = allChefs[0];

      for (let i=0; i<allChefs.length; i++) {
        if(allChefs[i].chefScore > topChef.chefScore) {
          topChef = allChefs[i];
        }
      }

      console.log("TOP CHEF =====", topChef);


      return (
        <div>
          The top Chef is {topChef.username}
        </div>
      )
    }

/*
    const TopChef = connect(({recipes, users}) => {
      return {
        recipes,
        users
      }
    })(_TopChef)

*/
//==================CHANGES TO MAKE===============================================
//SHOULDN'T BE A CONNECTED COMPONENT - FINE FOR NOW BUT CONVERT TO JS FUNCTION LATER
//==================CHANGES TO MAKE===============================================






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

const TopChef = connect(mapStateToProps, mapDispatchToProps)(_TopChef)
export default TopChef;
