import styled from 'styled-components'

export const Container = styled.header`
  padding: 1rem 0;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 576px) {
    & {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    & {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    & {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    & {
      max-width: 1140px;
    }
  }
`