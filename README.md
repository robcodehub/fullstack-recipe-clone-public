# recipe-maker
with React, Redux, Express, and Sequelize!

## What You'll Be Building
Make a website for viewing, creating, and saving recipes. Let's get cooking!

## Getting Started
1. Fork and clone this repo
2. ```npm install```
4. ```npm run start:dev```

## Deploying Your Application
Deploying your application is a way to determine whether it will work on an environment other than your own. It's in your best interest to deploy your application to ensure that someone else cloning your repo, will be able to run it. Once you get your application working locally you should deploy it to heroku. As you commit your changes, you should push those changes to both your github repo and to heroku.

## Requirements

### Tier 1

<details>

#### Backend

- [x] Write a `recipes` model with the following information:
  - [x] name - not empty or null
  - [x] cuisine - ENUM (restricted to only a handful of values)
  - [x] directions - extremely large text
  - [x] healthScore - decimal between 0 - 10
  - [x] ingredients - string
  - [x] imageUrl - with a default value
- [x] Write a `users` model with the following information:
  - [x] username - not empty or null, unique
  - [x] email - not empty or null; must be a valid email
  - [x] chefScore - defaults to 0, integer
  - [x] imageUrl - with a default value
- [x] Recipes can be associated with at most one user, users can have many recipes.
- [x] write a method which syncs your database and seeds your data.

- [x] Write a route to serve up all recipes
- [x] Write a route to serve up all users

#### Frontend
- [x] Write a recipes sub-reducer to manage recipes in your Redux store
- [x] Write a users sub-reducer to manage users in your Redux store
- [x] Write a home component which has the text Welcome!
- [x] Write a component to display a list of all recipes (include their names, images, and cuisine)
- [x] Write a component to display a list of all users (usernames, chefScores, and images)
- [x] Display the Home component when the url matches `/`
- [x] Display the all-recipes component when the url matches `/recipes`
- [x] Display the all-users component when the url matches `/users`
- [x] Add links to the navbar that can be used to navigate to the recipes view and the users view as well as the home page. The links should show the total number of users and the total number of recipes.

 </details>



### Tier 1b

  <details>

#### Backend

nothing


#### Frontend
NOTE: I HAVEN'T CHECKED THESE AS I NEED TO REFACTOR - I HAVE COMPLETED STEPS IN TIER 2 AND WILL COME BACK TO THIS SECTION
- [ ] create client side methods which calculate the following (you can put this code in a file called mapppers.js)
  - [x] `topChef` when given a list of recipes and users returns the user who is the top chef (the one with the highest rating)
  - [x] `healthyRecipes` when given a list of recipes calculates which recipes have healthScores between 8 and 10
  - [ ] display the information from both of these methods on the home page.
  - [x] create a link for chefs. Chefs are users who have a recipe. Clicking on that link should navigate to a /chefs route and display only those users who have recipes.
  </details>

### Tier 2

  <details>

  #### Backend

- [x] Write a route to serve up a single recipe (based on its id), _including that recipes'_ user
- [x] Write a route to serve up a single user (based on their id), _including that user's_ recipes

#### Frontend
- [x] Write a component to display a single recipe with the following information:
  - [x] The recipe's name, image, directions, ingredients, cuisine and healthScore
  - [x]  The recipe's user and their chefScore
- [x] Display the appropriate recipes's info when the url matches `/recipes/:recipeId`
- [x] - Clicking on a recipe from the all-recipes view should navigate to show that recipe in the single-recipe view

