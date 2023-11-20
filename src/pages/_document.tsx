import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head />
        <body className="bg-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
