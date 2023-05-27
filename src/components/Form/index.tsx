import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import styles from '../../assets/styles/login.module.scss';
import Button from '../Button';
// import Input from '../Input';

export type FormData = {
  email: string;
  password: string;
};

type FormProps = {
  onSendRequest: (data: FormData) => void;
  title: string;
};

const Form: FC<FormProps> = ({ onSendRequest, title }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
  });
  const [isLoading, setIsLoading] = useState(false);

  const translation = useTranslation();

  const onSubmit: SubmitHandler<FormData> = (data): void => {
    setIsLoading(true);
    onSendRequest(data);
    setIsLoading(false);
  };

  return (
    <div className={styles.login__wrapper__container}>
      <h2>{title}</h2>
      <form className={styles.login__wrapper__container__form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">{translation.email}</label>
          <input
            {...register('email', {
              required: true,
            })}
            type="email"
          />
        </div>
        <div>{errors?.email && <p>Enter correct e-maill</p>}</div>
        <div>
          <label htmlFor="password">{translation.password}</label>
          <input
            {...register('password', {
              required: true,
              pattern: /^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            })}
            type="password"
          />
        </div>
        {errors?.password && <p>{translation.errorPassword}</p>}
        <Button type="submit" isLoading={isLoading}>
          {translation.sendRequest}
        </Button>
      </form>
    </div>
  );
};

export default Form;
