import React from 'react'
import {  Route, Switch } from 'react-router-dom';

import  { HomePage } from '../components/containers/Users/Home'

const routes= (
    <div>
    <Route path="/login" component={HomePage} />

    </div>
)


export default routes