import './App.css'
import {Hero} from './components/hero'
import {Footer} from './components/footer'
import {Header} from './components/header'
import { ProductCard } from './components/ProductCard'
import { ProductSearch } from './components/productSearch'
import { Cart } from './components/cart'
import { Banner } from './components/Banner'
import { useCart } from './hooks/useCart'
import { useProducts } from './hooks/useProducts'

function App() {
  const { cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, total } = useCart()
  const { products, loading, error } = useProducts()


  return (
      <div className="app">
        <Header/>
        <Banner/>

      <div className="contenidoPrincipal">
        <Hero/>

        <section className="seccion-productos" id="buscador">
          <ProductSearch products={products} />
        </section>

        <section className="seccion-productos" id="productos">
          <div className="titulo-seccion">
            <p>Catalogo</p>
            <h2>Productos Destacados</h2>
          </div>

          {loading && <p>Cargando productos...</p>}
          {error && <p>Error al cargar productos: {error}</p>}

          <div className="catalogo">
           {products.map( product => (
            <ProductCard key={product.id} {...product} onAdd={() => addToCart(product)}/>
           ))}
          </div>
        </section>

        <section className="seccion-productos" id="carrito">
          <Cart cart={cart} total={total} onRemove={removeFromCart} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onClear={clearCart}/>
        </section>

      </div>

      <Footer/>   
      </div>
    
  )
}

export default App
