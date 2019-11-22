import React from 'react'
import App from 'next/app'

import './../src/scss/index.scss';

import { withRedux } from './../src/withRedux';

class MyApp extends App {
 render() {
  const { Component, pageProps } = this.props
  return <Component {...pageProps} />
 }
}

export default withRedux(MyApp);