import styled from 'styled-components'
import variables from '../../styles/variables'

export const LayoutWrapper = styled.section `
  display: flex;
`

export const LayoutMain = styled.main`
  background: ${variables.quaternaryColor};
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%; 
`