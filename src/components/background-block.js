import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import React from "react"

export default (props) => {
  const fileName = props.src;
  const data = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }`
    );

  const image = data.allFile.edges.find(
    edge => edge.node.name === fileName).node.childImageSharp.fluid;

  return(
    <BackgroundImage
      Tag="div"
      className="center-content"
      fluid={image}
      style={{
        backgroundPosition: props.position || "top",
        minHeight: props.minHeight,
        maxHeight: props.maxHeight,
        width: "auto"
      }}
    >
      {props.children}
    </BackgroundImage>
  )
}
