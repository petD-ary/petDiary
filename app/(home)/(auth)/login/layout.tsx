import Container from '@/components/Container';
import { Fragment } from 'react';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Container className='px-5'>{children}</Container>
    </Fragment>
  );
};

export default LoginLayout;
