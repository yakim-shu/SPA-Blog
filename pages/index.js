import React from 'react';
import { connect } from 'react-redux';
import Home from './../src/components/home/Home';
import { Actions } from './../src/actions';
import { getLimitPosts } from './../src/webAPI'

const HomeContainer = props => {
 return (<Home {...props} />);
}

const mapStateToProps = ({ posts }, props) => ({
 postList: posts.postList.length > 0 ? posts.postList : props.ssrPostList,
 isLoading: posts.isLoading,
});

const mapDispatchToProps = {
 getLimitPosts: Actions.GET_LIMIT_POSTS
}

const IndexPage = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

IndexPage.getInitialProps = async () => {
 const res = await getLimitPosts();
 const json = res.data;

 return {
  ssrPostList: json
 }
}


export default IndexPage
