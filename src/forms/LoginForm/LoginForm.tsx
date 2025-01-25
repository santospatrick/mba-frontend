import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from '../../api/sign-in'
import { useNavigate } from 'react-router-dom'

interface LoginFormValues {
  email: string
  password: string
}

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormValues>()
  const navigate = useNavigate()

  const { mutateAsync: login } = useMutation({
    mutationFn: signIn,
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      await login(data)
      navigate('/')
    } catch {
      alert('Failed to login')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Email" {...register('email', { required: true })} />

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
