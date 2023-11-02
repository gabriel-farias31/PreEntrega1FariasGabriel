
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/cartwidget/cartWidget'
import ItemListConteiner from './components/itemListConteiner/itemListConteiner'

function App() {
  

  return (
    <>

      <NavBar />

     <CartWidget />

      <ItemListConteiner greeting={hola} />
      </>

  )
}

export default App
