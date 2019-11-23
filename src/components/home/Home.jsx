import React, { Component } from 'react';
import { getDate } from './../../utils';
// import Spinner from '../spinner/Spinner';
import Img from 'react-image';
import Link from 'next/link';

const ListContent = ({ post }) => (
  <div className="home-list__item-inner">
    <div className="home-list__title">
      <span>{getDate(post.createdAt)}</span>
      <h3>{post.title}</h3>
    </div>
    <p className="home-list__description">{post.body}</p>
  </div>
)

const ListImg = ({ src }) => (
  <div className="pic">
    {/* <Img src={src} loader={<Spinner />} /> */}
    <Img src={src} />
  </div>
);


class Home extends Component {
  render() {
    const { postList, isLoading } = this.props;

    // if (isLoading) return <Spinner />;
    return (
      <div className="home-list">
        {
          postList.map(post => (
            <section key={post.id} className="home-list__item">
              <Link href={`/posts/${post.id}`}>
                <>
                  <ListImg src={post.pic} />
                  <ListContent post={post} />
                </>
              </Link>
            </section>
          ))
        }
      </div>
    )
  }
}

export default Home;
