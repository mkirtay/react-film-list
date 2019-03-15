import React, {Component} from 'react';

export default class ListItemDetail extends Component {

    state = {
        filmName: '',
        filmImdbRating: '',
        filmWebsite: '',
        filmDirector: '',
        filmAwards: '',
        filmRating: []
    };

    componentWillMount(){
        fetch('http://www.omdbapi.com/?i=' + this.props.match.params.id + '&apikey=f1866b1e')
            .then(data => data.json())
            .then(filmDetail => {
                console.log(filmDetail)
                this.setState(
                    {
                        filmName: filmDetail.Title,
                        filmImdbRating: filmDetail.imdbRating,
                        filmWebsite: filmDetail.Website,
                        filmDirector: filmDetail.Director,
                        filmAwards: filmDetail.Awards,
                        filmRating: filmDetail.Ratings
                    }
                )
            })
    }

    render(){
        return(
            <div>
                <span>Film Name: {this.state.filmName}</span> <br/>
                <span>Film Imdb Rate: {this.state.filmImdbRating}</span> <br/>
                <span>Film Website: {this.state.filmWebsite}</span> <br/>
                <span>Film Director: {this.state.filmDirector}</span> <br/>
                <span>Film Awards: {this.state.filmAwards}</span> <br/>

                { this.state.filmRating.map( (rating, index) => {
                    return(
                        <span key={index}>
                            Rating Source: {rating.Source} <br/>
                            Rating Value: {rating.Value} <br/>
                        </span>
                    )
                }) }
            </div>
        )
    }
}