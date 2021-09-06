import React from 'react';

const ZipInput: React.FC = () => {
  return (
    <div className="col-md-4">
      <label htmlFor="choose_zip" className="form-label">
        Zip
      </label>
      <input
        type="text"
        className="form-control"
        name="zip"
        id="choose_zip"
        required
      />
      <div className="invalid-feedback">Please provide a valid zip.</div>
    </div>
  );
};

export default ZipInput;
