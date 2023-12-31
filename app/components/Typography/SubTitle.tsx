import { TypographyProps } from './type';

const SubTitle = ({ children, className }: TypographyProps) => {
  return (
    <h4 className={`text-subTitle font-medium tracking-normal ${className}`}>
      {children}
    </h4>
  );
};

export default SubTitle;
