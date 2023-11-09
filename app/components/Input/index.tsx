import { BsCheckLg, BsXLg } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputProps {
  label: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  button?: string;
  desc?: string;
  checkbox?: boolean;
  handleChangeType?: () => void;
  showPassword?: boolean;
  btnOnClick?: () => void;
}

const Input = ({
  label,
  type,
  value,
  setValue,
  required,
  placeholder,
  button,
  desc,
  ...props
}: InputProps) => {
  return (
    <div className='w-full mt-5 text-1.4rem'>
      <label className='block p-2'>{label}</label>
      <div className='flex justify-between gap-2 relative'>
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
        {props.checkbox ? (
          <BsCheckLg
            className='absolute right-5 top-1/2 -translate-y-1/2 text-green-500'
            size={18}
          />
        ) : (
          props.checkbox !== undefined && (
            <BsXLg
              size={18}
              className='absolute right-5 top-1/2 -translate-y-1/2 text-rose-500'
            />
          )
        )}
        {props.showPassword ? (
          <AiOutlineEyeInvisible
            size={18}
            onClick={props.handleChangeType}
            className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
          />
        ) : (
          props.showPassword !== undefined && (
            <AiOutlineEye
              size={18}
              onClick={props.handleChangeType}
              className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
            />
          )
        )}
        {button ? (
          <button
            type='button'
            className='px-6
            bg-grayColor-200 transition-colors
          hover:bg-grayColor-300 hover:text-white
          active:bg-grayColor-400 active:text-white
          rounded-lg'
            onClick={() => props.btnOnClick && props?.btnOnClick()}
          >
            {button}
          </button>
        ) : null}
      </div>
      {desc ? <p className='pt-5 pl-5 text-grayColor-400'>{desc}</p> : null}
    </div>
  );
};

export default Input;
