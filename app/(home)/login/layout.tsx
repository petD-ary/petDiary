import Container from '@/components/Container';
import { Fragment } from 'react';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default LoginLayout;
