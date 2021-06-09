import React from 'react';

import './FormDatePicker.scss';

interface FormTextInputProps {
  label: string;
  name: string;
  id?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  required?: boolean;
}

function FormDatePicker({ handleChange, value, label, name, id, required }: FormTextInputProps) {
  return (
    <div>
      <label className="material-input-outline" htmlFor="dateOfBirth">
        <input
          id={id}
          type="text"
          onChange={handleChange}
          value={value}
          name={name}
          required={required ? true : false}
          onFocus={(e) => (e.currentTarget.type = 'date')}
          onBlur={(e) => (e.currentTarget.type = 'text')}
        />
        <span className="placeholder">{label}</span>
        {/* <p className="input__error">
                <i className="fas fa-exclamation-circle"></i> Email ID is missing
              </p> */}
      </label>
    </div>
  );
}

export default FormDatePicker;
