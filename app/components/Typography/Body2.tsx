import { TypographyProps } from './type';

const Body2 = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-body font-medium tracking-normal ${className}`}>
      {children}
    </p>
  );
};

export default Body2;
