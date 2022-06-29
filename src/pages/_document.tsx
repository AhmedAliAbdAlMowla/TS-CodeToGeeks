import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="modal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
