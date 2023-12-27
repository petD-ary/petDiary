import Heading from '@/components/Account/Heading';
import Container from '@/components/Container';
import Header from '@/components/Header';
import { Fragment } from 'react';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header type='account' />
      <Container>{children}</Container>
    </Fragment>
  );
};

export default AccountLayout;
