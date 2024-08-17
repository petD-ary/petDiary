import IconNoResult from '@/assets/images/info/icon-noResult.svg';
import { Body, SubTitle } from '@/constants/Typography/TypographyList';

const NoResult = () => {
  return (
    <div className='w-full py-8 px-5 text-center flex flex-col justify-center items-center'>
      <IconNoResult />
      <h3 className={`text-text-secondary ${SubTitle.subTitle2} py-2`}>
        검색 결과가 없습니다
      </h3>
      <p className={`text-text-tertiary ${Body.body3}`}>
        다른 검색어로 검색해 주세요
      </p>
    </div>
  );
};

export default NoResult;
