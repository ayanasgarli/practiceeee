import React from 'react'
import Items from '../Items'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/25/25694.png"/>
      </Helmet>
    <Items/>
    </>
  )
}

export default Home