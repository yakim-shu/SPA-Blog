import React from 'react';
import Link from 'next/link';


const MyLogo = React.forwardRef(({ href }, ref) => (
  <a className="main-logo">
    For beginner
    <span>React Learning</span>
  </a>
))

const Logo = () => (
  <Link href="/">
    <MyLogo />
  </Link>
);

export default Logo;
