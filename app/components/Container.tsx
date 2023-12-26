import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  addClass?: string;
}

const Container: FC<ContainerProps> = ({ children, addClass }) => {
  return (
    <div className={`w-full md:max-w-3xl mx-auto px-5 ${addClass}`}>
      {children}
    </div>
  );
};

export default Container;
