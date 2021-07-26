import React from 'react';

import './FormTextInput.scss';
interface FormTextInputProps {
  label: string;
  name: string;
  id?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: 'email' | 'text' | 'password';
  required?: boolean;
}

function FormTextInput({ handleChange, value, type, label, name, id, required }: FormTextInputProps) {
  return (
    <div>
      <label className="material-input-outline" htmlFor={id}>
        <input
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
          type={type}
          required={required ? true : false}
        />
        <span className="placeholder">{label}</span>
      </label>
    </div>
  );
}

export default FormTextInput;
