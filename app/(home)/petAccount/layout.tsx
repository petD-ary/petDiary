import Heading from "@/components/Account/Heading";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Heading title="회원가입" />
      {children}
    </div>
  );
};

export default AccountLayout;
