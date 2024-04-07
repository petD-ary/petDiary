import IconRadio from '@/assets/images/buttons-radio-m.svg';
import IconRadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';
import { Body } from '@/constants/Typography/TypographyList';
import { useRecoilState } from 'recoil';
import { petInfoState } from '@/recoil/Account/atoms';

interface VariantListProps {
  title: string;
}

const VariantList = ({ title }: VariantListProps) => {
  const [petInfo, setPetInfo] = useRecoilState(petInfoState);
  return (
    <li
      onClick={() => setPetInfo((prev) => ({ ...prev, breed: title }))}
      className={`w-full px-3 py-4 border-b border-text-dividers relative
      ${title === '' ? 'cursor-default' : 'cursor-pointer'}
      flex justify-between items-center
      text-text-primary
      `}
    >
      <p className={`${Body.body1}`}>{title}</p>
      <span>
        {petInfo.breed === title ? <IconRadio /> : <IconRadioDisabled />}
      </span>
    </li>
  );
};

export default VariantList;
