import { SubmitHandler, useForm } from 'react-hook-form'

interface LoginFormValues {
  email: string
  password: string
}

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormValues>()

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Email" {...(register('email'), { required: true })} />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="Password"
        {...register('password', { required: true })}
      />

      <input type="submit" />
    </form>
  )
}

export default LoginForm
