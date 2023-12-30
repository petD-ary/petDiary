import { TypographyProps } from './type';

const Title1 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={`text-title1 font-bold tracking-normal ${className}`}>
      {children}
    </h2>
  );
};

export default Title1;
