import Container from '@/components/Container';

const calenderLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container className='h-full relative'>{children}</Container>;
};

export default calenderLayout;
