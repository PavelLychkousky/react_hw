import React from 'react';
import {SearchPage} from '../../src/client/app/pages/SearchPage/SearchPage';
import {shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

let props;

beforeEach(() => {
  props = {
    page: {
      movies: []
    },
    match: {params: {}},
    pageActions: {
      searchMovies: jest.fn(),
      changeSort: jest.fn(),
      sort: jest.fn(),
      changeQuery: jest.fn(),
      changeSource: jest.fn()
    },
    history: []
  };
});

it('Should add history item from query string parameter', () => {
  let match = {
    params: {
      searchQuery: '123'
    }
  };
  props = {...props, match};
  shallow(<SearchPage {...props}/>);
  expect(props.history).toContain('/search/123');
});

it('should change source', () => {
  const wrapper = shallow(<SearchPage {...props}/>);
  const realComponentInstance = wrapper.instance();
  realComponentInstance.changeSort('value');
  expect(props.pageActions.searchMovies).toHaveBeenCalled();
});