const express = require('express');
const path = require('path');
const app = express();

const db = require('./db');

const Sequelize = require('sequelize')

const { Op } = Sequelize;

const { models } = require('./db')
const { Recipe, User } = models;

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});


//RECIPE ROUTES

app.get('/api/recipes', async (req, res, next) => {
  Recipe.findAll({include: [User]})
  .then(recipes => res.send(recipes))
  .catch(next);
});

app.get('/api/recipes/:recipeId', (req, res, next) => {
  console.log("THIS CODE RUNS FOR INDIVIDUAL RECIPE");
  Recipe.findByPk(req.params.id)
  .then(recipe => res.send(recipe))
  .catch(next)
});

//USER ROUTES
app.get('/api/users', (req, res, next) => {
  console.log("THIS CODE RUNS FOR USERS.....")
  User.findAll()
  .then(users => res.send(users))
  .catch(next)
});

app.get('/api/users/:userId', (req, res, next) => {
  console.log("THIS CODE RUNS FOR INDIVIDUAL RECIPE");
  User.findByPk(req.params.id)
  .then(user => res.send(user))
  .catch(next)
});

//CHEF ROUTES - USERS WITH RECIPES
app.get('/api/chefs', (req, res, next) => {
  Recipe.findAll({include: [User]})
  .then(recipes => res.send(recipes))
  .catch(next);
});


const port = process.env.PORT || 3000;

db.syncAndSeed()
.then(() => {
app.listen(port, ()=> console.log(`listening on port ${port}`))
});
