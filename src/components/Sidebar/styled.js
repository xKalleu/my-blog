import styled from 'styled-components'
import variables from '../../styles/variables'

export const SiderbarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid ${variables.secondaryColor};
  background: ${variables.primaryColor};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
`