"use client";

import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { ISecureInputFieldProps } from '@/interfaces/uiInterfaces/common';

import styles from './SecureInputField.module.scss';

const SecureInputField: React.FC<ISecureInputFieldProps> = (props) => {

  const { name, value, placeholder, className, onChange, onBlur } = props;

  const [show, setShow] = useState(false);

  const inputControlAttributes = {
    type: show ? 'text' : 'password',
    className: styles.inputControl,
    placeholder,
    name,
    value,
    onChange,
    onBlur
  };

  const showHideControlAttributes = {
    className: styles.showHideControl,
    onClick() {
      setShow(!show);
    }
  };

  let secureInputFieldMainClassName = styles.secureInputFieldMain;

  if (typeof className !== 'undefined') {
    secureInputFieldMainClassName += ` ${className}`;
  }

  return (
    <div className={secureInputFieldMainClassName}>
      <input {...inputControlAttributes} />
      <button {...showHideControlAttributes}>
        {
          show ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />
        }
      </button>
    </div>
  );
};

export default SecureInputField;