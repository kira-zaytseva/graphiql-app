import React, { MouseEventHandler } from 'react';
import styles from './style.module.scss';

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  isIcon?: boolean;
  color?: string;
  className?: string;
  isTransparent?: boolean;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  size = 'small',
  isIcon = false,
  color,
  className,
  isTransparent = false,
  isLoading = false,
}) => {
  const buttonClassName = `${styles.button} ${isIcon ? styles.iconButton : ''}  
  ${isTransparent ? styles.transparent : ''} ${styles[`btn-${size}`]}`;

  const buttonStyles = {
    backgroundColor: color,
  };

  return (
    <button
      className={`${buttonClassName} ${className || ''}`}
      type={type}
      style={buttonStyles}
      onClick={onClick}
    >
      {isLoading ? <span className={styles.spinner} /> : children}
    </button>
  );
};

export default Button;
