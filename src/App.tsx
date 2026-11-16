import './App.css'

import { Header } from './components/header'
import { Banner } from './components/Banner'
import { Hero } from './components/hero'
import { ProductSearch } from './components/productSearch'
import { ProductCard } from './components/ProductCard'
import { CharacterCard } from './components/CharacterCard'
import { Cart } from './components/cart'
import { Footer } from './components/footer'

import { useCart } from './hooks/useCart'
import { useProducts } from './hooks/useProducts'
import { useCharacters } from './hooks/useCharacters'

function App() {
  const { cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, total } = useCart()
  const { products, loading, error } = useProducts()
  const { characters, loading: loadingCharacters, error: errorCharacters } = useCharacters()

  return (
    <div className="app">
      <Header />
      <Banner />

      <div className="contenidoPrincipal">
        <Hero />

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
            {products.map(product => (
              <ProductCard key={product.id} {...product} onAdd={() => addToCart(product)} />
            ))}
          </div>
        </section>

        <section className="seccion-productos" id="personajes">
          <div className="titulo-seccion">
            <p>Catalogo</p>
            <h2>Personajes de Rick and Morty</h2>
          </div>

          {loadingCharacters && <p>Cargando personajes...</p>}
          {errorCharacters && <p>Error al cargar personajes: {errorCharacters}</p>}

          <div className="personajes">
            {characters.map(character => (
              <CharacterCard key={character.id} {...character} />
            ))}
          </div>
        </section>

        <section className="seccion-productos" id="carrito">
          <Cart
            cart={cart}
            total={total}
            onRemove={removeFromCart}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onClear={clearCart}
          />
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default App
