(window.webpackJsonpblog=window.webpackJsonpblog||[]).push([[0],{100:function(e,t,a){},379:function(e,t,a){},381:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(19),l=a(8),i=a(3),u=a(4),p=a(6),m=a(5),d=a(7),E=a(2),g=a(18),h=function(){return r.a.createElement(E.b,{className:"main-logo",to:"/"},"For beginner",r.a.createElement("span",null,"React Learning"))},f=function(){return r.a.createElement("header",{className:"header"},r.a.createElement(h,null),r.a.createElement("p",{className:"header__description"},"\u6b64\u7ad9\u662f\u5b78\u7fd2 React \u7684\u7df4\u7fd2\u4f5c\u54c1\uff0c\u6587\u7ae0\u662f\u5e6b\u81ea\u5df1\u52a0\u5f37\u5370\u8c61\u7684\u5b78\u7fd2\u7b46\u8a18\uff0cHappy Coding !"))},y=function(){return r.a.createElement("section",{className:"about"},r.a.createElement("p",null,"\u55e8\uff01 \u6211\u662f Yakim\uff0c\u4e00\u500b\u9084\u5728\u52aa\u529b\u7684 ",r.a.createElement("span",null,"Front-End Developer")," \ud83c\udf85"),r.a.createElement("p",null,"\u76ee\u524d\u6b63\u53c3\u52a0",r.a.createElement("a",{href:"https://github.com/Lidemy/mentor-program-3rd"},"\u7a0b\u5f0f\u5c0e\u5e2b\u8a08\u756b\u7b2c\u4e09\u671f"),"\uff0c\u800c\u9019\u500b blog \u4e5f\u662f\u8ab2\u7a0b\u4e2d\u7684\u7df4\u7fd2\u4f5c\u54c1\u4e4b\u4e00\u3002"),r.a.createElement("p",null,"\u7528\u8077\u7a31\u4ecb\u7d39\u81ea\u5df1\u986f\u5f97\u6709\u9ede\u7121\u804a\uff0c\u6240\u4ee5\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u9ad4\u529b\u5f88\u5dee\u4f46\u53c8\u4e0d\u81ea\u91cf\u529b\u611b\u722c\u5c71"),r.a.createElement("li",null,"\u559c\u6b61\u5f88\u71d9\u7684\u98df\u7269"),r.a.createElement("li",null,"\u5c0d HUNTER\xd7HUNTER \u9ed1\u6697\u5927\u9678\u7bc7\u56b4\u91cd\u81c9\u76f2"),r.a.createElement("li",null,"\u670b\u53cb\u804a\u661f\u5ea7\u7684\u6642\u5019\u63d2\u4e0d\u4e0a\u8a71"),r.a.createElement("li",null,"\u5403\u96de\u6392\u6642\u5e38\u611f\u89ba\u53e3\u8154\u88ab\u522e\u50b7")),r.a.createElement("blockquote",null,"Feel free to ",r.a.createElement("a",{href:"mailto:toromilk80129@gmail.com",target:"_blank",rel:"noreferrer noopener"},"drop me a message")," and say hi. \ud83d\udc4b"))},b=a(41),v=a.n(b),O=a(14),P=function(e){var t=e.results,a=e.handleReset;return t&&r.a.createElement("ul",{className:"search__result"},t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(E.b,{to:"/posts/".concat(e.id),onClick:a},e.title))}))},_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleReset=function(){(0,a.props.clearSearch)(),a.setState({query:""})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.getSearch,n=this.state.query;if(t.query!==n){if(0===n.length)return void this.handleReset();a(n)}}},{key:"render",value:function(){var e=this.state.query,t=this.props.results;return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"input"},r.a.createElement("input",{placeholder:"Search",name:"query",onChange:this.handleChange,autoComplete:"off",value:e})),r.a.createElement("button",{className:"submit"},r.a.createElement("span",{className:"fas fa-search"})),r.a.createElement(P,{results:t,handleReset:this.handleReset}))}}]),t}(n.Component),L=a(64),S=a.n(L),j=a(65),N="https://blog-api.yakim.tw/posts",D=a.n(j).a.create({baseURL:N,timeout:1e3}),T=function(e){return D.get("/".concat(e))},C=function(e){return D.post(N,e)},w=function(e){return D.delete("/".concat(e))},A=function(e,t){return D.put("/".concat(e),t)},k=function(e){return D.get("?title_like=".concat(e))},G=S()({GET_ALL_POSTS:function(e){return{type:e,payload:D.get("?".concat("_sort=id&_order=desc"))}},GET_LIMIT_POSTS:function(e){return{type:e,payload:D.get("?".concat("_sort=id&_order=asc","&").concat("_limit=5"))}},GET_CATEGORY_POSTS:function(e,t){return{type:e,payload:(a=t,D.get("?".concat("_sort=id&_order=asc","&category=").concat(a)))};var a},GET_POST:function(e,t){return{type:e,payload:T(t)}},ADD_POST:function(e,t){return{type:e,payload:C(t)}},DELETE_POST:function(e,t){return{type:e,payload:w(t)}},UPDATE_POST:function(e,t,a){return{type:e,payload:A(a,t)}},SHOW_MSG:function(e,t,a){return{type:e,msgType:t,result:a}},HIDE_MSG:function(e){return{type:e}},GET_SEARCH:function(e,t){return{type:e,payload:k(t)}},CLEAR_SEARCH:function(e){return{type:e}}}),M=G.Actions,R=G.Constants,I={getSearch:M.GET_SEARCH,clearSearch:M.CLEAR_SEARCH},U=Object(l.b)(function(e){return{results:e.search.results}},I)(function(e){return r.a.createElement(_,e)}),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isFixed:!1},a.handleScroll=function(){a.setState({isFixed:window.pageYOffset>80})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",v()(this.handleScroll,50))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",v()(this.handleScroll,50))}},{key:"render",value:function(){var e=this.state.isFixed,t=this.props.category;return r.a.createElement("nav",{className:"navbar ".concat(e?"fixed":"")},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement(h,null),r.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),r.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},r.a.createElement("span",{className:"navicon"})),r.a.createElement("ul",{className:"navbar__list menu"},r.a.createElement("li",null,r.a.createElement(E.c,{exact:!0,to:"/",activeClassName:"active"},"Home")),r.a.createElement("li",null,r.a.createElement(E.c,{to:"/posts",activeClassName:"active"},"List")),r.a.createElement("li",{className:"dropdown"},r.a.createElement(E.c,{to:"/category",activeClassName:"active"},"Category"),r.a.createElement("div",{className:"dropdown-content"},t.map(function(e,t){return r.a.createElement(E.c,{to:"/category/".concat(e),key:t},e)}))),r.a.createElement("li",null,r.a.createElement(E.c,{to:"/about",activeClassName:"active"},"About")),r.a.createElement("li",null,r.a.createElement(E.c,{to:"/add-post",activeClassName:"active"},"AddPost")),r.a.createElement("li",null,r.a.createElement(U,null)))))}}]),t}(n.Component),H=Object(l.b)(function(e){return e},null)(function(e){return r.a.createElement(F,e)}),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).msgContent={addPost:{successMsg:"\u65b0\u589e\u6587\u7ae0\u6210\u529f",errorMsg:"\u65b0\u589e\u6587\u7ae0\u5931\u6557"},deletePost:{successMsg:"\u522a\u9664\u6587\u7ae0\u6210\u529f",errorMsg:"\u522a\u9664\u6587\u7ae0\u5931\u6557"},updatePost:{successMsg:"\u7de8\u8f2f\u6587\u7ae0\u6210\u529f",errorMsg:"\u7de8\u8f2f\u6587\u7ae0\u5931\u6557"}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.hideMsg;this.timer=setTimeout(e,2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props.msg;return r.a.createElement("div",{className:"msg"},e.isSuccess?this.msgContent[e.type].successMsg:this.msgContent[e.type].errorMsg)}}]),t}(n.Component),q=function(e){var t=e.msg,a=e.hideMsg;return t.isActive&&r.a.createElement(x,{msg:t,hideMsg:a})},W={hideMsg:M.HIDE_MSG},Y=Object(l.b)(function(e){return{msg:e.msg}},W)(function(e){return r.a.createElement(q,e)});function B(e){return e?new Date(e).toDateString().substr(4,6):"who knows ?"}function J(e){return e?new Date(e).toDateString().substr(-4):"who knows ?"}var V=a(66),z=a.n(V),$=(a(100),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement(z.a,{sizeUnit:"px",size:10,color:"#25d0fec2",loading:!0}))}),K=a(67),Q=a.n(K),X=function(e){var t=e.post;return r.a.createElement("div",{className:"home-list__item-inner"},r.a.createElement("div",{className:"home-list__title"},r.a.createElement("span",null,B(t.createdAt)),r.a.createElement("h3",null,t.title)),r.a.createElement("p",{className:"home-list__description"},t.body))},Z=function(e){var t=e.src;return r.a.createElement("div",{className:"pic"},r.a.createElement(Q.a,{src:t,loader:r.a.createElement($,null)}))},ee=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){(0,this.props.getLimitPosts)()}},{key:"render",value:function(){var e=this.props,t=e.postList;return e.isLoading?r.a.createElement($,null):r.a.createElement("div",{className:"home-list"},t.map(function(e){return r.a.createElement("section",{key:e.id,className:"home-list__item"},r.a.createElement(E.b,{to:"/posts/".concat(e.id)},r.a.createElement(Z,{src:e.pic}),r.a.createElement(X,{post:e})))}))}}]),t}(n.Component),te=Object(g.e)(ee),ae={getLimitPosts:M.GET_LIMIT_POSTS},ne=Object(l.b)(function(e){var t=e.posts;return{postList:t.postList,isLoading:t.isLoading}},ae)(function(e){return r.a.createElement(te,e)}),re=function(e){var t=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"submit",className:"add-post__submit btn-submit"},"Submit"),t&&r.a.createElement(E.b,{className:"btn-back",to:"/posts"},"Back"))},oe=function(e){var t=e.category,a=e.handleChange,n=e.categoryList;return r.a.createElement("select",{name:"category",className:"select",defaultValue:t,onChange:a},n.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))},ce=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.addPost,r=t.updatePost;a.id?r(a.state,a.id):n(a.state)},a.id=a.props.match.params.id,a.state={author:"",title:"",body:"",category:a.props.categoryList[0]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){if(this.id){var e=this.props,t=e.getPost,a=e.post;t(this.id),this.setState(a)}}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.history,n=t.isLoadingAddPost,r=t.isLoadingUpdatePost,o=t.addPostError,c=t.updatePostError,s=t.showMsg;if(e.isLoadingAddPost===n||n){if(e.isLoadingUpdatePost!==r&&!r){if(c)return void s("updatePost",!1);s("updatePost",!0),a.push("/posts")}}else{if(o)return void s("addPost",!1);s("addPost",!0),a.push("/posts")}}},{key:"render",value:function(){var e=this.state,t=e.author,a=e.title,n=e.body,o=e.category,c=this.props.categoryList;return r.a.createElement("section",{className:"add-post"},r.a.createElement("h2",null,this.id?"\u7de8\u8f2f\u6587\u7ae0":"\u65b0\u589e\u6587\u7ae0"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("ul",null,r.a.createElement("li",{className:"add-post__author"},r.a.createElement("input",{type:"text",name:"author",defaultValue:t,onChange:this.handleChange,required:!0}),r.a.createElement("label",null,"\u6587\u7ae0\u4f5c\u8005")),r.a.createElement("li",{className:"add-post__title"},r.a.createElement("input",{type:"text",name:"title",defaultValue:a,onChange:this.handleChange,required:!0}),r.a.createElement("label",null,"\u6587\u7ae0\u6a19\u984c")),r.a.createElement("li",{className:"add-post__category box"},r.a.createElement("label",null,"\u5206\u985e\uff1a"),r.a.createElement(oe,{category:o,handleChange:this.handleChange,categoryList:c})),r.a.createElement("li",{className:"add-post__content"},r.a.createElement("label",{className:"theme--1"},"\u6587\u7ae0\u5167\u5bb9"),r.a.createElement("textarea",{className:"input-textarea",cols:"30",rows:"5",name:"body",onChange:this.handleChange,value:n,required:!0}))),r.a.createElement(re,{id:this.id})))}}]),t}(n.Component),se={addPost:M.ADD_POST,getPost:M.GET_POST,updatePost:M.UPDATE_POST,showMsg:M.SHOW_MSG},le=Object(l.b)(function(e){var t=e.posts,a=e.category;return{post:t.post,isLoadingAddPost:t.isLoadingAddPost,isLoadingUpdatePost:t.isLoadingUpdatePost,addPostError:t.addPostError,upadatePostError:t.updatePostError,categoryList:a}},se)(function(e){return r.a.createElement(ce,e)}),ie=function(e){var t=e.post;return r.a.createElement(E.b,{to:"/posts/".concat(t.id),className:"post"},r.a.createElement("p",{className:"post__date"},r.a.createElement("span",null,B(t.createdAt)),J(t.createdAt)),r.a.createElement("h4",{className:"post__title"},t.title),r.a.createElement("p",{className:"post__description"},t.body))},ue=function(){return r.a.createElement("p",{className:"post__status"},"\u6c92\u6709\u6587\u7ae0",r.a.createElement("span",{role:"img","aria-label":"Nauseated Face"}," \ud83e\udd22"))},pe=function(e){var t=e.category,a=e.postList;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"post-list__title"},t||"\u5168\u90e8\u6587\u7ae0"),r.a.createElement("div",{className:"post-list"},a.length?a.map(function(e){return r.a.createElement(ie,{post:e,key:e.id})}):r.a.createElement(ue,null)))},me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={category:a.props.match.params.category,isCategoryList:"/category"===a.props.match.path},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getAllPosts,a=e.getCategoryPosts,n=this.state.category;n?a(n):t()}},{key:"componentDidUpdate",value:function(e){var t=this.props.getCategoryPosts,a=this.state.category,n=this.props.match.params.category;a&&e.match.params.category!==n&&(t(n),this.updateCategory(n))}},{key:"updateCategory",value:function(e){this.setState({category:e})}},{key:"render",value:function(){var e=this.props,t=e.postList,a=e.isLoading,n=e.categoryList,o=this.state,c=o.category,s=o.isCategoryList;return a?r.a.createElement($,null):s?n.map(function(e,a){return r.a.createElement(pe,{key:a,category:e,postList:t.filter(function(t){return t.category===e})})}):r.a.createElement(pe,{postList:t,category:c})}}]),t}(n.Component),de=Object(g.e)(me),Ee={getAllPosts:M.GET_ALL_POSTS,getCategoryPosts:M.GET_CATEGORY_POSTS},ge=Object(l.b)(function(e){var t=e.posts,a=e.category;return{postList:t.postList,isLoading:t.isLoading,categoryList:a}},Ee)(function(e){return r.a.createElement(de,e)}),he=a(68),fe=a.n(he),ye=a(386),be=a(385),ve=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return r.a.createElement(ye.a,{language:t,style:be.a},a)}}]),t}(r.a.PureComponent);ve.defaultProps={language:null};var Oe=function(e){var t=e.post;return r.a.createElement("div",{className:"article__info"},r.a.createElement("p",{className:"article__author"},t.author),r.a.createElement("p",{className:"article__date"},B(t.createdAt)))},Pe=function(e){var t=e.post;return r.a.createElement("p",{className:"article__category"},"category:",r.a.createElement(E.b,{to:"/category/".concat(t.category)},t.category))},_e=function(e){var t=e.post;return t.pic?r.a.createElement("div",{className:"pic article__cover"},r.a.createElement("img",{src:t.pic,alt:""})):null},Le=function(e){var t=e.post;return r.a.createElement("div",{className:"article__body"},r.a.createElement(fe.a,{source:t.body,renderers:{code:ve}}))},Se=function(e){var t=e.post,a=e.handleDelete;return r.a.createElement("div",{className:"article__operate"},r.a.createElement(E.b,{className:"btn btn-back active",to:"/posts"},"Back"),r.a.createElement(E.b,{className:"btn btn-edit",to:"/edit-post/".concat(t.id)},"Edit"),r.a.createElement("button",{className:"btn btn-delete",onClick:a},"Delete"))},je=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleDelete=function(){var e=a.props,t=e.post,n=e.deletePost,r=e.history,o=e.showMsg;n(t.id,r,o)},a.postId=a.props.match.params.id,a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getPost)(this.postId)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.history,n=t.isLoadingDeletePost,r=t.showMsg,o=t.deletePostError,c=t.getPost,s=this.props.match.params.id;if(Number(s)===e.post.id){if(e.isLoadingDeletePost!==n&&!n){if(o)return void r("deletePost",!1);r("deletePost",!0),a.push("/posts")}}else c(s)}},{key:"render",value:function(){var e=this.props,t=e.post;return e.isLoadingGetPost?r.a.createElement($,null):r.a.createElement("section",{className:"article"},r.a.createElement("h2",{className:"article__title"},t.title),r.a.createElement(Pe,{post:t}),r.a.createElement(_e,{post:t}),r.a.createElement(Le,{post:t}),r.a.createElement(Oe,{post:t}),r.a.createElement(Se,{post:t,handleDelete:this.handleDelete}))}}]),t}(n.Component),Ne={getPost:M.GET_POST,deletePost:M.DELETE_POST,showMsg:M.SHOW_MSG},De=Object(l.b)(function(e){var t=e.posts;return{post:t.post,isLoadingDeletePost:t.isLoadingDeletePost,isLoadingGetPost:t.isLoadingGetPost,deletePostError:t.deletePostError}},Ne)(function(e){return r.a.createElement(je,e)}),Te=(a(379),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{basename:"/SPA-Blog"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(H,null),r.a.createElement(f,null),r.a.createElement("main",{className:"container"},r.a.createElement(Y,null),r.a.createElement(g.a,{path:"/",exact:!0,component:ne}),r.a.createElement(g.a,{path:"/about",component:y}),r.a.createElement(g.a,{exact:!0,path:"/posts",component:ge}),r.a.createElement(g.a,{exact:!0,path:"/category",component:ge}),r.a.createElement(g.a,{exact:!0,path:"/category/:category",component:ge}),r.a.createElement(g.a,{path:"/posts/:id",component:De}),r.a.createElement(g.a,{path:"/add-post",component:le}),r.a.createElement(g.a,{path:"/edit-post/:id",component:le}))))}}]),t}(n.Component));function Ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ce(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ce(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ae={postList:[],post:{},isLoading:!1,isLoadingAddPost:!1,isLoadingGetPost:!1,isLoadingDeletePost:!1,isLoadingUpdatePost:!1,addPostError:null,updatePostError:null,deletePostError:null};function ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ke(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ke(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Me={isActive:!1,isSuccess:!1,type:""};var Re=["React \u57fa\u790e","React \u751f\u547d\u9031\u671f"];function Ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ie(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ie(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Fe={results:null,isLoadingResults:!1};var He=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(R.GET_ALL_POSTS,"_PENDING"):case"".concat(R.GET_LIMIT_POSTS,"_PENDING"):case"".concat(R.GET_CATEGORY_POSTS,"_PENDING"):return we({},e,{isLoading:!0});case"".concat(R.GET_ALL_POSTS,"_FULFILLED"):case"".concat(R.GET_LIMIT_POSTS,"_FULFILLED"):case"".concat(R.GET_CATEGORY_POSTS,"_FULFILLED"):return we({},e,{isLoading:!1,postList:t.payload.data});case"".concat(R.GET_POST,"_PENDING"):return we({},e,{isLoadingGetPost:!0});case"".concat(R.GET_POST,"_FULFILLED"):return we({},e,{isLoadingGetPost:!1,post:t.payload.data});case"".concat(R.ADD_POST,"_PENDING"):return we({},e,{isLoadingAddPost:!0});case"".concat(R.ADD_POST,"_FULFILLED"):return we({},e,{isLoadingAddPost:!1});case"".concat(R.ADD_POST,"_REJECTED"):return we({},e,{addPostError:!0});case"".concat(R.DELETE_POST,"_PENDING"):return we({},e,{isLoadingDeletePost:!0});case"".concat(R.DELETE_POST,"_FULFILLED"):return we({},e,{isLoadingDeletePost:!1});case"".concat(R.DELETE_POST,"_REJECTED"):return we({},e,{deletePostError:!0});case"".concat(R.UPDATE_POST,"_PENDING"):return we({},e,{isLoadingUpdatePost:!0});case"".concat(R.UPDATE_POST,"_FULFILLED"):return we({},e,{isLoadingUpdatePost:!1});case"".concat(R.UPDATE_POST,"_REJECTED"):return we({},e,{updatePostError:!0});default:return e}},msg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.SHOW_MSG:return Ge({},e,{isActive:!0,isSuccess:t.result,type:t.msgType});case R.HIDE_MSG:return Ge({},e,{isActive:!1});default:return e}},category:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(R.GET_SEARCH,"_PENDING"):return Ue({},e,{isLoadingResults:!0});case"".concat(R.GET_SEARCH,"_FULFILLED"):return Ue({},e,{results:t.payload.data,isLoadingResults:!1});case"".concat(R.CLEAR_SEARCH):return Ue({},e,{results:null});default:return e}}}),xe=(a(380),a(71)),qe=Object(s.a)(xe.a)(s.d);c.a.render(r.a.createElement(l.a,{store:qe(He)},r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(381)}},[[72,1,2]]]);
//# sourceMappingURL=main.f1d38303.chunk.js.map