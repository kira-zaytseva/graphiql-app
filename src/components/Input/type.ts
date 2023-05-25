export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  classNameWrapper?: string;
  value?: string;
  id?: string;
  labelName?: string;
  name: string;
}
