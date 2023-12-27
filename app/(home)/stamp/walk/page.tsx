import StampDiary from '@/components/Stamp/StampDiary';

const WalkStampPage = () => {
  const mockCheckedData = ['2023. 11. 13.', '2023. 11. 15.', '2023. 11. 16.'];
  const title = '산책';
  return <StampDiary title={title} data={mockCheckedData} />;
};

export default WalkStampPage;
