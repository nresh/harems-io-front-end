import { Col, Row } from "react-bootstrap"
import React from "react"

import RasterImg from "./raster-img"

import styled from "@emotion/styled"

const TextImgSection = ({ markdown, img, hColors, children }) => {
  const Markdown = markdown;
  const Image = styled(RasterImg)`
    height: auto;
    width: 100%;
  `

  let hStyles = {};

  hColors.forEach((color, i) => {
    hStyles[`h1:nth-of-type(${i+1})`] = {
      color: color
    }
  })

  const StyledRow = styled(Row)`
    ${hStyles}
  `;

  return (
    <StyledRow className="sub-block justify-content-center pb-4" >
      <Col lg={7}>
        <Markdown />
      </Col>
      <Col lg={4} className="offset-lg-1">
        <Image src={img} alt={img} />
      </Col>
    </StyledRow>
  )
}

export default TextImgSection;
