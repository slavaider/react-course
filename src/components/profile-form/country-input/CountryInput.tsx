import React from 'react';

const CountryInput: React.FC = () => {
  return (
    <div className="col-md-4">
      <label htmlFor="choose_country" className="form-label">
        Country
      </label>
      <select
        className="form-select"
        id="choose_country"
        name="country"
        required
        defaultValue={'other'}
      >
        <option disabled>Choose...</option>
        <option value="other">Other</option>
        <option value="russia">Russia</option>
        <option value="usa">USA</option>
        <option value="ukraine">Ukraine</option>
      </select>
      <div className="invalid-feedback">Please select a valid state.</div>
    </div>
  );
};

export default CountryInput;
