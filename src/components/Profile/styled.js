import styled from "styled-components"
import { Link } from "gatsby"
import variables from '../../styles/variables'

export const ProfileWrapper = styled.section `
  color: ${variables.whiteColor};
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: ${variables.whiteColor};
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${variables.quinaryColor};
  }
`

export const ProfileAuthor = styled.h1`
  font-size: ${variables.fontSizes.lg};
  margin: 0.5rem auto 1.5rem;
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: ${variables.fontSizes.xs};
  font-weight: 300;
`

export const ProfileDescription = styled.p`
  font-size: ${variables.fontSizes.base};
  font-weight: 300;
  line-height: 1.4;
`