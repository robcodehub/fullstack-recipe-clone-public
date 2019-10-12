const express = require('express');
const path = require('path');
const app = express();

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});


app.get('/recipes', (req, res, next) => {
  Recipe.findAll()
  .then(recipes => res.send(recipes))
  .catch(next);
});

app.get('/users', (req, res, next) => {
  User.findAll()
  .then(users => res.send(users))
  .catch(next)
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));
