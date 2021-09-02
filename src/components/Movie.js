import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({id,year,title,summary,poster,genres}) {
    return (
    <Link 
        to ={{
            pathname : `${id}`,
            state : {
                year,
                title,
                summary,
                poster,
                genres
            }
            }}
    >
        <div className = "movie">
            <img className = "movie_poster" src ={poster} alt = {title} title={title}></img>
            <div className = "movie_data">
                <h3 className = "movie_title">{title}</h3>
                <h5 className = "movie_year">{year}</h5>
                <ul className = "movie_genres">
                    {genres.map((element,index) => {
                        return <li key={index} className = "genres_genre">{element}</li>
                    })}
                </ul>
                <p className = "movie_summary">{summary}</p>
            </div>
        </div>
    </Link>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie;