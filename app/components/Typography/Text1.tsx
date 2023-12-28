import { TypographyProps } from './type';

const Text1 = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-text font-semibold tracking-normal ${className}`}>
      {children}
    </p>
  );
};

export default Text1;
