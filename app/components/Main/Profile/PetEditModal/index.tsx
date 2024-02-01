import PetEditContent from '@/components/PetEditContent';
import Button from '@/components/Button';
import { Title } from '@/constants/Typography/TypographyList';

export type PetData = {
  name: string;
  birth: string;
  breed: string;
};

const petData: PetData[] = [
  {
    name: '콩이',
    birth: '2020.09.24',
    breed: '믹스견',
  },
];
const PetEditModal = () => {
  return (
    <>
      <div className='flex gap-2 '>
        <div className={`${Title.title2} text-text-title`}>내 반려동물</div>
        <div className={`text-primary-500 ${Title.title2}`}>
          {petData.length}
        </div>
      </div>
      <PetEditContent petData={petData} />
      <Button
        className='border-purple-600 '
        children={'반려동물추가'}
        variant={'outlined'}
      />
    </>
  );
};

export default PetEditModal;
