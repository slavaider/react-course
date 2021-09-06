import React, { useState } from 'react';
import { MySwitchProps } from './MySwitch.model';

const MySwitch: React.FC<MySwitchProps> = ({
  trueText,
  falseText,
  ...props
}: MySwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="col-12">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          value={isChecked ? trueText : falseText}
          onChange={() => setIsChecked(!isChecked)}
          {...props}
        />
        <label className="mx-1 mt-1 form-check-label" htmlFor={props.id}>
          {isChecked ? trueText : falseText}
        </label>
      </div>
    </div>
  );
};

export default MySwitch;
