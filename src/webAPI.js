import axios from 'axios';

// url parameters
const baseUrl = 'https://blog-api.yakim.tw/posts';
const sort = '_sort=id';
const sortASC = sort + '&_order=asc';
const sortDESC = sort + '&_order=desc';

const LIMIT_NUM = 5;
const limit = '_limit=' + LIMIT_NUM;

let instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});

// action creators
export const getAllPosts = () => instance.get(`?${sortDESC}`)

export const getLimitPosts = () => instance.get(`?${sortASC}&${limit}`)

export const getCategoryPosts = (category) => instance.get(`?${sortASC}&category=${category}`)

export const getPost = id => instance.get(`/${id}`)

export const addPost = post => instance.post(baseUrl, post)

export const deletePost = id => instance.delete(`/${id}`)

export const updatePost = (id, post) => instance.put(`/${id}`, post)

export const getSearch = (query) => instance.get(`?title_like=${query}`)