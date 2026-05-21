import styled from 'styled-components';
import {
  ZIndex,
  Shadow,
  Color,
  HEADER_MENU_HEIGHT,
  FontSize,
  Transition,
  Spacing,
} from '@/atomic/obj.constants/constants';
import { Container } from '@/atomic/obj.grid/grid.style';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const HeaderMenuWrapper = styled.div`
  width: 100vw;
  height: ${HEADER_MENU_HEIGHT};
  z-index: ${ZIndex.Top};
  overflow: hidden;
  background: ${Color.White};
  box-shadow: ${Shadow};
`;

export const HeaderMenu = styled(Container)`
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

interface NavLinkProps {
  $isActive: boolean;
}

export const NavLink = styled(RouterNavLink)<NavLinkProps>`
  text-decoration: none;
  font-size: ${FontSize.XSmall};
  color: ${Color.GrayXDark};
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
