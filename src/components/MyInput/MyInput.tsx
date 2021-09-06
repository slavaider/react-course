import React from 'react';
import { MyInputProps } from './MyInput.model';

const MyInput: React.FC<MyInputProps> = ({ label, ...props }: MyInputProps) => {
  return (
    <div className="col-md-4">
      <label htmlFor={props.id} className="form-label">
        {label}
      </label>
      <input className="form-control" required {...props} />
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">{label} is required.</div>
    </div>
  );
};

export default MyInput;
