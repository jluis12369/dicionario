import styled, { css } from 'styled-components'

export const Title = styled.h1`
  font-size: 45px;
  color: purple;
  font-family: 'bold';
  text-align: center;
  margin-bottom: 50px;
  padding: 10px;
  text-shadow: 10px 10px 9px gray;

  @media (max-width: 600px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`

export const SearchPanel = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 400px;
  height: 35px;
  padding: 5px;
  text-align: center;
  font-size: 20px;
  font-family: 'regular';
  border: 2px solid black;
  border-radius: 15px;
  margin-right: 20px;

  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const SearchButton = styled.input.attrs({ type: 'button' })`
  background-color: purple;
  color: white;
  font-family: 'bold';
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  width: 150px;

  @media (max-width: 600px) {
    width: 30%;
    height: 30%;
    padding: 10px;
  }
`

export const ResultsFoundMessage = styled.span`
  font-family: 'regular';
  font-size: 15px;
  margin-bottom: 10px;
`

export const NoResultsFoundMessage = styled.span`
  font-family: 'bold';
`
