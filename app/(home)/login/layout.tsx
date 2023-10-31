import Heading from "@/components/Account/Heading";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Heading title="로그인" />
      {children}
    </div>
  );
};

export default LoginLayout;
