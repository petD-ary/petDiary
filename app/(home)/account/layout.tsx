import Heading from '@/components/Account/Heading';
import Container from '@/components/Container';
import Header from '@/components/Header';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header type='account' />
      <Container>{children}</Container>
    </div>
  );
};

export default AccountLayout;
