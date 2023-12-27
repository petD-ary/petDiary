export interface InputProps {
  children: JSX.Element | JSX.Element[] | null;
  onClick?: () => void;
  onChange?: (value: any) => void;
  value?: string;
  error?: string | null;
}

export interface LabelProps {
  children: React.ReactNode;
  isRequired?: boolean;
}

export interface TextInputProps {
  value?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export interface DateInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
