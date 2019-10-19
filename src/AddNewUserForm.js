import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



//====================WRITE A ROUTE TO ADD A NEW USER===========================
//================================ADD RECIPE======================================
//================================================================================

const _AddUser = () => {

}

const AddUser = connect(({users, recipes}) => {
  return {
    users,
    recipes
  }
})(_AddUser)
