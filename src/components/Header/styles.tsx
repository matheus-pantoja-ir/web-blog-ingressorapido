import styled from 'styled-components'

export const HeaderContainer = styled.header`
  border-bottom: 2px solid ${props => props.theme.color.primary.light};
  background: #fff;
`
export const HeaderContent = styled.div`
  padding: 1rem 0;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const BrandImg = styled.img`

`