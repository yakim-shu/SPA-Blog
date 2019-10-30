import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Suggestions = ({ results, handleReset }) => (
  results &&
  <ul className="search__result">
    {
      results.map(list => (
        <li key={list.id}>
          <Link to={`/posts/${list.id}`} onClick={handleReset}>{list.title}</Link>
        </li>
      ))
    }
  </ul>
)

class Search extends Component {
  state = {
    query: '',
  }

  componentDidUpdate(prevProps, prevState) {
    const { getSearch } = this.props;
    const { query } = this.state;
    if (prevState.query !== query) {
      if (query.length === 0) {
        this.handleReset();
        return;
      }

      getSearch(query);
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleReset = () => {
    const { clearSearch } = this.props;
    clearSearch();
    this.setState({
      query: '',
    })
  }


  render() {
    const { query } = this.state;
    const { results } = this.props;
    return (
      <form className="search">
        <div className="input">
          <input
            placeholder="Search"
            name='query'
            onChange={this.handleChange}
            autoComplete="off"
            value={query}
          />
        </div>
        <button className="submit">
          <span className="fas fa-search"></span>
        </button>
        <Suggestions results={results} handleReset={this.handleReset} />
      </form>
    )
  }
}


export default Search;
