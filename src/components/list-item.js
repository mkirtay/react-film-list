import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import ListItemDetail from './list-item-detail';

export default class ListItem extends Component{
    state = {
        albums: []
    };

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(data => data.json())
            .then(albums => {
                this.setState(
                    { albums }
                )
            })
    };

    componentDidMount(){
        console.log( this.state.albums )
    }

    render(){
        return(
            <div className='album-name m-t-30'>
                { this.state.albums.map( (album) => {
                    return(
                        <NavLink className="album-name__item" key={album.id} to="/list/detail">{album.title}</NavLink>
                    )
                }) }
                <Router>
                    <Switch>
                        <Route path="/list/detail" exact component={ ListItemDetail } />
                        <Route component={ Error } />
                    </Switch>
                </Router>
            </div>
        )
    }
}