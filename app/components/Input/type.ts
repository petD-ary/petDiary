import { ReactNode } from 'react';

export interface InputProps {
  children: ReactNode;
  className?: string;
  isValid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  name: string;
}

export interface InputContextProps {
  isValid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  name: string;
}

export interface LabelProps {
  children?: ReactNode;
}

export interface TextInputProps {
  value?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  required?: boolean;
  className?: string;
}
export interface TextAreaInputProps {
  value?: string;
  maxLength: number;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  required?: boolean;
  className?: string;
}

export interface DateInputProps {
  value?: string;
  onChange?: (value?: any) => void;
  disabled?: boolean;
  required?: boolean;
}

export interface CheckInputProps {
  children?: ReactNode;
  checked?: boolean;
  value?: string;
  selected?: string;
  id?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export interface SliderInputProps {
  value?: number;
  style: any;
  onChange: any;
}
