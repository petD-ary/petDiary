import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 36px;
  font-size: 1.4rem;
  margin-top: 20px;

  & label {
    position: absolute;
    top: 10px;
    left: 8px;
  }

  & input {
    flex-grow: 1;
    outline: none;
    border: none;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 8px;
    position: relative;

    &::placeholder {
      color: #000;
    }

    &::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background: #000;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
    }
  }

  & input[type='text'],
  input[type='password'] {
    cursor: text;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  & button {
    border: none;
    background: #d9d9d9;
    border-radius: 8px;
    padding: 0 24px;
  }

  & p {
    padding: 20px 0 0 20px;
  }
`;

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
