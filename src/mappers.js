

// TOP CHEF - topChef when given a list of recipes and users returns the user who is the top chef (the one with the highest rating)
// display the information from both of these methods on the home page.



//HEALTHY RECIPES - healthyRecipes when given a list of recipes calculates which recipes have healthScores between 8 and 10
// display the information from both of these methods on the home page.

const CalcHealthyRecipes = (recipes) => {
  const healthyFood = recipes.filter(recipe => recipe.healthScore >= 8)
  return healthyFood
}


//LINK TO CHEFS - create a link for chefs. Chefs are users who have a recipe. Clicking on that link should navigate to a /chefs route and display only those users who have recipes.
