import styled from "styled-components"
import variables from '../../styles/variables'

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: ${variables.whiteColor};
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: ${variables.quinaryColor};
  }
`

export const IconWrapper = styled.div`
  fill: ${variables.whiteColor};
  width: 30px;
  height: 30px;
`