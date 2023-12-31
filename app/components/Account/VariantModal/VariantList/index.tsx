import IconRadio from '@/assets/images/buttons-radio-m.svg';
import IconRadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';
import Body1 from '@/components/Typography/Body1';
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
      <Body1>{title}</Body1>
      <span>{selected === title ? <IconRadio /> : <IconRadioDisabled />}</span>
    </li>
  );
};

export default VariantList;
