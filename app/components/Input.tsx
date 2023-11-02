interface InputProps {
  label: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  button?: string;
  desc?: string;
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
}: InputProps) => {
  return (
    <div className='w-full mt-5 text-1.4rem'>
      <label className='block p-2'>{label}</label>
      <div className='flex justify-between gap-2'>
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
          placeholder={placeholder && placeholder}
          className={`flex-grow outline-none border-none p-5 bg-grayColor-100 placeholder-black rounded-xl
          ${type === 'text' ? 'cursor-text' : ''}
          ${type === 'password' ? 'cursor-text' : ''}
          `}
        />
        {button ? (
          <button
            type='button'
            className='px-6
            bg-grayColor-200 transition-colors
          hover:bg-grayColor-300 hover:text-white
          active:bg-grayColor-400 active:text-white
          rounded-lg'
          >
            {button}
          </button>
        ) : null}
      </div>
      {desc ? <p className='pt-5 pl-5'>{desc}</p> : null}
    </div>
  );
};

export default Input;
