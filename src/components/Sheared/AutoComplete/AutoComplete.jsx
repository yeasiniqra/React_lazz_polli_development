import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Select from '../Select/Select';

const AutoComplete = ({
  value,
  onChange,
  nameField,
  idField,
  url,
  dataset,
  mapper,
  label,
  required,
  readyToLoad,
  previewText,
  placeholder,
  others = []
}) => {
  const [internalDataSet, setInternalDataSet] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (value) => {
    if (value[idField] === undefined && required) {
      setError(`${label} is required`);
     } else {
       setError(null);
     }

    onChange(value);
  };

  const blurHandler = () => {};
  const focusHandler = () => {
    setError(null);
  }

  // Depriciated
  const getData = useCallback(
    (url) => {
     
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mapper, readyToLoad]
  );

  useEffect(() => {
    if (url) {
      getData(url);
    }
  }, [url, getData]);

  const options = dataset ? dataset : internalDataSet;

  return (
    <Select
      error={error}
      label={label}
      name={label}
      onBlur={blurHandler}
      onSelect={changeHandler}
      options={options}
      selectedOption={value}
      config={{ searchPath: nameField, textPath: nameField, keyPath: idField }}
      previewText={previewText || ''}
      required={required}
      onFocus={focusHandler}
      isLoading={isLoading}
      placeholder={placeholder}
    />
  );
};

export default AutoComplete;
