import React from 'react';
import { Movies } from '../components/movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesArray: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=star wars`)
      .then((response) => response.json())
      .then((res) => this.setState({ moviesArray: res.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  searchMovies = (title, type = 'all') => {
    this.setState({ loading: true });
    if (!type || type === 'all') {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
        .then((response) => response.json())
        .then((res) =>
          this.setState({ moviesArray: res.Search, loading: false })
        )
        .catch((err) => {
          console.error(err);
          this.setState({ loading: false });
        });
    } else if (type) {
      fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${type}`
      )
        .then((response) => response.json())
        .then((res) =>
          this.setState({ moviesArray: res.Search, loading: false })
        )
        .catch((err) => {
          console.error(err);
          this.setState({ loading: false });
        });
    }
  };

  render() {
    const { moviesArray, loading } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies moviesArr={moviesArray} />}
      </main>
    );
  }
}
