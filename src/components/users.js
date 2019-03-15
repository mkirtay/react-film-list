import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

export default class Users extends Component{

    state = {
        films: []
    };

    componentWillMount(){
        fetch('http://www.omdbapi.com/?s=star%20wars&apikey=f1866b1e')
            .then(data => data.json())
            .then(dataFilms => {
                this.setState(
                    { films: dataFilms.Search}
                )
            })
    };

    render(){
        return(
            <div className='user-list m-t-30'>
                { this.state.films.map( (film) => {
                    return(
                        <NavLink className="user-name__item" key={film.imdbID} to={"/list/" + film.imdbID} >
                            Film Name: {film.Title} <br/>
                            Year: {film.Year} <br/>
                            {film.imdbID}
                        </NavLink>
                    )
                }) }
            </div>
        )
    }
}