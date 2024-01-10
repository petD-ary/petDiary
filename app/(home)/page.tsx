import Container from '@/components/Container';
import Weather from '@/components/Main/Weather';

export default function Home() {
  return (
    <Container className='bg-extra-divice-bg h-full'>
      <div className='flex justify-between'>
        <div className='w-[calc((100%_-_20px)/2)]'>
          <Weather />
        </div>
      </div>
    </Container>
  );
}
