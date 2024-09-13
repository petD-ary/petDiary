import React, { ReactNode } from 'react';
import Container from '@/components/Container';

const PetInfoLayout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default PetInfoLayout;
