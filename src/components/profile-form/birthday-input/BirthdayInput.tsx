import React from 'react';

const BirthdayInput: React.FC = () => {
  return (
    <div className="col-md-4">
      <label htmlFor="birthday" className="form-label">
        Birthday
      </label>
      <input
        type="date"
        className="form-control"
        name="birthday"
        id="birthday"
        required
      />
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">Birthday is required.</div>
    </div>
  );
};

export default BirthdayInput;
