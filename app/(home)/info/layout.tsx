import Container from '@/components/Container';

const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container className='h-full relative'>{children}</Container>;
};

export default InfoLayout;
