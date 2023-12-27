import Heading from '@/components/Account/Heading';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Heading
        title='로그인'
        subTitle='로그인을 진행하고 펫 다이어리를 이용해 보세요'
      />
      {children}
    </div>
  );
};

export default LoginLayout;
