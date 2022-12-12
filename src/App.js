import './App.css';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Hello React</h2>
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
