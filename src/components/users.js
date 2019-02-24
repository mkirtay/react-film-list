import React, {Component} from 'react'

export default class Users extends Component{

    state = {
        users: []
    };

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(users => {
                this.setState(
                    { users }
                )
            })
    };

    render(){
        return(
            <div className='user-list m-t-30'>
                { this.state.users.map( (user) => {
                    return(
                        <span className="user-name__item" key={user.id}>
                            {user.name}
                        </span>
                    )
                }) }
            </div>
        )
    }
}