import styled from 'styled-components'

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 8px 8px;

  a {
    text-decoration: none;
    display: inherit;
  }
`

export const CardContainer = styled.div`
  border-radius: .5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.30);
  padding: 1rem;
  min-width: 200px;
  margin: .5rem;
  transition: box-shadow 0.3s ease-in-out;
  
  &:hover{
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.30);
  }
`

export const CardTitle = styled.span`
  color: #333333;
  font-size: 1.2rem;
  display: block;
`

export const CardDescription = styled.small`
  font-size: 0.8rem;
  color: rgb(70, 70, 70);
  display: block;
`