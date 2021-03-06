import EasyActions from "redux-easy-actions";
import * as WebAPI from './webAPI'

const { Actions, Constants } = EasyActions({
  /* posts --------- */
  GET_ALL_POSTS(type) {
    return {
      type,
      payload: WebAPI.getAllPosts()
    };
  },

  GET_LIMIT_POSTS(type) {
    return {
      type,
      payload: WebAPI.getLimitPosts()
    };
  },

  GET_CATEGORY_POSTS(type, name) {
    return {
      type,
      payload: WebAPI.getCategoryPosts(name)
    };
  },

  GET_POST(type, id) {
    return {
      type,
      payload: WebAPI.getPost(id)
    };
  },

  ADD_POST(type, post) {
    return {
      type,
      payload: WebAPI.addPost(post)
    };
  },

  DELETE_POST(type, id) {
    return {
      type,
      payload: WebAPI.deletePost(id)
    };
  },

  UPDATE_POST(type, post, id) {
    return {
      type,
      payload: WebAPI.updatePost(id, post)
    };
  },


  /* message --------- */
  SHOW_MSG(type, msgType, result) {
    return { type, msgType, result }
  },

  HIDE_MSG(type) {
    return { type }
  },


  /* search --------- */
  GET_SEARCH(type, query) {
    return {
      type,
      payload: WebAPI.getSearch(query)
    };
  },

  CLEAR_SEARCH(type) {
    return { type };
  },

});

export { Actions, Constants as ActionTypes };