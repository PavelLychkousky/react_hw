import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Page from '../../components/Page'
import SearchBar from './SearchBar/SearchBar'
import SearchResultsInfo from './SearchResultsInfo/SearchResultsInfo'
import SearchResults from './SearchResults/SearchResults'
import * as pageActions from './data/SearchPageActions'
import {SORTS, SOURCES} from './data/consts'

class SearchPage extends React.Component {
  constructor (props) {
    super(props);

    this.changeSort = this.changeSort.bind(this);
    this.changeSource = this.changeSource.bind(this);
    this.changeQuery = this.changeQuery.bind(this);

  }

  componentWillMount () {
    const query = this.props.match.params.searchQuery || '';
    this.changeQuery(query);
  }

  changeSort (sortValue) {
    this.props.pageActions.changeSort(sortValue);
    this.props.pageActions.sort(this.props.page.movies, sortValue);
  }

  changeSource (sourceValue) {
    this.props.pageActions.changeSource(sourceValue);
  }

  changeQuery (query) {
    this.props.pageActions.searchMovies(query, this.props.page.sortBy);

    const searchUrl = '/search/' + query;
    this.props.history.push(searchUrl);
  }

  render () {
    return (
      <Page>
        <SearchBar
          sources={SOURCES}
          changeSource={this.changeSource}
          selectedValue={this.props.page.source}
          search={this.changeQuery}
          query={this.props.page.query}
        />
        <SearchResultsInfo
          moviesAmount={this.props.page.movies.length}
          selectedValue={this.props.page.sortBy}
          options={SORTS}
          changeSort={this.changeSort}
        />
        <SearchResults
          movies={this.props.page.movies}
          history={this.props.history}
        />
      </Page>
    );
  }
}

function mapStateToProps (state) {
  return {
    page: state.searchPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);