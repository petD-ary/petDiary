import { BsCheckLg } from 'react-icons/bs';

interface InputProps {
  label: string;
  checked: boolean;
  setState: (value: boolean) => void;
}

const CheckButton = ({ label, checked, setState }: InputProps) => {
  return (
    <label className='flex items-center ml-2 cursor-pointer pb-0'>
      <input
        type='checkbox'
        id='customCheckbox'
        checked={checked}
        onChange={(e) => setState(e.target.checked)}
        className='hidden'
      />
      <span className='w-[22px] h-[22px] mr-2 rounded bg-grayColor-100 font-semibold flex justify-center items-center'>
        {checked ? <BsCheckLg /> : null}
      </span>
      {label}
    </label>
  );
};

export default CheckButton;
