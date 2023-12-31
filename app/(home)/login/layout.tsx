import Container from "@/components/Container";
import Header from "@/components/Header";
import { Fragment } from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default LoginLayout;
