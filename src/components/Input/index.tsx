import React from 'react';
import { InputProps } from './type';
import styles from './style.module.scss';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, className, error, id, labelName, classNameWrapper, onChange, onBlur, name }, ref) => {
    const classes = `${styles.input} ${className} ${error ? `${styles.input__error}` : ''}`;
    const classesWrapper = `${styles.input__wrapper} ${classNameWrapper}`;

    return (
      <fieldset className={classesWrapper}>
        {labelName && (
          <label className="label" htmlFor={id}>
            {labelName}
          </label>
        )}
        <input
          name={name}
          id={id}
          {...(value ? { value } : {})}
          className={classes}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
        {error && <span className={styles.input__error__text}>{error}</span>}
      </fieldset>
    );
  }
);

export default Input;
