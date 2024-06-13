'use client';
import React, { useState } from 'react';
import Filter from '@/components/Store/Shop/Filter';
import Category from '@/components/Store/Shop/Category';
import activeChevron from '@/assets/images/activeChevron.png';
import Image from 'next/image';
// import ItemList from '@/data/ItemList';/
import Product from '@/components/Store/Product';

const ShopPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('신상품순');
  const [selectedCategory, setSelectedCategory] = useState<string>('간식');

  const CategoryList = [
    { title: '사료' },
    { title: '영양제' },
    { title: '간식' },
    { title: '장난감' },
    { title: '바디용품' },
    { title: '반려/생활용품' },
  ];

  const commonCSS = 'border rounded-lg px-6 py-[10px]';

  return (
    <React.Fragment>
      {/* 필터 */}
      <Filter
        commonCSS={commonCSS}
        selected={selectedFilter}
        onClick={(value) => setSelectedFilter(value)}
      />

      {/* 카테고리 */}
      <ul className='flex gap-2 w-full pt-2'>
        {CategoryList.map((category) => (
          <Category
            key={category.title}
            commonCSS={commonCSS}
            selected={selectedCategory}
            onClick={(value) => setSelectedCategory(value)}
          >
            {category.title}
          </Category>
        ))}
      </ul>

      {/* 타이틀 */}
      <div className='flex justify-between items-center mt-12 border-b border-black pb-3'>
        <h3 className='font-semibold text-lg'>{selectedCategory}</h3>
        <div className='flex justify-center items-center gap-2 cursor-pointer text-sm'>
          맨 위로{' '}
          <div className='w-3 h-3 relative [&_img]:-rotate-90'>
            <Image
              src={activeChevron}
              alt='맨 위로 버튼'
              fill
              sizes='100%'
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* 상품 리스트 */}
      <ul
        className='flex gap-3 h-[600px] flex-wrap justify-between items-center
        py-2 mb-20
      overflow-y-scroll scrollbar-none'
      >
        {/* {ItemList.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            brand={item.brand}
            price={item.price}
            like={item.like}
          />
        ))} */}
      </ul>
    </React.Fragment>
  );
};

export default ShopPage;
