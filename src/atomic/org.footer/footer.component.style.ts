import styled from 'styled-components';
import { ZIndex, Color, FOOTER_HEIGHT } from '@/atomic/obj.constants/constants';
import { Theme } from '@/app/providers/theme.provider';
import type { ThemedProps } from '@/atomic/obj.globals/global.style';

export const FooterWrapper = styled.div<ThemedProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${FOOTER_HEIGHT};
  z-index: ${ZIndex.Top};
  background: ${(props) =>
    props.theme == Theme.Light ? Color.GrayLight : Color.Black};
`;
