const express = require('express');
const path = require('path');
const app = express();

const db = require('./db');

const Sequelize = require('sequelize')

const { Op } = Sequelize;

const { models } = require('./db')
const { Recipe, User } = models;


app.use(express.json());


app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});

/////////////////////////////////////////////////////////////
/////////////////////EXPRESS ROUTES//////////////////////////
/////////////////////////////////////////////////////////////

//////////////////EXPRESS RECIPE ROUTES//////////////////////

app.get('/api/recipes', async (req, res, next) => {
  Recipe.findAll({include: [User]})
  .then(recipes => res.send(recipes))
  .catch(next);
});

//POST ROUTE FOR RECIPES
app.post('/api/recipes', (req, res, next) => {
  Recipe.create(req.body)
  .then(newRecipe => res.status(201).send(newRecipe))
  .catch(next)
});


//DELETE ROUTE FOR RECIPES
app.delete('/api/recipes/:id', (req, res, next) => {
  Recipe.findByPk(req.params.id)
  .then(currentRecipe => currentRecipe.destroy())
  .then(res.sendStatus(204))
  .catch(next)
});

//ADD AN UPDATE ROUTE FOR RECIPES




//////////////////EXPRESS USER ROUTES//////////////////////
app.get('/api/users', (req, res, next) => {
  console.log("THIS CODE RUNS FOR USERS.....")
  User.findAll()
  .then(users => res.send(users))
  .catch(next)
});


//POST ROUTE FOR USERS
app.post('/api/users', (req, res, next) => {
  User.create(req.body)
  .then(newUser => res.status(201).send(newUser))
  .catch(next)
});

//DELETE ROUTE FOR USERS
app.delete('/api/users/:id', (req, res, next) => {
  User.findByPk(req.params.id)
  .then(currentUser => currentUser.destroy())
  .then(res.sendStatus(204))
  .catch(next)
})

//ADD AN UPDATE ROUTE FOR USERS
app.put('/api/users/:id', (req, res, next) => {

  const chefToUpdate = {id: req.body.id, username: req.body.username, email: req.body.email, chefscore: req.body.chefscore, imageURL: req.body.imageURL};

  User.update(chefToUpdate, {where: {id: chefToUpdate.id }})
  .then(updatedUser => res.status(204).send(updatedUser))
  .catch(next)
})


//CHEF ROUTES - USERS WITH RECIPES

//GETTING AN ERROR WITH CHEFS - WAS CONSIDERING TO
//CHANGE CHEFS IN REACT TO AN API AND RENDER ON FRONT END FROM API

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


module.exports = app; 
