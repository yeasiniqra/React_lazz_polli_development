import { useEffect, useRef, useState } from 'react';
import { useCloseOnOutsideClick } from '../../../hooks/useOutSideClickedHandler';
import classes from './Select.module.css';

const Select = ({
  label,
  name,
  onSelect,
  options,
  config = {},
  selectedOption,
  previewText,
  error,
  onBlur,
  required,
  onFocus,
  isLoading = false,
  placeholder
}) => {
  const { searchPath = 'text', textPath = 'text', keyPath = 'id' } = config;

  const [listIsShown, setListisShown] = useState(false);
  const inputRef = useRef();
  const selectRef = useRef();
  const [inputValue, setInputValue] = useState(
    selectedOption?.id ? selectedOption[textPath] : ''
  );
  const [optionList, setOptionList] = useState(options);

  useEffect(() => {
    if (selectedOption) {
      setInputValue(selectedOption[textPath]);
    }
    setOptionList(options);
  }, [options, selectedOption, textPath]);

  useCloseOnOutsideClick(selectRef, () => {
    setListisShown(false);
  });

  const focusHandler = () => {
    setListisShown(true);
    onFocus();
  };

  const blurHandler = ({ target }) => {
    onBlur(target.value);
  };

  const iconClickHandler = () => {
    inputRef.current.focus();
  };

  const optionSelectHandler = (option) => {
    setInputValue(option[textPath]);
    setListisShown(false);
    onSelect && onSelect(option);
  };

  const inputChangeHandler = ({ target }) => {
    setInputValue(target.value);
    filterOptions(target.value.trim());
  };

  const filterOptions = (searchQuery) => {
    searchQuery.toLowerCase();

    if (searchQuery === '') {
      setOptionList(options);
      onSelect({});
      return;
    }

    const filteredOptions = options.filter((option) =>
      option[searchPath].toLowerCase().includes(searchQuery.toLowerCase())
    );

    setOptionList(filteredOptions);
  };

  const labelJSX = required ? (
    <span className={classes.form_control__label}>
      {label}{' '}
      <span className={classes.form_control__label__option}>*</span>
    </span>
  ) : (
    <span className={classes.form_control__label}>
      {label}{' '}
      <span className={classes.form_control__label__option}></span>
    </span>
  );

  return (
    <div className={classes.form_control} ref={selectRef}>
      <label htmlFor={name}>{labelJSX}</label>
      <div className={classes.input}>
        <div className={classes['input-box']}>
          <input
            type='text'
            id={name}
            onFocus={focusHandler}
            onBlur={blurHandler}
            ref={inputRef}
            value={inputValue ?? ''}
            onChange={inputChangeHandler}
            autoComplete='off'
            placeholder={placeholder}
          />
          <div className={classes.icon} onClick={iconClickHandler}>
            &#9660;
          </div>
        </div>
        <div
          className={`${classes.options} ${
            listIsShown ? classes['on-focus'] : classes['off-focus']
          }`}
        >
          <ul>
            {isLoading && (
              <li>{'Loading...'}</li>
            )}
            {!isLoading && optionList.length < 1 && (
              <li>{previewText ?? 'No data to show'}</li>
            )}
            {!isLoading &&
              optionList.length > 0 &&
              optionList.map((option, index) => (
                <li
                  onClick={optionSelectHandler.bind(null, option)}
                  key={index}
                >
                  {option[textPath]}
                </li>
              ))}
          </ul>
        </div>
        <small>{error}</small>
      </div>
    </div>
  );
};

export default Select;
