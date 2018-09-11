import React from 'react'
import {  Route, Switch } from 'react-router-dom';
import { PrivateRoute } from "./private";

import  { LoginPage } from '../components/containers/Users/Login'
import  { HomePage } from '../components/containers/Users/Home'
import  { RegisterPage } from '../components/containers/Users/Register'

const routes= (
    <div>

        <PrivateRoute exact path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />

    </div>
)


export default routes