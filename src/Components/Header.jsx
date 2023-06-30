import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
    padding: 5px;
    background-color: #c8dae7;
`
const Title=styled.h1`
    text-align: center;
`
function Header() {
  return (
    <Container>
        <Title>
            Image Slider
        </Title>
    </Container>
  )
}

export default Header