- [x] Write a component to display a single user with the following information:
  - [x] The student's username, email, image, and chefScore
  - [x] A list of their recipes (or a helpful message if they don't have any)
- [x] Display the appropriate user when the url matches `/users/:userId`
- [x] - Clicking on a user from the all-users view should navigate to show that user in the single-user view

- [x] Clicking on the name of a user in the single-recipe view should navigate to show that user in the single-user view
- [x] Clicking on the name of a recipe in the single-user view should navigate to show that recipe in the single-recipe view

  </details>

  ### Tier 3

  <details>

 #### Backend

- [ ] IN PROGRESS - Write a route to add a new recipe (if given a user, that users chefScore should increase and that user should be associated with the new recipe)
- [x] Write a route to add a new user

#### Frontend

- [x] Write a component to display a form for adding a new recipe that contains inputs for all recipe information (including associated user. Note that cuisine should be a dropdown of options).
- [x] Display this component EITHER as part of the all-recipes view, or as its own view
- [x] Submitting the form with a valid name should:
  - [x] Make an AJAX request that causes the new recipe to be persisted in the database
  - [x] Add the new recipe to the list of recipes without needing to refresh the page

- [x] Write a component to display a form for adding a new user that contains inputs for _at least_ username and email
- [x] Display this component EITHER as part of the all-users view, or as its own view
- [x] Submitting the form with a valid username should:
  - [x] Make an AJAX request that causes the new user to be persisted in the database
  - [x] Add the new user to the list of users without needing to refresh the page


 </details>

 ### Tier 4

<details>

#### Backend

- [ ] Write a route to remove a recipe (based on its id, the associated user should get a decrease in their chefScore)
- [ ] Write a route to remove a user (based on their id)

#### Frontend

- [x] In the all-recipes view, include an `X` button next to each recipe
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that recipe to be removed from database
  - [ ] Remove the recipe from the list of recipes without needing to refresh the page

- [x] In the all-users view, include an `X` button next to each user
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that user to be removed from database
  - [ ] Remove the user from the list of users without needing to refresh the page

</details>

 ### Bonus Tier 1

<details>

- [ ] If a user attempts to add a new recipe or user without a required field, a helpful message should be displayed
- [ ] Show a special symbol/message or change the color of the user whose chefScore is the highest. You could even have tiers of chef levels (bronze, silver, gold, etc.)
- [ ] Add a filter for cuisine type on the all recipes page
- [ ] If a user attempts to access a page that doesn't exist (ex. `/kittens`), a helpful "not found" message should be displayed
- [ ] If a user attempts to view a recipe or user that doesn't exist, a helpful message should be displayed
- [ ] Whenever a component needs to wait for data to load from the server, a "loading" message should be displayed until the data is available

</details>

### Bonus Tier 2

<details>

#### Backend

- [ ] Write a route to update an existing recipe
- [ ] Write a route to update an existing user

#### Frontend

- [ ] Write a component to display a form updating a recipe's information
- [ ] Display this component as part of the single-recipe view
- Submitting the form with a valid name should:
  - [ ] Make an AJAX request that causes that recipe to be updated in the database
  - [ ] Update the recipe in the current view without needing to refresh the page

- [ ] Write a component to display a form updating a user's information
- [ ] Display this component as part of the single-user view
- Submitting the form with a valid username should:
  - [ ] Make an AJAX request that causes that user to be updated in the database
  - [ ] Update the user in the current view without needing to refresh the page

</details>


### Bonus Tier 3

<details>


 *Note that this tier includes breaking changes. It would be best to commit your work before moving onto this portion. It may even be worth starting a new branch for this one.*

#### Backend

- [ ] Write an `ingredients` model with the following information:
  - [ ] name - not empty or null
  - [ ] healthScore - integer between 0 - 10
- [ ] Write a `RecipeIngredients` model with the following information:
  - [ ] amount - default 1
- [ ] Update your `users` model:
  - [ ] Take out the ingredients property
- [ ] Ingredients can belong to many recipes, recipes can have many ingredients (through the RecipeIngredients model)

- [ ] Write a function that calculates the healthScore of a recipe based on the average healthScore of its ingredients. Use this function in your routes for creating new recipes and updating recipes.
- [ ] Write a route to handle adding a new ingredient to the database and associating it with a recipe.

#### Frontend

- [ ] Update your single-recipe component to display the new list of ingredients
- [ ] Update your single-recipe reducer to handle the new list of ingredients
- [ ] Write a component to display a form to create new ingredients
- [ ] Display this form as part of the *update-recipe* form (form should include field for amount of ingredient)
- Submitting the form with a valid name should:
  - [ ] Make an AJAX request that causes that ingredient to be added to the database and that recipe to be associated with that ingredient
  - [ ] Update the recipe in the current view without needing to refresh the page

</details>

### Bonus Tier 4: Still want more?

<details>

#### Frontend

- [ ] Try researching some UI frameworks (MaterialUI, Bootstrap, Semantic UI, etc.) and incorporating one into your app to add some great styles
   - [ ] Can you display forms as modals?
   - [ ] Can you show toaster messages around form submissions?
   - [ ] Can a user easily and intuitively navigate around your app?

</details>

