// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from 'react';
import Nav from './../src/containers/Nav';
import Header from './../src/components/header/Header';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
 static async getInitialProps(ctx) {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
 }

 render() {
  return (
   <Html>
    <Head />
    <body>
     <div className="wrapper" >
      <Nav />
      <Header />
      <main className="container">
       <Main />
       <NextScript />
      </main>
     </div>
    </body>
   </Html>
  )
 }
}

export default MyDocument