import './App.css';
import Menu from './components/Menu/index';
import ImgNatal from './components/Menu/imagem';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';
import RetTras from './components/Menu/retangulo';

function App() {
  return (
    <div className="App">
      <Menu/>
      <ImgNatal/>
      <RetTras/>
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
