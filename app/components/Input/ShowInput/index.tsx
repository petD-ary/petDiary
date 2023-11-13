import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface ShowInputProps {
  label: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  handleChangeType?: () => void;
  showPassword?: boolean;
  desc?: string;
}

const ShowInput = ({
  label,
  type,
  value,
  setValue,
  required,
  placeholder,
  handleChangeType,
  showPassword,
  desc,
}: ShowInputProps) => {
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
        {showPassword ? (
          <AiOutlineEyeInvisible
            size={18}
            onClick={handleChangeType}
            className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
          />
        ) : (
          showPassword !== undefined && (
            <AiOutlineEye
              size={18}
              onClick={handleChangeType}
              className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
            />
          )
        )}
      </div>
      {desc ? <p className='pt-5 pl-5 text-grayColor-400'>{desc}</p> : null}
    </div>
  );
};

export default ShowInput;
