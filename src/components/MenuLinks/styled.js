import styled from 'styled-components'
import { Link } from 'gatsby'
import variables from '../../styles/variables'

export const MenuLinksWrapper = styled.nav`

`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style: none;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: ${variables.quinaryColor};
  }
`

export const MenuLinksLink = styled(Link)`
  color: ${variables.whiteColor};
  text-decoration: none;
  trasition: color 0.5s;

  &:hover {
    color: ${variables.quinaryColor};
  }
`