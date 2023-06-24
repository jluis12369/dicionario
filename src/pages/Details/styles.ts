import styled from 'styled-components'

export const DetailsContainer = styled.div`
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 20px;
  }
`

export const DetailsTitle = styled.h1`
  font-family: 'bold';
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`

export const DetailsPanel = styled.div`
  width: 70%;
  padding: 20px;
  box-shadow: 10px 10px 30px #ccc;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`

export const DetailsPanelTitle = styled.h2`
  font-family: 'bold';
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`

export const DetailsList = styled.ul`
  list-style-type: square;
`

export const DetailsMetadata = styled.li`
  font-family: 'italic';
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const AudioPlayer = styled.audio`
  display: block;
  width: 100%;
  margin: 10px auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const BackButton = styled.button`
  width: 200px;
  background-color: purple;
  color: white;
  font-family: 'bold';
  padding: 10px 20px;
  font-size: 25px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  height: 50px;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 20px;
  }
`
