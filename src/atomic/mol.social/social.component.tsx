import { Fragment } from 'react';
import { Hbox } from '@/atomic/obj.hbox/hbox.component';
import { LinkStyled } from '@/atomic/atm.typography/typography';
import { Color } from '@/atomic/obj.constants/constants';
import { socials, type SocialItem } from '@/app/modules/socials';
import { useTheme, Theme } from '@/app/providers/theme.provider';

const SocialButton = ({
  social,
  color,
}: {
  social: SocialItem;
  color: string;
}) => {
  const Icon = social.icon;
  return (
    <LinkStyled href={social.link} target={'_blank'}>
      <Icon color={color} size={'2em'} />
    </LinkStyled>
  );
};

const SocialButtons = () => {
  const { theme } = useTheme();
  const buttonColor =
    theme == Theme.Light ? Color.GrayXDark : Color.LightOrange;
  return (
    <Hbox>
      {socials.map((social, index) => (
        <Fragment key={social.name}>
          {index > 0 && <Hbox.Separator />}
          <Hbox.Item>
            <SocialButton social={social} color={buttonColor} />
          </Hbox.Item>
        </Fragment>
      ))}
    </Hbox>
  );
};

export default SocialButtons;
