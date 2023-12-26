import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className='w-full md:max-w-3xl mx-auto px-5'>{children}</div>;
};

export default Container;
