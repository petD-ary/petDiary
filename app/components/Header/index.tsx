'use client';
import { useRouter } from 'next/navigation';
import { Button, Container } from './styled';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <h1>
        <Link href='/'>Logo</Link>
      </h1>
      <Button onClick={() => router.push('/account')}>회원가입</Button>
    </Container>
  );
};

export default Header;
