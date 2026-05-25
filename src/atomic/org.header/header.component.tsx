import { useLocation } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa6';

import { H3 } from '@/atomic/atm.typography/typography';
import SocialButtons from '@/atomic/mol.social/social.component';
import { Row, Col } from '@/atomic/obj.grid/grid.style';
import { Hbox } from '@/atomic/obj.hbox/hbox.component';
import {
  HeaderMenu,
  HeaderMenuWrapper,
  NavLink,
  ThemeIcon,
} from './header.component.style';
import { Theme, useTheme } from '@/app/providers/theme.provider';
import { Color } from '@/atomic/obj.constants/constants';

const Header = () => {
  const { theme, handleTheme } = useTheme();
  const { pathname } = useLocation();

  const isHomeActive = pathname === '/';
  const isBlogActive = pathname === '/blog' || pathname.startsWith('/blog/');

  const Astro = theme === Theme.Light ? FaMoon : FaSun;

  return (
    <>
      <HeaderMenuWrapper theme={theme}>
        <HeaderMenu theme={theme}>
          <Row>
            <Col>
              <Hbox>
                <Hbox.Item vAlign={'center'} noGrow>
                  <H3>Palamim</H3>
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item hAlign={'center'} vAlign={'center'}>
                  <Hbox>
                    <Hbox.Item noGrow>
                      <NavLink to={'/'} $isActive={isHomeActive} theme={theme}>
                        Home
                      </NavLink>
                    </Hbox.Item>{' '}
                    <Hbox.Separator />
                    <Hbox.Item noGrow>
                      <NavLink
                        to={'/blog'}
                        $isActive={isBlogActive}
                        theme={theme}
                      >
                        Blog
                      </NavLink>
                    </Hbox.Item>
                  </Hbox>
                </Hbox.Item>
                <Hbox.Separator />
                <Hbox.Item vAlign={'center'} noGrow>
                  <SocialButtons />
                </Hbox.Item>
              </Hbox>
            </Col>
          </Row>
        </HeaderMenu>
      </HeaderMenuWrapper>
      <ThemeIcon theme={theme} onClick={handleTheme}>
        <Astro color={Color.Accessory} size={'2em'} />
      </ThemeIcon>
    </>
  );
};

export default Header;
