const AccountPage = () => {
  const [step, setStep] = useState(0);

  return (
    <Container>
      <Breadcrumb step={step} />

      {step === 0 && <UserForm />}
      {step === 1 && <UserForm />}

      <button type='submit' onClick={() => setStep((prev) => prev + 1)}>
        {step === 0 ? '다음 단계로' : ''}
        {step === 1 ? '가입하기' : ''}
        {step === 2 ? '시작하기' : ''}
      </button>

      <p>
        이미 계정이 있으신가요?<Link href='/login'>로그인</Link>
      </p>
    </Container>
  );
};

export default AccountPage;
