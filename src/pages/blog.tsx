import { Container } from '@/atomic/obj.grid/grid.style';
import { Hbox } from '@/atomic/obj.hbox/hbox.component';
import { Body } from '@/atomic/atm.typography/typography';

const Blog = () => (
  <Container>
    <Hbox>
      <Hbox.Item>
        <Body>Notes on Starting to use Claude Code</Body>
      </Hbox.Item>
    </Hbox>
  </Container>
);

export default Blog;
