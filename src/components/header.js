import { Helmet } from "react-helmet"
import NavBar from "./nav-bar"
import React from "react"

export default ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/ydg6cnn.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>
      <NavBar>Navigation</NavBar>
    </>
  )
}
