import React from "react";

function Movie_detail(props) {
    const {location : {state}} = props;
    const {title, summary, poster, genres} = state;
    console.log(state);
    return (
        <div>
            <img src = {poster}></img>
            <div>{title}</div>
            <div>{summary}</div>
        </div>
    )
}

export default Movie_detail;