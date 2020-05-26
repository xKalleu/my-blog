import styled from "styled-components"
import { Link } from "gatsby"

import variables from '../../styles/variables'

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: ${variables.primaryColor};
  border-left: 1px solid #38444d;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color:  ${variables.whiteColor};
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &:hover {
    color: ${variables.quinaryColor};
  }
`