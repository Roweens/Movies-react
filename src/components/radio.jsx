import React from 'react';

class Radio extends React.Component {
  state = {
    type: 'all',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  radioHandler = (event) => {
    this.props.searchMovies()
  }

  render() {
    return (
      <div className="radio-container">
        <label>
          <input
            name="type"
            type="radio"
            value="all"
            onChange={this.handleChange}
            checked={this.state.type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            name="type"
            type="radio"
            value="movie"
            onChange={this.handleChange}
            checked={this.state.type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            name="type"
            type="radio"
            value="series"
            onChange={this.handleChange}
            checked={this.state.type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    );
  }
}

export { Radio };
