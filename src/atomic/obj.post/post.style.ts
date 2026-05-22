import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

import {
  Color,
  FontSize,
  FontWeight,
  LineHeight,
  Radius,
  Spacing,
} from '@/atomic/obj.constants/constants';
import { BodySecondary } from '@/atomic/atm.typography/typography';

export const Article = styled.article`
  & ${BodySecondary} {
    color: ${Color.GrayDark};
  }
`;

export const PostLink = styled(RouterNavLink)`
  display: block;
  text-decoration: none;
  font-size: ${FontSize.Medium};
  color: ${Color.Primary};
  &: hover {
    opacity: 0.8;
  }
`;

export const Prose = styled.div`
  /* Body Typography */
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Lighter};
  line-height: ${LineHeight.Medium};
  color: ${Color.GrayXDark};

  /* Paragraph Spacing & Line Breaks */
  & p {
    margin-bottom: 2em;
    white-space: pre-wrap;
  }

  /* Inline Highlighting (<mark>) */
  & mark {
    background-color: ${Color.LightOrange};
  }

  /* Lists & Bullet Points Fixing Overflow */
  & ul,
  & ol {
    margin-bottom: ${Spacing.Large};
    padding-left: ${Spacing.Large};
  }

  & li {
    margin-top: ${Spacing.XXSmall};
    margin-bottom: ${Spacing.XXSmall};
    word-break: break-word;
  }

  & blockquote {
    margin: 1.5rem 0;
    padding-left: 1rem;
    border-left: 4px solid ${Color.Primary};
    font-size: ${FontSize.XSmall};
    font-style: italic;
  }

  & pre {
    background-color: ${Color.GrayXDark};
    color: ${Color.GrayXLight};
    border-radius: ${Radius.XSmall};
    padding: ${Spacing.Medium};
    overflow-x: auto;
    border: 1px solid ${Color.Gray};
    margin-bottom: ${Spacing.Large};
  }

  & code {
    background-color: ${Color.GrayXDark};
    color: ${Color.GrayXLight};
    font-family: 'Courier New', Courier, monospace;
    font-size: ${FontSize.XSmall};
    padding: 0.2em 0.4em;
    border-radius: ${Radius.XXSmall};
  }

  & a {
    color: ${Color.Primary};
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }
`;
