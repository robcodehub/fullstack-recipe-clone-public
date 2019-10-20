import { combineReducers, createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk'


    //////////////////////////////////////////////////////////////////////////
    /////////////////////////REDUX - ACTION TYPES/////////////////////////////
    //////////////////////////////////////////////////////////////////////////

    /////////////////////////RECIPE - ACTION TYPES/////////////////////////////
    const SET_RECIPES = 'SET_RECIPES'
    const ADD_RECIPE = 'ADD_RECIPE'
    const DELETE_RECIPE = 'DELETE_RECIPE'
    const UPDATE_RECIPE = 'UPDATE_RECIPE'

    /////////////////////////USER - ACTION TYPES/////////////////////////////
    const SET_USERS = 'SET_USERS'
    const ADD_USER = 'ADD_USER'
    const DELETE_USER = 'DELETE_USER'
    const UPDATE_USER = 'UPDATE_USER'



    /////////////////////////////////////////////////////////////////////////////
    ////////////////////////REDUX - ACTION CREATORS//////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    /////////////////////////RECIPE ACTION CREATORS/////////////////////////////
    const setRecipesAction = (recipes) => ({type: SET_RECIPES, recipes})
    const addRecipeAction = (recipe) => ({type: ADD_RECIPE, recipe})
    const deleteRecipeAction = (recipe) => ({type: DELETE_RECIPE, recipe})
    const updateRecipeAction = (recipe) => ({type: UPDATE_RECIPE, recipe})

     /////////////////////////USER ACTION CREATORS/////////////////////////////
    const setUsersAction = (users) => ({type: SET_USERS, users})
    const addUserAction = (user) => ({type: ADD_USER, user})
    const deleteUserAction = (user) => ({type: DELETE_USER, user})
    const updateUserAction = (user) => ({type: UPDATE_USER, user})


    /////////////////////////////////////////////////////////////////////////////
    ////////////////////////     REDUX - THUNKS    //////////////////////////////
    /////////////////////////////////////////////////////////////////////////////


    ////////////////////////     RECIPE - THUNKS    //////////////////////////////

    const setRecipesThunk = () => {
      return async dispatch => {
        const allRecipes = (await axios.get('/api/recipes')).data;
        dispatch(setRecipesAction(allRecipes))
      }
    }

    const addRecipeThunk = (recipe) => {
      console.log("ADD RECIPE THUNK RUNNING=====", recipe)
      return async (dispatch) => {
        const postRecipe = (await axios.post('/api/recipes', recipe)).data;
        dispatch(addRecipeAction(postRecipe))
        }
    }

    const deleteRecipeThunk = (recipeId) => {
      console.log("RECIPE ID IN THUNK=====", recipeId)
      return async dispatch => {
        await axios.delete(`/api/recipes/${recipeId}`);
        dispatch(deleteRecipeAction(recipeId))
        }
    }

    //TO COMPLETE AND CONVERT TO UPDATE
    /*
    const updateRecipeThunk = (recipe) => {
      return async (dispatch) => {
        const postRecipe = (await axios.post('/api/recipes', recipe)).data;
        dispatch(addRecipeAction(postRecipe))
        }
    }
*/

   ////////////////////////     USER - THUNKS    //////////////////////////////

    const setUsersThunk = () => {
      return async dispatch => {
        const allUsers = (await axios.get('/api/users')).data;
        dispatch(setUsersAction(allUsers))
      }
    }


    const addUserThunk = (user) => {
      return async dispatch => {
        const postUser = (await axios.post('/api/users', user)).data;
        dispatch(addUserAction(postUser))
        }
    }

    const deleteUserThunk = (user) => {
      return async dispatch => {
        await axios.delete(`/api/users/${user.id}`, user);
        dispatch(deleteUserAction(user))
        }
    }


    const increaseUserScoreThunk = (user) => {
      console.log("USER IN INCREASE USER SCORE THUNK======", user)
      const newChefScore = user.chefscore + 1;
      user.chefscore += 1;
      console.log("USER IN INCREASE THUNK=====", user)
      console.log("new chef score in thunk=====", newChefScore)
      return async dispatch => {
        const updateUser = (await axios.put(`/api/users/${user.id}`, user)).data;
        dispatch(updateUserAction(updateUser))
        }
    }


    const decreaseUserScoreThunk = (user) => {
      console.log("USER IN DECREASE USER SCORE THUNK======", user)
      const newChefScore = user.chefscore - 1;
      user.chefscore -= 1;
      console.log("USER IN DECREASE THUNK=====", user)
      console.log("new chef score in DECREASE thunk=====", newChefScore)
      return async dispatch => {
        const updateUser = (await axios.put(`/api/users/${user.id}`, user)).data;
        dispatch(updateUserAction(updateUser))
        }
    }





    /////////////////////////////////////////////////////////////////////////////
    ////////////////////////     REDUX - REDUCERS    ////////////////////////////
    /////////////////////////////////////////////////////////////////////////////

    ////////////////////////   REDUX - USER REDUCER    ///////////////////////////
    const userReducer = (state = [], action) => {
      //ADD IF ACTION.TYPE HERE
      if (action.type === SET_USERS) {
        state = action.users;
      } else if (action.type === ADD_USER) {
          return [...state, action.user]
      } else if (action.type === DELETE_USER) {
          return state.filter(user => user.id !== action.user)
      } else if (action.type === UPDATE_USER) {
        console.log("ACTION IN UPDATE USER=====", action)
          console.log("STATE IN UPDATE USER=====", state)
          return state;
      }
      return state;
    }

    ////////////////////////   REDUX - RECIPE REDUCER    ///////////////////////////
    const recipeReducer = (state = [], action) => {
      //ADD IF ACTION.TYPE HERE
      if (action.type === SET_RECIPES) {
          state = action.recipes;
      } else if (action.type === ADD_RECIPE) {
          return [...state, action.recipe]
      } else if (action.type === DELETE_RECIPE) {
          return state.filter(recipe => recipe.id !== action.recipe)
      } else if (action.type === UPDATE_RECIPE) {
          return state;
      }
      return state;
    }


    ////////////////////////   REDUX - COMBINE REDUCERS    ///////////////////////////
    const reducer = combineReducers({
      users: userReducer,
      recipes: recipeReducer
    });

    /////////////////////////////////////////////////////////////////////////////
    ////////////////////////  REDUX - CREATE STORE  ////////////////////////////
    /////////////////////////////////////////////////////////////////////////////
      //const store = createStore(reducer) //, applyMiddleware(thunkMiddleware));

      //REDUX STORE WITH MIDDLEWARE
      const store = createStore(reducer, applyMiddleware(thunk));

      //const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

      /*
      const middleware = applyMiddleware(thunk, logger());
      const store = createStore(combineReducers({booleanReducer,searchItunesReducer}),middleware);
      console.log(store.getState());
      */



export default store;
export { setRecipesAction, addRecipeAction, deleteRecipeAction, setUsersAction, addUserAction, deleteUserAction};
export { setRecipesThunk, addRecipeThunk, deleteRecipeThunk, setUsersThunk, addUserThunk, deleteUserThunk, increaseUserScoreThunk, decreaseUserScoreThunk};
