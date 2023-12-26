'use client';
import React, { Children, cloneElement } from 'react';
import {
  ButtonProps,
  DateInputProps,
  InputProps,
  LabelProps,
  TextInputProps,
} from './type';

const Input = ({ children, onClick, onChange, value }: InputProps) => {
  return (
    <div>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const newProps = {
            onClick,
            value,
            onChange,
          };

          return cloneElement(child, newProps);
        }
        return null;
      })}
    </div>
  );
};

const InputClass = 'w-full p-4 mt-2 rounded-lg';

const Label = ({ children, ...rest }: LabelProps) => (
  <label className={`flex gap-1`}>
    {children}
    {rest.isRequired ? <span className='text-error'>*</span> : null}
  </label>
);

const TextInput = ({ value, onChange, ...rest }: TextInputProps) => (
  <input
    type='text'
    value={value}
    onChange={onChange}
    className={`${InputClass} border border-text-dividers focus:border-text-border transition-colors`}
    {...rest}
  />
);

const DateInput = ({ value, onChange, ...rest }: DateInputProps) => (
  <input
    type='date'
    value={value}
    onChange={onChange}
    className={`${InputClass}`}
    {...rest}
  />
);

const Button = ({
  type = 'button',
  children,
  onClick,
  isDisabled,
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={isDisabled}
    {...rest}
    className={`w-full border rounded-lg text-center py-5
    ${
      rest.variant === 'contained'
        ? 'bg-primary-500 text-white border-primary-500 disabled:text-white disabled:bg-grayColor-200 disabled:border-grayColor-200'
        : ''
    }
    ${
      rest.variant === 'outlined'
        ? 'bg-white text-primary-500 border-primary-700 disabled:border-grayColor-200 disabled:text-grayColor-200'
        : ''
    }
    `}
  >
    {children}
  </button>
);

const Success = ({ children }: LabelProps) => (
  <p className='text-success leading-secondary pl-[3px] pt-[6px]'>{children}</p>
);

const Error = ({ children }: LabelProps) => (
  <p className='text-error'>{children}</p>
);

Input.Label = Label;
Input.TextInput = TextInput;
Input.DateInput = DateInput;
Input.Success = Success;
Input.Error = Error;
Input.Button = Button;

export default Input;
