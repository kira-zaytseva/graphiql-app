import React from 'react';
import styles from './style.module.scss';

interface TextareaProps {
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  value?: string;
  disabled?: boolean;
}

const Textarea = ({
  className,
  placeholder,
  onBlur,
  onChange,
  value,
  disabled = false,
}: TextareaProps) => {
  const classes = `${styles.textarea} ${className}`;

  return (
    <textarea
      className={classes}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
    ></textarea>
  );
};

export default Textarea;
