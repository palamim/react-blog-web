import { createGlobalStyle } from 'styled-components';
import { Breakpoint, Color } from '@/atomic/obj.constants/constants';
import { Theme } from '@/app/providers/theme.provider';

export interface ThemedProps {
  theme: Theme;
}

export const GlobalStyle = createGlobalStyle<ThemedProps>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{ 
    background-color: ${(props) => (props.theme == Theme.Light ? Color.Background : Color.DarkBackground)};
    font-family: 'Lora', serif;
    color: ${(props) => (props.theme == Theme.Light ? Color.GrayXDark : Color.LightOrange)};
  }

  a {
    color: ${Color.Primary};
  }

  @media (min-width: 0px){
    html{
      font-size: 12px;
    }
  }

  @media (min-width: ${Breakpoint.Desktop}){
    html{
      font-size: 14px;
    }
  }

  @font-face {
    font-family: 'Lora';
    src: url('/fonts/lora-regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lora';
    src: url('/fonts/lora-bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;
