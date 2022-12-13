import './App.css';
import Menu from './components/Menu/index';
import ImgNatal from './components/Menu/imagem';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="Appp">
      <Menu/>
      <ImgNatal/>
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
