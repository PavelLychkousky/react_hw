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

    const query = this.props.match.params.searchQuery || '';
    this.state = {
      sortBy: sorts[0].value,
      source: sources[0].value,
      query: query,
      movies: this.doSearch(query, sources[0].value)
    };

    if (query) {
      this.search(query, sources[0].value);
    }

    this.changeSort = this.changeSort.bind(this);
    this.changeSource = this.changeSource.bind(this);
    this.changeQuery = this.changeQuery.bind(this);
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
    this.search('', sourceValue);
  }

  changeQuery (query) {
    this.setState({
      query: query
    });
    this.search(query);
  }

  search (query, source) {
    query = query || this.state.query;
    source = source || this.state.source;

    this.setState({
      movies: this.doSearch(query, source)
    });

    const searchUrl = '/search/' + query;
    this.props.history.push(searchUrl);
  }

  doSearch (query, source) {
    if (query) {
      return movies.filter(movie => movie[source].toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return [];
  }

  render () {
    return (
      <Page>
        <SearchBar
          sources={sources}
          changeSource={this.changeSource}
          selectedValue={this.state.source}
          search={this.changeQuery}
          query={this.state.query}
        />
        <SearchResultsInfo
          moviesAmount={this.state.movies.length}
          selectedValue={this.state.sortBy}
          options={sorts}
          changeSort={this.changeSort}
        />
        <SearchResults
          movies={this.state.movies}
          history={this.props.history}
        />
      </Page>
    );
  }
}