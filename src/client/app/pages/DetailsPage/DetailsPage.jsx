import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Page from '../../components/Page'
import MovieList from '../../components/MovieList'
import MovieDetails from '../../components/MovieDetails'
import * as pageActions from './data/DetailsPageActions'

class DetailsPage extends React.Component {
  constructor (props) {
    super(props);

    const title = props.match.params.title || '';
    if (title) {
      props.pageActions.getMovie(title);
    }

  }

  render () {
    return (
      <Page>
        <MovieDetails movie={this.props.page.movie} history={this.props.history}/>
      </Page>
    );
  }
}

function mapStateToProps (state) {
  return {
    page: state.detailsPage
  }
}

function mapDispatchToProps (dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);