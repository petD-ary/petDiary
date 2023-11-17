import React from "react";
import Image from 'next/image'

const PetImg = () => {
  return (
    <div className="relative w-full mb-6 bg-grayColor-200 rounded-xl">
      <Image  
        fill
          style={{
            objectFit: 'cover',
          }}></img>
    </div>
  );
};

export default PetImg;
