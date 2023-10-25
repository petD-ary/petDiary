import { InputWrapper } from './styled';

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
    <InputWrapper>
      <label>{label}</label>
      <div>
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
          placeholder={placeholder && placeholder}
        />
        {button ? <button>{button}</button> : null}
      </div>
      {desc ? <p>{desc}</p> : null}
    </InputWrapper>
  );
};

export default Input;
