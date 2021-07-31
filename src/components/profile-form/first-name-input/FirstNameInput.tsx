import React from 'react';

const FirstNameInput: React.FC = () => {
  return (
    <div className="col-md-4">
      <label htmlFor="firstName" className="form-label">
        First name
      </label>
      <input
        type="text"
        className="form-control"
        name="firstName"
        id="firstName"
        required
      />
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">First name is required.</div>
    </div>
  );
};

export default FirstNameInput;
