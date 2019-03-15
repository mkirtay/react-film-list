import React, { Component } from 'react'
import './list.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Users from './users';
import Error from './error';
import ListItemDetail from './list-item-detail';


export default class List extends Component{
    render(){
        return(
            <Router>
                <div>
                    <div className="tabs">
                        <NavLink activeClassName="link--active" className="link" to="/film-list">Film List</NavLink>
                    </div>
                    <Switch>
                        <Route path="/film-list" exact component={ Users } />
                        <Route path="/list/:id" exact component={ ListItemDetail } />
                        <Route component={ Error } />
                    </Switch>
                </div>
            </Router>
        )
    }
}