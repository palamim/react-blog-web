import {
  BodySecondary,
  H3,
  LinkStyled,
} from '@/atomic/atm.typography/typography';
import SocialButtons from '@/atomic/mol.social/social.component';
import { Row, Col } from '@/atomic/obj.grid/grid.style';
import { Hbox } from '@/atomic/obj.hbox/hbox.component';
import { HeaderMenu, HeaderMenuWrapper } from './header.component.style';

const Header = () => {
  return (
    <HeaderMenuWrapper>
      <HeaderMenu>
        <Row>
          <Col>
            <Hbox>
              <Hbox.Item vAlign={'center'} noGrow>
                <H3>Palamim</H3>
              </Hbox.Item>
              <Hbox.Separator />
              <Hbox.Item hAlign={'center'}>
                <Hbox>
                  <Hbox.Item noGrow>
                    <LinkStyled>
                      <BodySecondary>Home</BodySecondary>
                    </LinkStyled>
                  </Hbox.Item>{' '}
                  <Hbox.Separator />
                  <Hbox.Item noGrow>
                    <LinkStyled>
                      <BodySecondary>Blog</BodySecondary>
                    </LinkStyled>
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
  );
};

export default Header;
