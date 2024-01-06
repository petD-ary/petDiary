import IconRadio from '@/assets/images/buttons-radio-m.svg';
import IconRadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';
import { Body } from '@/components/Typography/TypographyList';

interface VariantListProps {
  title: string;
  selected?: string;
  handlePutId: (id: string) => void;
}

const VariantList = ({ title, selected, handlePutId }: VariantListProps) => {
  return (
    <li
      onClick={() => handlePutId(title)}
      className={`w-full px-3 py-4 border-b border-text-dividers relative
      ${title === '' ? 'cursor-default' : 'cursor-pointer'}
      flex justify-between items-center
      text-text-primary
      `}
    >
      <p className={`${Body.body1}`}>{title}</p>
      <span>{selected === title ? <IconRadio /> : <IconRadioDisabled />}</span>
    </li>
  );
};

export default VariantList;
