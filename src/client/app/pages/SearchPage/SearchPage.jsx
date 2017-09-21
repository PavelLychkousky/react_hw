import React from 'react';

import Page from '../../components/Page'
import SearchBar from './SearchBar/SearchBar'
import SearchResultsInfo from './SearchResultsInfo/SearchResultsInfo'
import SearchResults from './SearchResults/SearchResults'
import movies from '../../test-data/dataMovies'

const sorts = [
  {value: 'rating', title: 'rating'},
  {value: 'releaseYear', title: 'release year'}
];

const sources = [
  {value: 'title', title: 'title'},
  {value: 'director', title: 'director'}
];

export default class SearchPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sortBy: sorts[0].value,
      source: sources[0].value
    };

    this.changeSort = this.changeSort.bind(this);
    this.changeSource = this.changeSource.bind(this);
    this.search = this.search.bind(this);
  }

  changeSort (sortValue) {
    this.setState({
      sortBy: sortValue
    });
  }

  changeSource (sourceValue) {
    this.setState({
      source: sourceValue
    });
  }

  search ({ searchQuery, filterBy }) {
    // TO DO
  }

  render () {
    return (
      <Page>
        <SearchBar
          sources={sources}
          changeSource={this.changeSource}
          selectedValue={this.state.source}
        />
        <SearchResultsInfo
          moviesAmount={movies.length}
          selectedValue={this.state.sortBy}
          options={sorts}
          changeSort={this.changeSort}
        />
        <SearchResults
          movies={movies}
        />
      </Page>
    );
  }
}