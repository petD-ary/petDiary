import StampDiary from '@/components/Stamp/StampDiary';

const PlayStampPage = () => {
  const mockCheckedData = ['2023. 11. 13.', '2023. 11. 15.'];
  const title = '놀아주기';
  return <StampDiary title={title} data={mockCheckedData} />;
};

export default PlayStampPage;
