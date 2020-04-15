import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchQuery: ""
  };

  //It sets search query in state when user enters it
  onInputChange = searchQuery => {
    this.setState({
      searchQuery
    });
  };

  //It captures query from state and pass it to search video prop
  handleSearch = () => {
    const searchQuery = this.state.searchQuery;
    if (searchQuery.length > 0) {
      this.props.searchVideo(searchQuery);
    }
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button onClick={this.handleSearch} className="ghost-btn">
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
