import StempDiary from '@/components/Stemp/StempDiary';

const PlayStempPage = () => {
  const mockCheckedData = ['2023. 11. 13.', '2023. 11. 15.'];
  const title = '놀아주기';
  return <StempDiary title={title} data={mockCheckedData} />;
};

export default PlayStempPage;
