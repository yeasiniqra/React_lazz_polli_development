import { useState } from 'react';
import styles from './Input.module.css';

const Input = ({
  label,
  value,
  onChange,
  onBlur,
  required,
  disabled = false,
  validators = [],
  placeholder,
  className,
  type = 'text'
}) => {
  const [error, setError] = useState(null);
  const [isDirty, setIsDirty] = useState(false);

  const changeHandler = ({ target }) => {
    if (target.value.length > 0) {
      setIsDirty(true);
    }

    onChange(target.value);
  };

  const blurHandler = ({ target }) => {
    if (required && target.value.length === 0 && isDirty) {
      setError(`${label} is required`);
    }

    validators.forEach((item) => {
      if (!item.validator(target.value)) {
        setError(item.message);
      }
    });

    onBlur && onBlur(target.value);
  };

  const focusHandler = ({ target }) => {
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
    <div
      className={`${styles.form_control} ${
        (required || validators.length > 0) && styles['form_control--error']
      } ${className}`}
    >
      <label htmlFor={label}>
        {!!label && labelJSX}
        <input
          type={type}
          disabled={disabled}
          id={label}
          value={value}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          placeholder={placeholder}
        />
        <small className='warining'>{error && isDirty ? error : ' '}</small>
      </label>
    </div>
  );
};

export default Input;
