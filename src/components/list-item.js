import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class ListItem extends Component{
    state = {
        comments: []
    };

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(data => data.json())
            .then(comments => {
                this.setState(
                    { comments }
                )
            })
    };

    render(){
        return(
            <div className='comment-name m-t-30'>
                { this.state.comments.map( (comment) => {
                    return(
                        <NavLink commentName={comment.name} email={comment.email} className="comment-name__item" key={comment.id} to="/list/detail">
                            Comment name: {comment.name}
                            <br/><br/>
                            E-mail: <span>{comment.email}</span>
                        </NavLink>
                    )
                }) }
            </div>
        )
    }
}