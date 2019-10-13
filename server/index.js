const express = require('express');
const path = require('path');
const app = express();

const db = require('./db');

const { models } = require('./db')
const { Recipe, User } = models;

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});


app.get('/api/recipes', async (req, res, next) => {
  Recipe.findAll()
  .then(recipes => res.send(recipes))
  .catch(next);
});

app.get('/api/users', (req, res, next) => {
  console.log("THIS CODE RUNS FOR USERS.....")
  User.findAll()
  .then(users => res.send(users))
  .catch(next)
});

const port = process.env.PORT || 3000;

db.syncAndSeed()
.then(() => {
app.listen(port, ()=> console.log(`listening on port ${port}`))
});
