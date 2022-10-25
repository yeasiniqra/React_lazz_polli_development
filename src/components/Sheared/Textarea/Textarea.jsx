import React from 'react';
import { forwardRef } from 'react';
import { useState } from 'react';
import styles from './Textarea.module.css';

const Textarea = forwardRef(
  ({ label, value, onChange, onBlur, required, rows, placeholder }, ref) => {
    const [error, setError] = useState(null);
    const [isDirty, setIsDirty] = useState(false);

    const changeHandler = ({ target }) => {
      if (target.value.length > 0) {
        setIsDirty(true);
      }

      onChange && onChange(target.value);
    };

    const blurHandle = ({ target }) => {
      if (required && target.value.length === 0 && isDirty) {
        setError(`${label} is required`);
      }

      onBlur && onBlur(target.value);
    };

    const focusHandler = () => {
      setError(null);
    };

    const labelJSX = required ? (
      <span className={styles.form_control__label}>
        {label}{' '}
        <span className={styles.form_control__label__option}>(Required)</span>
      </span>
    ) : (
      <span className={styles.form_control__label}>
        {label}{' '}
        <span className={styles.form_control__label__option}>(Optional)</span>
      </span>
    );

    return (
      <div className={styles.form_control}>
        <label htmlFor={label}>
          {!!label && labelJSX}
          <textarea
            ref={ref}
            id={label}
            value={value}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={blurHandle}
            placeholder={placeholder}
          />
          <small>{error ? error : ' '}</small>
        </label>
      </div>
    );
  }
);

export default Textarea;
