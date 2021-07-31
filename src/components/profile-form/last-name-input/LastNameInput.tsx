import React from 'react';

const LastNameInput: React.FC = () => {
  return (
    <div className="col-md-4">
      <label htmlFor="lastName" className="form-label">
        Last name
      </label>
      <input
        type="text"
        className="form-control"
        name="lastName"
        id="lastName"
        required
      />
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">Last name is required.</div>
    </div>
  );
};

export default LastNameInput;
