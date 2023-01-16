import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Creative Producer</title>
        <meta property="og:title" content="Dynamic Creative Producer" />
      </Helmet>
    </div>
  )
}

export default Home
