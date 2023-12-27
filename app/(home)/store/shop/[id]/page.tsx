'use client';
import ItemList from '@/data/ItemList';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsArrowLeft, BsHeart, BsHeartFill } from 'react-icons/bs';
interface ProductDetailPageProps {
  params: { id: number };
}
const ProductDetailPage = ({ params: { id } }: ProductDetailPageProps) => {
  const router = useRouter();
  const product = ItemList.find((item) => item.id === Number(id));
  const [heart, setHeart] = useState(false);

  if (product) {
    const { title, brand, like, price } = product;
    return (
      <React.Fragment>
        {/* 뒤로가기 버튼 */}
        <div
          onClick={() => router.back()}
          className='absolute left-0 top-[26px] sm:top-12'
        >
          <BsArrowLeft className='cursor-pointer' size={18} />
        </div>

        {/* breadcrumbs */}
        <p className='font-semibold pb-4'>간식 {'>'} 펫스룸</p>

        {/* 상품 이미지 */}
        <div className='flex flex-wrap lg:gap-12'>
          <div className='flex-grow pb-8 lg:pb-0'>
            <div className='w-full h-[300px] lg:h-[500px] border border-grayColor-200 bg-white rounded-lg'></div>
            <ul className='flex gap-4 pt-4 justify-center lg:justify-start'>
              <li className='bg-white border border-grayColor-400 w-[100px] h-[120px] rounded-lg'></li>
              <li className='bg-white border border-grayColor-200 w-[100px] h-[120px] rounded-lg'></li>
              <li className='bg-white border border-grayColor-200 w-[100px] h-[120px] rounded-lg'></li>
            </ul>
          </div>

          {/* 상품 정보 */}
          <div className='w-full lg:w-[calc((100%_-_48px)_/_2)]'>
            <div className='border-b border-grayColor-400'>
              <p className='font-semibold text-lg'>{brand}</p>
              <h3 className='text-lg'>{title}</h3>
              <p className='font-semibold text-2xl py-6'>
                {price.toLocaleString()}원
              </p>
            </div>

            {/* 리뷰 */}
            <div className='py-6'>
              <div className='flex justify-between items-start'>
                <div>
                  <p className='font-semibold pb-1'>
                    리뷰
                    <span className='text-grayColor-200'>{` (${like.toLocaleString()})`}</span>
                  </p>
                  <p className='text-lg font-semibold'>
                    ★★★★☆ 4.9<span className='text-grayColor-200'>/5</span>
                  </p>
                </div>
                <p className='font-semibold text-sm cursor-pointer'>
                  전체보기 {'>'}
                </p>
              </div>

              <ul
                className='w-full flex flex-col xl:flex-row gap-4 xl:gap-0 flex-wrap justify-between py-3 mt-4
              [&_>_li]:flex [&_>_li]:gap-4 [&_>_li]:bg-[#efefef] [&_>_li]:p-4 [&_>_li]:rounded-xl [&_>_li]:xl:w-[calc((100%_-_16px)/2)]
              [&_>_li]:w-full'
              >
                <li>
                  <div className='w-[100px] h-[100px] rounded-lg bg-grayColor-200 block'></div>
                  <p className='text-sm w-[256px]'>
                    입맛은 또 어찌나 깐깐한지 이제는 굉장해 엄청나 아니면 쳐다도
                    안봐요ㅋㅋ
                  </p>
                </li>

                <li>
                  <div className='w-[100px] h-[100px] rounded-lg bg-grayColor-200'></div>
                  <span className='text-sm'>
                    애들이 맛있대요 ~~ ! 참으로 잘먹네요 ^^*
                  </span>
                </li>
              </ul>
            </div>

            {/* 배송정보 */}
            <div className='flex flex-col gap-6 border-y border-grayColor-200 py-6'>
              <div className='flex'>
                <p className='w-[100px]'>배송정보</p>
                <div>
                  <p>택배 배송 | 우체국택배</p>
                  <p className='font-semibold'>10/19(토) 도착 예정</p>
                </div>
              </div>

              <div className='flex'>
                <p className='w-[100px]'>배송비</p>
                <div>
                  <p>
                    3,000원 (5만원 이상 무료)
                    <br />
                    제주 3,000원 / 도서산간 6,000원 추가
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-4 py-6'>
              <div className='flex'>
                <p className='w-[100px]'>옵션</p>
                <select className='flex-grow bg-white rounded-lg outline-none px-5 py-2'>
                  <option className='px-5 py-2'>옵션을 선택해 주세요.</option>
                </select>
              </div>

              <div className='flex'>
                <p className='w-[100px]'>추가 옵션</p>
                <select className='flex-grow bg-white rounded-lg outline-none px-5 py-2'>
                  <option className='px-5 py-2'>선택 안 함</option>
                </select>
              </div>
            </div>

            {/* 버튼 */}
            <div className='flex justify-between items-center font-semibold border-t border-grayColor-400'>
              <p>합계</p>
              <p className='text-2xl py-6'>{price.toLocaleString()}원</p>
            </div>

            <div
              className='pt-12 flex gap-3 mb-[100px]
            [&_>_div]:w-full [&_>_div]:rounded-lg [&_>_div]:cursor-pointer
            [&_>_div]:flex [&_>_div]:justify-center [&_>_div]:py-4'
            >
              <div
                className='bg-grayColor-100 flex items-center'
                onClick={() => setHeart((prev) => !prev)}
              >
                {heart ? (
                  <BsHeartFill size={18} className='mr-2 text-rose-500' />
                ) : (
                  <BsHeart className='mr-2' size={18} />
                )}
                {like.toLocaleString()}
              </div>
              <div className='bg-grayColor-200 font-semibold'>
                장바구니 담기
              </div>
              <div className='bg-black text-white font-semibold'>
                바로 구매하기
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default ProductDetailPage;
