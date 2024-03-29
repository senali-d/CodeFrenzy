import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-indigo-50 dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
