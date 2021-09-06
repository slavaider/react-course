import React from 'react';

const AgreeCheck: React.FC = () => {
  return (
    <div className="col-12">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="check_agree"
          required
        />
        <label className="form-check-label" htmlFor="check_agree">
          Agree to terms and conditions
        </label>
        <div className="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
  );
};

export default AgreeCheck;
