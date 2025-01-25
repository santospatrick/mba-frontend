import { api } from '../libs/axios'

interface Product {
  id: string
  title: string
  description: string
  priceInCents: number
  status: string
  owner: {
    id: string
    name: string
    phone: string
    email: string
    avatar: {
      id: string
      url: string
    }
  }
  category: {
    id: string
    title: string
    slug: string
  }
  attachments: Array<{
    id: string
    url: string
  }>
}

interface GetProductsMeResponse {
  products: Product[]
}

export const getProductsMe = async () => {
  const response = await api.get<GetProductsMeResponse>('/products/me')

  return response.data
}
