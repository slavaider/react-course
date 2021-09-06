import { InputHTMLAttributes } from 'react';

export interface MySwitchProps extends InputHTMLAttributes<HTMLElement> {
  trueText: string;
  falseText: string;
}
