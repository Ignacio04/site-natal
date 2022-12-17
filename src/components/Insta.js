import './Insta.css';


export default function Insta(){
    return(
        <div className='Insta'>
            <h1 id="siga">SIGA-NOS NO INSTAGRAM</h1>
            <div className='img'>
                <a href="link" className="imagens" target="_blank">
                    <img src="./Rectangle 34.png"></img>
                    <p className='canto_direito'><b>DecorHouse</b> a DecorHouse já está em clima de copa do mundo ...</p>
                </a>

                <a href="link" className="imagens" target="_blank">
                    <img src="./image_35_1.jpg"></img>
                    <p className='canto_esquerdo canto_direito'><b>DecorHouse</b> já está pensando em como vai decorar a casa para ...</p>
                </a>

                <a href="link" className="imagens" target="_blank">
                    <img src="./image 25.png"></img>
                    <p className='canto_esquerdo'><b>DecorHouse</b> visite nossas lojas para comprar sua decoração de ...</p>
                </a>
            </div>
        </div>
    )
}