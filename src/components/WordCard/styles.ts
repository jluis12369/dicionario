import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const WordCardPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 10px 10px 20px #ddd;

  @media (max-width: 600px) {
    width: 90%;
    margin: 10px auto;
  }
`

export const WordTitle = styled.h1`
  font-family: 'bold italic';
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 5px;
  }
`

export const WordDetailsLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

export const WordDetailsText = styled.span`
  font-family: 'regular';
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

