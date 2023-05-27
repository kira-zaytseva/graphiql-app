import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import styles from '../../assets/styles/login.module.scss';

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
    reset,
  } = useForm<FormData>({
    mode: 'onSubmit',
  });

  const translation = useTranslation();

  const onSubmit: SubmitHandler<FormData> = (data): void => {
    console.log(`FORM: Запрос на сервер отправлен!`);

    onSendRequest(data);
    reset();
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
        <button type="submit">{translation.sendRequest}</button>
      </form>
    </div>
  );
};

export default Form;
