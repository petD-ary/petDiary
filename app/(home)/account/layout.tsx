import AccountHeader from '@/components/Account/AccountHeader';
import Container from '@/components/Container';
import { Fragment } from 'react';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <AccountHeader />
      <Container>{children}</Container>
    </Fragment>
  );
};

export default AccountLayout;
