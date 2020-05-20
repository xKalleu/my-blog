import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'


import * as S from './styled'

const Sidebar = () => (
  <S.SiderbarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SiderbarWrapper>
)

export default Sidebar