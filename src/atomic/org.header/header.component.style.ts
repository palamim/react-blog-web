import styled from 'styled-components';
import {
  ZIndex,
  Shadow,
  Color,
  HEADER_MENU_HEIGHT,
} from '@/atomic/obj.constants/constants';
import { Container } from '@/atomic/obj.grid/grid.style';

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
