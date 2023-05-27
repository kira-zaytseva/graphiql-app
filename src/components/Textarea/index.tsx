import React from 'react';
import styles from './style.module.scss';

interface TextareaProps {
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  value?: string;
}

const Textarea = ({ className, placeholder, onBlur, onChange, value }: TextareaProps) => {
  const classes = `${styles.textarea} ${className}`;

  return (
    <textarea
      className={classes}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    ></textarea>
  );
};

export default Textarea;
