import React, { Component } from 'react'
import './list.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import ListItem from './list-item';
import Users from './users';
import Error from './error';
import ListItemDetail from './list-item-detail';

export default class List extends Component{
    render(){
        return(
            <Router>
                <div>
                    <NavLink activeClassName="link--active" className="link" to="/list">List</NavLink>
                    <NavLink activeClassName="link--active" className="link" to="/users">Users</NavLink>
                    <Switch>
                        <Route path="/list" exact component={ ListItem } />
                        <Route path="/users" exact component={ Users } />
                        <Route path="/list/detail" exact component={ ListItemDetail } />
                        <Route component={ Error } />
                    </Switch>
                </div>
            </Router>
        )
    }
}