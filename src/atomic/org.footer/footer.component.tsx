import { Body } from '@/atomic/atm.typography/typography';
import SocialButtons from '@/atomic/mol.social/social.component';
import { FooterWrapper } from './footer.component.style';
import { useTheme } from '@/app/providers/theme.provider';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <FooterWrapper theme={theme}>
      <Body>© 2026 Leonardo Palamim. All rights reserved.</Body>
      <SocialButtons />
    </FooterWrapper>
  );
};

export default Footer;
