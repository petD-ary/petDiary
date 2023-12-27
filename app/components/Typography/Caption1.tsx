import { TypographyProps } from './type';

const Caption1 = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-caption1 font-semibold tracking-normal ${className}`}>
      {children}
    </p>
  );
};

export default Caption1;
