import React from 'react';
import DDay from './DDay';
import Highlight from './Highlight';
import PetImg from './PetImg';
const PetData = () => {
  return (
    <div className='flex justify-center mt-2'>
      <div>
        <DDay />
        {/* <PetImg /> */}
        <div className='text-center'>
          <span className='bg-white px-5 py-2 rounded-2xl text-sm'>
            <Highlight content='김콩' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PetData;
