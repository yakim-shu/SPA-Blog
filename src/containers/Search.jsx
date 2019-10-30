import React from 'react';
import { connect } from 'react-redux';
import Search from './../components/search/Search';
import { Actions } from './../actions';

const SearchContainer = props => (<Search {...props} />);

const mapStateToProps = ({ search }) => ({
  results: search.results,
});
const mapDispatchToProps = {
  getSearch: Actions.GET_SEARCH,
  clearSearch: Actions.CLEAR_SEARCH,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)