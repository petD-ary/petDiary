import Container from '@/components/Container';
import { Fragment } from 'react';

const calenderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default calenderLayout;
