import { TypographyProps } from './type';

const Title2 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={`text-title2 font-semibold tracking-normal ${className}`}>
      {children}
    </h2>
  );
};

export default Title2;
