import { TypographyProps } from './type';

const Caption2 = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-caption2 font-medium tracking-normal ${className}`}>
      {children}
    </p>
  );
};

export default Caption2;
