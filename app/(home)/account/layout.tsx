import AccountHeader from '@/components/Account/AccountHeader';
import { Fragment } from 'react';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <AccountHeader />
      <div className='mt-14'>{children}</div>
    </Fragment>
  );
};

export default AccountLayout;
