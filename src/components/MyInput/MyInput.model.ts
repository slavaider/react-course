import { InputHTMLAttributes } from 'react';

export interface MyInputProps extends InputHTMLAttributes<HTMLElement> {
  label: string;
}
