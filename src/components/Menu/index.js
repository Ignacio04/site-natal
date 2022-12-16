import './menu.css';


function clicado(){
  alert("Voce ja esta na Home!")
}
function descemeio(){
  window.scrollTo(0,500)
} 
function descefim(){
  window.scrollTo(0,10000)
}


export default function Menu(){
  return(
    <div className="menu">
      
      <button className="BHome" onClick={clicado}>
        Home
        </button>
      <button className="BProdutos" onClick={descemeio}>
        Produtos
        </button>
      <button className="BSobre" onClick={descefim}>
        Sobre
        </button>
        
      
    </div>
  )
}


