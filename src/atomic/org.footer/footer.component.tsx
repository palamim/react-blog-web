import { Body } from '@/atomic/atm.typography/typography';
import SocialButtons from '@/atomic/mol.social/social.component';
import { FooterWrapper } from './footer.component.style';

const Footer = () => {
  return (
    <FooterWrapper>
      <Body>© 2026 Leonardo Palamim. All rights reserved.</Body>
      <SocialButtons />
    </FooterWrapper>
  );
};

export default Footer;
