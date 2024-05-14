import Image from "next/image";
import Oculos01 from '../../../public/oculos01.png'
import Oculos02 from '../../../public/oculos02.png'
import Oculos03 from '../../../public/oculos03.png'
import Oculos04 from '../../../public/oculos04.png'

import style from './SecaoProdutos.module.css'

export default function SecaoProdutos(){
    return(
        <div id="produtos" className={style.container}>

            <div className={style.introducao}>
                <h3>Nossos Produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>

            <div className={style.produtos}>
                <div className={style.produto}>
                    <h4>Óculos de grau</h4>
                    <Image src={Oculos01} className={style.imagem}/>
                    <h5>R$ 500,00</h5>
                </div>
                <div className={style.produto}>
                    <h4>Óculos transition</h4>
                    <Image src={Oculos02} className={style.imagem}/>
                    <h5>R$ 750,00</h5>
                </div>
                <div className={style.produto}>
                    <h4>Óculos de sol</h4>
                    <Image src={Oculos03} className={style.imagem}/>
                    <h5>R$ 700,00</h5>
                </div>
                <div className={style.produto}>
                    <h4>Óculos infantil</h4>
                    <Image src={Oculos04} className={style.imagem}/>
                    <h5>R$ 500,00</h5>
                </div>
            </div>

            <div className={style.lista}>
                <h4>Todos os nossos produtos incluem:</h4>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </div>
    );
}