import React from 'react';

const FilmCard = ({props}) => {
    return (
        <div>
            <div>
            <p>{props.Year}</p>
          </div>

          <div><img src={props.Poster} alt={props.Title} /></div>
          
          <div>
            <span>{props.Type}</span>
            <h3>{props.Title}</h3>
          </div>
        </div>
    );
};

export default FilmCard;