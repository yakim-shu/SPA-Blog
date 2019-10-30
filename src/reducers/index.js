import { combineReducers } from "redux";
import postsReducer from "./posts";
import msgReducer from "./msg";
import categoryReducer from "./category";
import searchReducer from "./search";

const reducer = combineReducers({
  posts: postsReducer,
  msg: msgReducer,
  category: categoryReducer,
  search: searchReducer,
});

export default reducer;