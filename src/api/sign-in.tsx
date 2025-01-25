import { api } from '../libs/axios'

export interface SigninBody {
  email: string
  password: string
}

export const signIn = async ({ email, password }: SigninBody) => {
  await api.post('/sellers/sessions', {
    email,
    password,
  })
}
