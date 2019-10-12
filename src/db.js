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

const User = database.create('user', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUDIV4
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

}
)
