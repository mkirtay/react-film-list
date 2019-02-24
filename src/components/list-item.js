import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



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
            </div>
        )
    }
}