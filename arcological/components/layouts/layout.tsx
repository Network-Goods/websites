
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {

    const title = 'Arcological';
    const subtitle = 'The Arcological Association';
    return (
<html lang="en" dir="ltr">
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

    {/* favicon */}
    <link rel="shortcut icon" href="/favicon.ico" />

    {/* google fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap" rel="stylesheet" />

    {/* open graph */}
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="/favicon.ico" />

    {/* page title */}
    <title>{title} - {subtitle}</title>
  </Head>
  <body>
    <Header />
        <main id="main-content">{children}</main>
    <Footer />
  </body>
</html>


    )
}
  