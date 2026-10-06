import './App.css'
import {Hero} from './components/hero'
import {Footer} from './components/footer'
import {Header} from './components/header'
import { About } from './components/About'
import { ProductCard } from './components/ProductCard'
import { products } from './data/data'
import { ProductSearch } from './components/productSearch'
import { Cart } from './components/cart'
import { useCart } from './hooks/useCart'

function App() {
  const { cart, addToCart, removeFromCart, clearCart, total } = useCart()

  return (
      <div className="app">
        <Header/>

      <div className="contenidoPrincipal">
        <Hero/>
        <About/>

        <section className="seccion-productos" id="productos">
          <div className="titulo-seccion">
            <p>Catalogo</p>
            <h2>Productos Destacados</h2>
          </div>

          <div className="catalogo">
           {products.map( product => (
            <ProductCard key={product.id} id={product.id} icon={product.icon} name={product.name} category={product.category} price={product.price} stock={product.stock} onAdd={() => addToCart(product)}/>
           ))}
          </div>
        </section>

        <section className="seccion-productos" id="carrito">
          <Cart cart={cart} total={total} onRemove={removeFromCart} onClear={clearCart}/>
        </section>

        <section className="seccion-productos" id="productos">
          <ProductSearch />
        </section>

      </div>

      <Footer/>   
      </div>
    
  )
}

export default App
