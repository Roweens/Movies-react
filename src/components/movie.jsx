import React from 'react';

export class Movie extends React.Component {
  render() {
    const {
      Poster: poster,
      Title: title,
      Type: type,
      Year: year,
    } = this.props.movie;

    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {poster === 'N/A' ? (
            <img
              className="activator"
              src={`https://via.placeholder.com/300x420?text=${title}`}
            />
          ) : (
            <img className="activator" src={poster} alt="#" />
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
          </span>
          <p>
            {year}
            <span className="right">{type}</span>
          </p>
        </div>
      </div>
    );
  }
}
