import { TypographyProps } from './type';

const Text2 = ({ children, className }: TypographyProps) => {
  return <p className={`text-text tracking-normal ${className}`}>{children}</p>;
};

export default Text2;
