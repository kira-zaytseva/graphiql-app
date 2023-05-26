import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';

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
    <div className="form-wrapper">
      <h2>{title}</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">{translation.email}</label>
          <br></br>
          <input
            {...register('email', {
              required: true,
            })}
            type="email"
            placeholder="enter email"
          />
        </div>
        <div>{errors?.email && <p>Enter correct e-maill</p>}</div>
        <div>
          <label htmlFor="password">{translation.password}</label>
          <br></br>
          <input
            {...register('password', {
              required: true,
              pattern: /[A-Za-z0-9]{6,}/i,
            })}
            type="password"
            placeholder="enter password"
          />
        </div>
        <div>
          {errors?.password && (
            <p>
              The password must contains minimum six letters. Special characters are not allowed
            </p>
          )}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
