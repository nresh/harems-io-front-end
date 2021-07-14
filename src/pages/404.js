import BackgroundBlock from "../components/background-block"
import MissingPageMDX from "../content/missing"
import Layout from "../components/layout"
import React from "react"

export default () => {
  return (
    <Layout>
      <BackgroundBlock src="Contact_Us" minHeight="70vh">
        <MissingPageMDX />
      </BackgroundBlock>
    </Layout>
  )
}
