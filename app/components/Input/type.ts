import { FC, ReactElement, ReactNode } from 'react';

export interface InputProps {
  children: JSX.Element | JSX.Element[] | null;
  onClick?: () => void;
  onChange?: () => void;
  value?: string;
  error?: string | null;
}

export interface LabelProps {
  children: React.ReactNode;
  isRequired?: boolean;
}

export interface TextInputProps {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DateInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  variant: 'contained' | 'outlined';
}
