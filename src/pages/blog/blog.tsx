import { Container } from '@/atomic/obj.grid/grid.style';
import { Hbox } from '@/atomic/obj.hbox/hbox.component';
import { Outlet } from 'react-router-dom';
import { FaBrain } from 'react-icons/fa6';
import { Separator } from '@/atomic/atm.separator/separator.style';
import { Color } from '@/atomic/obj.constants/constants';

const Blog = () => (
  <Container>
    <Hbox>
      <Hbox.Item hAlign={'center'}>
        <FaBrain color={Color.LightOrange} size={'2em'} />
      </Hbox.Item>
    </Hbox>
    <Separator type={'subsection'} />
    <Outlet />
  </Container>
);

export default Blog;
