import { BsCheckLg, BsXLg } from 'react-icons/bs';

interface InputCheckProps {
  label: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  checkbox?: boolean;
  desc?: string;
}

const InputCheck = ({
  label,
  type,
  value,
  setValue,
  required,
  placeholder,
  checkbox,
  desc,
}: InputCheckProps) => {
  return (
    <div className='w-full mt-5 text-1.4rem'>
      <label className='block p-2'>{label}</label>
      <div className='relative flex'>
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
          placeholder={placeholder && placeholder}
          className={`flex-grow outline-none border-none p-5 bg-grayColor-100 placeholder-grayColor-400 rounded-xl
          ${type === 'text' ? 'cursor-text' : ''}
          ${type === 'password' ? 'cursor-text' : ''}
          `}
        />
        {checkbox ? (
          <BsCheckLg
            className='absolute right-5 top-1/2 -translate-y-1/2 text-green-500'
            size={18}
          />
        ) : (
          checkbox !== undefined && (
            <BsXLg
              size={18}
              className='absolute right-5 top-1/2 -translate-y-1/2 text-rose-500'
            />
          )
        )}
      </div>
      {desc ? <p className='pt-5 pl-5 text-grayColor-400'>{desc}</p> : null}
    </div>
  );
};

export default InputCheck;
