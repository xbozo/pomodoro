import styled from 'styled-components'

interface TitleProps {
  fontSize: number
}

export const Title = styled.h1<TitleProps>`
  font-size: ${(props) => props.fontSize}px;
  background-color: #333;
`
