import { useState } from "react";
import './Products.css';

function Products() {

  const [index, setIndex] = useState(0);

  return (
    <div className="Products">
      <h2>PRODUTOS DISPONÍVEIS</h2>
      <div className="productsBox">
        <div className="tabs_head">
          <button onClick={() => { setIndex(0) }}>
            <h3>Copa do Mundo</h3>
          </button>
          <button onClick={() => { setIndex(1) }}>
            <h3>Natal</h3>
          </button>
          <button onClick={() => { setIndex(2) }}>
            <h3>Ano Novo</h3>
          </button>
        </div>
        <div hidden={index !== 0}>
          {copa.map((todo) => (
            <div className="tab_contant">
              <span className="box_price">R$ {todo.preco}</span>
              <h3 className="item_name">{todo.nome}</h3>
              <p className="item_description">{todo.describe}</p>
            </div>
          ))}
        </div>
        <div hidden={index !== 1}>
          {natal.map((todo) => (
            <div className="tab_contant">
              <span className="box_price">R$ {todo.preco}</span>
              <h3 className="item_name">{todo.nome}</h3>
              <p className="item_description">{todo.describe}</p>
            </div>
          ))}
        </div>
        <div hidden={index !== 2}>
          {anoNovo.map((todo) => (
            <div className="tab_contant">
              <span className="box_price">R$ {todo.preco}</span>
              <h3 className="item_name">{todo.nome}</h3>
              <p className="item_description">{todo.describe}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const copa = [
  { nome: 'Bandeirinhas', describe: 'Conjunto de bandeirinhas.', preco: 12.0 },
  { nome: 'Uniforme seleção', describe: 'Uniforme da seleção.', preco: 70.0 },
  { nome: 'Vuvuzela', describe: 'Para fazer aquela barulheira.', preco: 30.0 },
  { nome: 'Peruca Colorida', describe: 'Peruca nas cores verde e amarelo.', preco: 25.0 },
  { nome: 'Faixa 100% Jesus', describe: 'Faixa utilizada por Neymar.', preco: 5.0 }
];
const natal = [
  { nome: 'Produto 1', describe: 'Lorem ipsum dolor sit amet.', preco: 15.0 },
  { nome: 'Produto 2', describe: 'Lorem ipsum dolor sit amet.', preco: 25.0 },
  { nome: 'Produto 3', describe: 'Lorem ipsum dolor sit amet.', preco: 32.0 }
];
const anoNovo = [
  { nome: 'Produto 4', describe: 'Lorem ipsum dolor sit amet.', preco: 15.0 },
  { nome: 'Produto 5', describe: 'Lorem ipsum dolor sit amet.', preco: 12.0 },
  { nome: 'Produto 6', describe: 'Lorem ipsum dolor sit amet.', preco: 17.0 },
  { nome: 'Produto 7', describe: 'Lorem ipsum dolor sit amet.', preco: 75.0 },
  { nome: 'Produto 8', describe: 'Lorem ipsum dolor sit amet.', preco: 40.0 },
  { nome: 'Produto 9', describe: 'Lorem ipsum dolor sit amet.', preco: 55.0 }
];

export default Products;