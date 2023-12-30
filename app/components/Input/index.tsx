'use client';
import React, { Children, cloneElement } from 'react';
import {
  CheckInputProps,
  DateInputProps,
  InputProps,
  LabelProps,
  TextInputProps,
} from './type';
import IconValid from '@/assets/images/icon-valid.svg';
import IconError from '@/assets/images/icon-error.svg';
import Caption2 from '../Typography/Caption2';
import Body1 from '../Typography/Body1';

const Input = ({ children, onClick, onChange, value, error }: InputProps) => {
  return (
    <div className='w-full relative'>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const newProps = {
            onClick,
            value,
            onChange,
            error,
          };

          return cloneElement(child, newProps);
        }
        return null;
      })}
    </div>
  );
};

const InputClass = 'w-full p-4 rounded-lg text-text-title text-body';

const Label = ({ children, ...rest }: LabelProps) => (
  <label
    className={`flex gap-1 pb-2 text-text text-text-primary leading-[1.2]`}
  >
    {children}
    {rest.isRequired ? <span className='text-error'>*</span> : null}
  </label>
);

const TextInput = ({ value, onChange, error, ...rest }: TextInputProps) => (
  <>
    <input
      type='text'
      value={value}
      onChange={onChange}
      className={`${InputClass}
      disabled:text-text-disable
      border border-text-dividers focus:border-text-border transition-colors
    ${error !== null && error ? '!border-error focus:!border-error' : ''}
    `}
      {...rest}
    />
    {error !== null && !error && error !== undefined ? (
      <span className='absolute right-4 top-10'>
        <IconValid />
      </span>
    ) : null}
    {error !== null && error ? (
      <span className='absolute right-4 top-10'>
        <IconError />
      </span>
    ) : null}
  </>
);

const DateInput = ({ value, onChange, ...rest }: DateInputProps) => (
  <input
    type='date'
    value={value}
    onChange={onChange}
    className={`disabled:text-text-disable
    border border-text-dividers focus:border-text-border transition-colors ${InputClass}`}
    {...rest}
  />
);

const CheckInput = ({ children, id, ...rest }: CheckInputProps) => (
  <>
    <input type='checkbox' name={id} id={id} className={`hidden`} {...rest} />
    <label
      htmlFor={id}
      className='w-full flex gap-2 justify-start px-4 py-[14px] cursor-pointer'
    >
      <span></span>
      <Body1>{children}</Body1>
    </label>
  </>
);

const Success = ({ children }: LabelProps) => (
  <Caption2 className='text-success pl-[3px] pt-[6px]'>{children}</Caption2>
);

const Error = ({ children }: LabelProps) => (
  <Caption2 className='text-error pl-[3px] pt-[6px]'>{children}</Caption2>
);

Input.Label = Label;
Input.TextInput = TextInput;
Input.DateInput = DateInput;
Input.CheckInput = CheckInput;
Input.Success = Success;
Input.Error = Error;

export default Input;
