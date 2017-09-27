import React from 'react';

import styles from './SearchBar.less';
import Toggler from '../../../components/Toggler'
import Logo from '../../../components/Logo'
import Button from '../../../components/Button'

export default class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      query: this.props.query
    };

    this.search = this.search.bind(this);
    this.changeQuery = this.changeQuery.bind(this);
  }

  search () {
    this.props.search(this.state.query);
  }

  changeQuery (evt) {
    this.setState({query: evt.currentTarget.value});
  }

  render () {
    return (
      <div className="search-bar">
        <Logo />
        <div className="movie-search-container">
          <div className="title">find your movie</div>
          <input type="text" onChange={this.changeQuery} value={this.state.query}/>
          <div className="search-by">
            <div className="title">search by</div>
            <Toggler
              options={this.props.sources}
              selectedValue={this.props.selectedValue}
              onChange={this.props.changeSource}
            />
            <Button title="search" onClick={this.search}/>
          </div>
        </div>
      </div>
    )
  }
}
