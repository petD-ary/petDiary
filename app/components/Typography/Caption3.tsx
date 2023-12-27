import { TypographyProps } from './type';

const Caption3 = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-caption2 tracking-normal ${className}`}>{children}</p>
  );
};

export default Caption3;
