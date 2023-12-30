import { ChangeEvent, ReactNode } from 'react';

export interface InputProps {
  children: JSX.Element | JSX.Element[] | null;
  onClick?: () => void;
  onChange?: (value?: any) => void;
  value?: string;
  error?: string | null;
}

export interface LabelProps {
  children?: ReactNode;
  isRequired?: boolean;
}

export interface TextInputProps {
  value?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export interface DateInputProps {
  value?: string;
  onChange?: (value?: any) => void;
  disabled?: boolean;
}

export interface CheckInputProps {
  children?: ReactNode;
  value?: string;
  selected?: string;
  id?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
