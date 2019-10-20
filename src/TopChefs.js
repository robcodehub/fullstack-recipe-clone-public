import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';




////////////////////////////TOP CHEF CONNECTED COMPONENT////////////////////////////////////
/////////////////////////RETURNS THE CHEF WITH THE HIGHEST RATING///////////////////////////


    const _TopChef = ({recipes, users}) => {

      const allChefs = (recipes.filter(recipe => recipe.userId !== null)).map(recipe => recipe.user)

      let topChef = allChefs[0];

      for (let i=0; i<allChefs.length; i++) {
        if(allChefs[i].chefscore > topChef.chefscore) {
          topChef = allChefs[i];
        }
      }

      return (
        <div>
          The top Chef is {topChef.username}
        </div>
      )
    }


    const TopChef = connect(({recipes, users}) => {
      return {
        recipes,
        users
      }
    })(_TopChef)



export default TopChef;

