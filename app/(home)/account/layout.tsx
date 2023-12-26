import Heading from '@/components/Account/Heading';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Heading />
      {children}
    </div>
  );
};

export default AccountLayout;
