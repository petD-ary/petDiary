import { FC, ReactNode } from "react";
import Heading from "./Heading";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`w-full md:max-w-3xl mx-auto px-5 ${className}`}>{children}</div>;
};

export default Container;
