'use client';
import {
  CheckInputProps,
  DateInputProps,
  InputContextProps,
  InputProps,
  LabelProps,
  TextInputProps,
} from './type';
import IconError from '@/assets/images/icon-error.svg';
import { Body, Caption } from '../../constants/Typography/TypographyList';
import { createContext } from 'react';
import useInputContext from '@/hooks/useInputContext';

export const defaultInputContext: InputContextProps = {
  isValid: false,
  isRequired: false,
  isDisabled: false,
  name: '',
};
export const InputContext =
  createContext<InputContextProps>(defaultInputContext);

const Input = ({ children, className = '', ...props }: InputProps) => {
  return (
    <InputContext.Provider value={{ ...props }}>
      <div className={`w-full relative ${className}`}>{children}</div>
    </InputContext.Provider>
  );
};

export const InputClass = 'w-full p-4 rounded-lg text-text-title text-body';

const Label = ({ children }: LabelProps) => {
  const { isRequired } = useInputContext();
  return (
    <div className={`flex gap-1 pb-2 ${Caption.caption1} text-text-primary`}>
      {children}
      {isRequired ? <span className='text-error'>*</span> : null}
    </div>
  );
};

const Text = ({ value, onChange, error, ...rest }: TextInputProps) => {
  const { isRequired, isDisabled, isValid, name } = useInputContext();
  return (
    <label htmlFor={name}>
      <input
        type='text'
        value={value}
        name={name}
        onChange={onChange}
        className={`${InputClass}
      disabled:text-text-disable
      border border-text-dividers focus:border-extra-active transition-colors caret-secondary-200
    ${error !== null && error ? '!border-error focus:!border-error' : ''}
    `}
        required={isRequired}
        disabled={isDisabled}
        {...rest}
      />
    </label>
  );
};

const ValidIcon = ({ error }: { error?: string | null }) => {
  if (error === undefined || error === null) return;

  return (
    <span className='absolute right-4 top-10'>
      <IconError />
    </span>
  );
};

const Date = ({ value, onChange, disabled, ...rest }: DateInputProps) => {
  const { isRequired, name } = useInputContext();
  return (
    <label htmlFor={name}>
      <input
        type='date'
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        required={isRequired}
        className={`disabled:opacity-50
    border border-text-dividers active:border-text-border transition-colors ${InputClass}`}
        {...rest}
      />
    </label>
  );
};

const Check = ({
  children,
  onChange,
  id,
  checked = false,
  ...rest
}: CheckInputProps) => {
  const { name } = useInputContext();
  return (
    <>
      <input
        type='checkbox'
        name={name}
        checked={checked}
        onChange={onChange}
        className={`hidden`}
        id={name}
        {...rest}
      />
      <label
        htmlFor={name}
        className={`w-full flex gap-2 justify-start px-4 py-[14px] cursor-pointer
        rounded-lg items-center transiton-colors bg-grayColor-10 border border-transparent
    [input[type="checkbox"]:checked_+_&]:border-primary-500
    [input[type="checkbox"]:checked_+_&]:bg-white
    [input[type="checkbox"]:checked_+_&_>_span]:bg-checkbox-checked ${Body.body1}`}
      >
        <span className='w-6 h-6 block bg-checkbox bg-cover'></span>
        {children}
      </label>
    </>
  );
};

const CheckOnlyOne = ({
  value,
  selected,
  onChange,
  ...rest
}: CheckInputProps) => {
  const { name } = useInputContext();
  return (
    <>
      <input
        type='checkbox'
        className='hidden'
        checked={value === selected}
        value={value}
        id={value}
        name={name}
        onChange={onChange}
        {...rest}
      />
      <label
        htmlFor={value}
        className={`flex-grow flex justify-center items-center h-[52px] rounded-lg
      cursor-pointer border
      [input[type="checkbox"]_+_&]:border-grayColor-200
      [input[type="checkbox"]:checked_+_&]:border-primary-500
      [input[type="checkbox"]:checked_+_&]:text-primary-500
      ${Body.body1}
      `}
      >
        {value}
      </label>
    </>
  );
};

const Success = ({ children }: LabelProps) => (
  <p className={`text-success pl-[3px] pt-[6px] ${Caption.caption2}`}>
    {children}
  </p>
);

const Error = ({ children }: LabelProps) => (
  <>
    {children ? (
      <p className={`text-error pl-[3px] pt-[6px] ${Caption.caption2}`}>
        {children}
      </p>
    ) : null}
  </>
);

Input.Label = Label;
Input.TextInput = Text;
Input.DateInput = Date;
Input.CheckInput = Check;
Input.ValidIcon = ValidIcon;

Input.CheckOnlyOneInput = CheckOnlyOne;

Input.Success = Success;
Input.Error = Error;

export default Input;
