const NoResult = ({ search }: { search: string }) => {
  return (
    <div className='w-full text-text-disable py-5 text-center'>
      <span className='text-text-tertiary'>{search}</span>에 대한 검색 결과가
      없습니다.
    </div>
  );
};

export default NoResult;
