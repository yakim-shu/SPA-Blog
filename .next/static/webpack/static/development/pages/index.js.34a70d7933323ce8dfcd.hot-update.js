webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../src/components/home/Home */ "./src/components/home/Home.jsx");
/* harmony import */ var _src_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../src/actions */ "./src/actions.js");
/* harmony import */ var _src_webAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../src/webAPI */ "./src/webAPI.js");

var _jsxFileName = "/Users/yakim/Desktop/blog-spa/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const HomeContainer = props => {
  return __jsx(_src_components_home_Home__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

const mapStateToProps = ({
  posts
}, props) => ({
  postList: posts.postList.length > 0 ? posts.postList : props.ssrPostList,
  isLoading: posts.isLoading
});

const mapDispatchToProps = {
  getLimitPosts: _src_actions__WEBPACK_IMPORTED_MODULE_4__["Actions"].GET_LIMIT_POSTS
};
const IndexPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(HomeContainer);

IndexPage.getInitialProps = async () => {
  const res = await Object(_src_webAPI__WEBPACK_IMPORTED_MODULE_5__["getLimitPosts"])();
  const json = res.data;
  return {
    ssrPostList: json
  };
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.34a70d7933323ce8dfcd.hot-update.js.map