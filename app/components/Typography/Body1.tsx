import { TypographyProps } from './type';

const Body1 = ({ children, className }: TypographyProps) => {
  return <p className={`text-body tracking-normal ${className}`}>{children}</p>;
};

export default Body1;
