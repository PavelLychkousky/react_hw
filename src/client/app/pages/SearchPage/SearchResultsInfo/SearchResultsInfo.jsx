import React from 'react';

import styles from './SearchResultsInfo.less'
import Toggler from '../../../components/Toggler'

export default class SearchResultsInfo extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="search-results-info">
        <div className="result-amount">{this.props.moviesAmount} movies found</div>
        <div className="sort-by">
          <div className="title">search by</div>
          <Toggler
            options={this.props.options}
            selectedValue={this.props.selectedValue}
            onChange={this.props.changeSort}
          />
        </div>
      </div>
    );
  }
}