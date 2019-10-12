const pg = require('pg');

const Sequelize = require('sequelize')

const { TEXT, STRING, ENUM, DECIMAL, INTEGER, UUID, UUIDV4} = Sequelize;

const database = new Sequelize(process.env.DATABASE || 'postgres://localhost/recipedb')

const Recipe = database.define('recipe', {
  id: {
    type: UUDID,
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
    ENUM: ('pizza', 'pasta', 'burrito')
  },
  healthScore: {
    type: DECIMAL,
    validate: {
      min: 0,
      max: 10
    }
  },
  directions: {
    type: TEXT
  },
  imageURL: {
    type: STRING,
    defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAUvIcVUA_ch4ar2R-9-ZiVgoyR1tYKXg8PJMDWujJv29RLmKu"
  }
});

