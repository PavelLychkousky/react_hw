import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styles from './DetailsPage.less'
import Page from '../../components/Page'
import MovieList from '../../components/MovieList'
import MovieDetails from '../../components/MovieDetails'
import * as pageActions from './data/DetailsPageActions'

function DetailsPage (props) {
  const title = props.match.params.title || '';
  if (title) {
    props.pageActions.getMovie(title);
  }

  return (
    <Page>
      <MovieDetails movie={props.page.movie} history={props.history}/>
    </Page>
  );
}

function mapStateToProps (state) {
  return {
    page: state.detailsPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);