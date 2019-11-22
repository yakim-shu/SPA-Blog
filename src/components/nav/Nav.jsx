import React, { Component } from 'react';
import Link from 'next/link';
import Logo from './../logo/Logo';
import debounce from 'lodash.debounce';
import Search from './../../containers/Search';

class Nav extends Component {
  state = {
    isFixed: false,
  };

  // 加入 debounce 延遲
  componentDidMount() {
    window.addEventListener("scroll", debounce(this.handleScroll, 50));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", debounce(this.handleScroll, 50));
  }

  handleScroll = () => {
    this.setState({
      isFixed: window.pageYOffset > 80
    })
  };

  render() {
    const { isFixed } = this.state;
    const { category } = this.props;

    return (
      <nav
        className={`navbar ${isFixed ? 'fixed' : ''}`} >
        <div className="navbar__inner">
          <Logo />
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="navbar__list menu">
            <li><Link href="/" activeClassName="active">Home</Link></li>
            <li><Link href="/posts" activeClassName="active">List</Link></li>
            <li className="dropdown">
              <Link href="/category" activeClassName="active">Category</Link>
              <div className="dropdown-content">
                {
                  category.map((item, index) => (
                    <Link href={`/category/${item}`} key={index}>{item}</Link>
                  ))
                }
              </div>
            </li>
            <li><Link href="/about" activeClassName="active">About</Link></li>
            <li><Link href="/add-post" activeClassName="active">AddPost</Link></li>
            <li><Search /></li>
          </ul>
        </div>
      </nav>
    )
  }
};

export default Nav;