import React from 'react';

import './InputButton.scss';

interface InputButonProps {
  isLoading?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  label: string;
  category: 'primary' | 'danger' | 'google' | 'facebook';
  height?: string;
  width?: string;
  icon?: string;
  isWideBtn?: boolean;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

function InputButton({ isLoading, type, label, category, icon, isWideBtn, onClickHandler }: InputButonProps) {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      disabled={isLoading}
      className={`material-btn btn ${category} ${isWideBtn ? 'wide-btn' : ''}`}
    >
      {!isLoading && (
        <span className="btn__text">
          {icon && <i className={'fab ' + icon}></i>} {label}
        </span>
      )}

      {isLoading && (
        <span className="btn__loader">
          <div className="loader loading-spinner"></div>
          Please wait...
        </span>
      )}
    </button>
  );
}

export default InputButton;
