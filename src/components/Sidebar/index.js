import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'


import * as S from './styled'

const Sidebar = () => (
  <S.SiderbarWrapper>
    <Profile />
    <SocialLinks />
  </S.SiderbarWrapper>
)

export default Sidebar