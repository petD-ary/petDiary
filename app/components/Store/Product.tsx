import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

interface ProductProps {
  id: number;
  title: string;
  brand: string;
  price: number;
  like: number;
  image?: StaticImageData;
}

const Product = ({ id, title, brand, price, like, image }: ProductProps) => {
  const [checkHeart, setCheckHeart] = useState(false);

  return (
    <li className='rounded-lg overflow-hidden w-[calc((100%_-_36px)_/_4)] my-3'>
      <Link href={`/store/shop/${id}`}>
        <div className='w-full h-[300px] bg-grayColor-200'>
          {image && (
            <Image
              src={image}
              alt={`${title} 이미지`}
              fill
              className='object-cover'
            />
          )}
        </div>
      </Link>

      <div className='flex justify-between bg-white px-5 py-4'>
        <Link href={`/store/shop/${id}`}>
          <div>
            <p>{brand}</p>
            <h3 className='text-[#4e4e4e]'>
              {title.length > 16 ? title.substring(0, 16) + '...' : title}
            </h3>
            <p className='text-lg pt-2'>{price.toLocaleString()}원</p>
          </div>
        </Link>
        <div className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
          <div className='p-2' onClick={() => setCheckHeart((prev) => !prev)}>
            {checkHeart ? (
              <BsHeartFill className='text-rose-500' size={18} />
            ) : (
              <BsHeart size={18} />
            )}
          </div>
          <p className='text-sm'>{like.toLocaleString()}</p>
        </div>
      </div>
    </li>
  );
};

export default Product;
