import { useQuery } from '@tanstack/react-query'
import { getProductsMe } from '../api/products-me'

const Home = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['products-me'],
    queryFn: getProductsMe,
  })

  return (
    <div>
      <h1>Home</h1>
      <p className="mb-10">Welcome to the home page</p>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        data?.products.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Home
