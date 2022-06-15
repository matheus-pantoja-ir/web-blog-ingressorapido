import styled from "styled-components";

export const ButtonContainer = styled.div`
  
`

export const IconBack = styled.i`
  border: solid ${props => props.theme.color.primary.dark};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`

export const TextButton = styled.span`
  margin: 0 0 0 .2rem;
  color: ${props => props.theme.color.primary.dark};
  font-size: 1rem;
  font-weight: bold;
`


export const Button = styled.button`
  display: flex;
  position: relative;
  margin: 0;
  padding: .5rem;
  background: none;
  border: none;
  
  &:hover {
    ${IconBack} {
      border: solid ${props => props.theme.color.secondary.light};
      border-width: 0 2px 2px 0;
    }
    ${TextButton} {
      color: ${props => props.theme.color.secondary.light};
      margin: 0 0 0 .3rem;
    }
  }
  
  &:before {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
`