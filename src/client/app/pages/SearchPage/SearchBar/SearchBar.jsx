import React from 'react';

import styles from './SearchBar.less';
import Toggler from '../../../components/Toggler'
import Logo from '../../../components/Logo'
import Button from '../../../components/Button'

function SearchBar(props) {
  return (
    <div className="search-bar">
      <Logo />
      <div className="movie-search-container">
        <div className="title">find your movie</div>
        <input type="text"/>
        <div className="search-by">
          <div className="title">search by</div>
          <Toggler
            options={props.sources}
            selectedValue={props.selectedValue}
            onChange={props.changeSource}
          />
          <Button title="search" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;