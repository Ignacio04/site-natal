import './menu.css';


function clicado(){
  alert("Botao Clicado")
}

export default function Menu(){
  return(
    <div className="menu">
      
      <button className="BHome" onClick={clicado}>
        Home
        </button>
      <button className="BProdutos" onClick={clicado}>
        Produtos
        </button>
      <button className="BSobre" onClick={clicado}>
        Sobre
        </button>
      
    </div>
  )
}


