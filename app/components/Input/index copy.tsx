interface InputProps {
  label: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  desc?: string;
}

const Input = ({
  label,
  type,
  value,
  setValue,
  required,
  placeholder,
  desc,
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
      </div>
      {desc ? <p className='pt-5 pl-5 text-grayColor-400'>{desc}</p> : null}
    </div>
  );
};

export default Input;
