import styled from 'styled-components';
import {
  ZIndex,
  Shadow,
  Color,
  HEADER_MENU_HEIGHT,
  FontSize,
  Transition,
  Spacing,
  Radius,
} from '@/atomic/obj.constants/constants';
import { Container } from '@/atomic/obj.grid/grid.style';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Theme } from '@/app/providers/theme.provider';
import type { ThemedProps } from '../obj.globals/global.style';

export const HeaderMenuWrapper = styled.div<ThemedProps>`
  width: 100vw;
  height: ${HEADER_MENU_HEIGHT};
  z-index: ${ZIndex.Top};
  overflow: hidden;
  background: ${(props) =>
    props.theme == Theme.Light ? Color.White : Color.Black};
  ${(props) => (props.theme == Theme.Light ? `box-shadow: ${Shadow};` : '')}
`;

export const HeaderMenu = styled(Container)<ThemedProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  & h3 {
    margin: 0;
    line-height: 0;
  }
`;

interface NavLinkProps extends ThemedProps {
  $isActive: boolean;
}

export const NavLink = styled(RouterNavLink)<NavLinkProps>`
  text-decoration: none;
  font-size: ${FontSize.XSmall};
  color: ${(props) =>
    props.theme == Theme.Light ? Color.GrayXDark : Color.LightOrange};
  position: relative;
  padding: ${Spacing.XSmall} 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${Spacing.XXSmall};
    background-color: ${Color.Primary};

    /* Straightforward prop evaluation */
    transform: ${(props) => (props.$isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform ${Transition.Fast} ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const ThemeIcon = styled.button<ThemedProps>`
  position: absolute;
  top: calc(${HEADER_MENU_HEIGHT} + ${Spacing.Small});
  right: ${Spacing.Small};

  padding: ${Spacing.XSmall};
  width: 50px;
  height: 50px;
  border: none;
  border-radius: ${Radius.Large};
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  background-color: ${(props) =>
    props.theme === Theme.Light ? Color.White : Color.GrayXDark};
`;
