import React from 'react';

class Search extends React.Component {
  state = {
    search: 'Star Wars',
    type: 'all',
  };

  handleRadioChange = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  keyHandler = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.keyHandler}
          />
          <button
            className="btn search-btn deep-purple darken-3"
            onClick={() => {
              this.props.searchMovies(this.state.search);
            }}
          >
            Search
          </button>
        </div>
        <div className="radio-container">
          <label>
            <input
              name="type"
              type="radio"
              value="all"
              onChange={this.handleRadioChange}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              value="movie"
              onChange={this.handleRadioChange}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              value="series"
              onChange={this.handleRadioChange}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
