const pg = require('pg');

const Sequelize = require('sequelize')

const { TEXT, STRING, ENUM, DECIMAL, INTEGER, UUID, UUIDV4} = Sequelize;

const database = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/recipedb')

const Recipe = database.define('recipe', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    notEmpty: true,
    notNull: true
  },
  cuisine: {
    type: STRING,
    ENUM: ('desert', 'italian')
  },
  healthScore: {
    type: DECIMAL,
    validate: {
      min: 0,
      max: 10
    }
  },
  ingredients: {
    type: TEXT,
    defaultValue: "salt, sugar, baking powder"
  },
  directions: {
    type: TEXT
  },
  imageURL: {
    type: STRING,
    defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAUvIcVUA_ch4ar2R-9-ZiVgoyR1tYKXg8PJMDWujJv29RLmKu"
  }
});

const User = database.define('user', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  username: {
    type: STRING,
    notEmpty: true,
    notNull: true,
    unique: true
  },
  email: {
    type: STRING,
    notEmpty: true,
    notNull: true,
    validate: {
      isEmail: true
    }
  },
  chefscore: {
    type: INTEGER,
    defaultValue: 0
  },
  imageURL: {
    type: STRING,
    defaultValue: "https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png"
  }

});

User.hasMany(Recipe);
Recipe.belongsTo(User);



const syncAndSeed = async() => {
  await database.sync({ force: true });


  const users = [
    {username: "larry", email: "larry@larry.com", chefscore: 4},
    {username: "curly", email: "curly@curly.com", chefscore: 7},
    {username: "moe", email: "moe@moe.com", chefscore: 8},
    {username: "sally", email: "sally@sallyy.com", chefscore: 7}
  ]
const [chef1, chef2, chef3 ] = await Promise.all(users.map(user => User.create(user)));


const recipes = [
  {name: 'banana cake', cuisine: 'desert', healthScore: 3, ingredients: "bananas", directions: "add bananas, bake cake", userId: chef1.id},

  {name: 'chocolate cake', cuisine: 'desert', healthScore: 1, ingredients: "chocolate", directions: "add chocolate, bake cake", userId: chef2.id},

  {name: 'pizza', cuisine: 'italian', healthScore: 8, directions: "add toppings, cook pizza", userId: chef2.id},

  {name: 'pasta', cuisine: 'italian', healthScore: 8, directions: "add pasta, cook pasta"}
]

const [recipe1, recipe2, recipe3, recipe4] = await Promise.all(recipes.map(recipe => Recipe.create(recipe)));
}


module.exports = {
  syncAndSeed,
  models: {
    Recipe,
    User
  }

}
