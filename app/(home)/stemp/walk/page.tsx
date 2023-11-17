import StempDiary from '@/components/Stemp/StempDiary';

const WalkStempPage = () => {
  const mockCheckedData = ['2023. 11. 13.', '2023. 11. 15.', '2023. 11. 16.'];
  const title = '산책';
  return <StempDiary title={title} data={mockCheckedData} />;
};

export default WalkStempPage;
