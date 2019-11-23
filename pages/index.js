import React from 'react';
import { connect } from 'react-redux';
import Home from './../src/components/home/Home';
import { Actions } from './../src/actions';
import { withRedux } from './../src/withRedux';

const HomeContainer = props => {
 return (<Home {...props} />);
}

const mapStateToProps = ({ posts }, props) => ({
 postList: posts.postList || [],
 isLoading: posts.isLoading,
});

const IndexPage = connect(mapStateToProps)(HomeContainer);

IndexPage.getInitialProps = async ({ reduxStore }) => {
 await reduxStore.dispatch(Actions.GET_LIMIT_POSTS());

 return {}
}


export default withRedux(IndexPage)
