import { TypographyProps } from './type';

const Label = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-label font-bold tracking-normal ${className}`}>
      {children}
    </p>
  );
};

export default Label;
