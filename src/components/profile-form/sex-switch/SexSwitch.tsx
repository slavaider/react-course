import React, { useState } from 'react';

const SexSwitch: React.FC = () => {
  const [isFemale, setSex] = useState<boolean>(false);

  return (
    <div className="col-12">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          name="sex"
          value={isFemale.toString()}
          onChange={() => setSex(!isFemale)}
          id="sex_switch"
        />
        <label className="mx-1 mt-1 form-check-label" htmlFor="sex_switch">
          {isFemale ? 'Female' : 'Male'}
        </label>
      </div>
    </div>
  );
};

export default SexSwitch;
