import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
`

export const ItemTitle = styled.span`
  color: #101010;
  display: block;
  font-size: 1.2rem;
`

export const ItemShortDescription = styled.small`
  display: block;
  color: #404040;
  margin-top: .5rem;
  margin-left: 1rem;
  font-size: 1rem;
`

export const Item = styled.li`
  margin-bottom: 2rem;
  padding-left: 1rem;
  transition: all 150ms;
  border-left: 0.2rem solid ${(props) => props.theme.color.primary.light};
  
  &:hover {
    padding-left: 0.9rem;
    border-left: 0.4rem solid ${(props) => props.theme.color.primary.light};
  }
  a {
    text-decoration: none;
  }
`