import React from 'react';
import { Movie } from './movie';

export class Movies extends React.Component {
  render() {
    const { moviesArr = [] } = this.props;
    return (
      <div className="movies">
        {moviesArr.length ? (
          moviesArr.map((movie) => {
            return <Movie key={movie.imdbID} movie={movie} />;
          })
        ) : (
          <h4>Nothing found</h4>
        )}
      </div>
    );
  }
}
