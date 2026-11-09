// Shape returned by https://fakestoreapi.com/products
export interface ApiProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

// Shape used inside the app
export interface Product {
  id: number
  image: string
  name: string
  category: string
  price: number
  stock: number
}

export const adaptProduct = (p: ApiProduct): Product => ({
  id: p.id,
  image: p.image,
  name: p.title,
  category: p.category,
  price: p.price,
  stock: p.rating.count,
})
