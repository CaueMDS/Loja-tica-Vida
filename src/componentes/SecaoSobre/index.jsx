import Image from "next/image";

import Imagem01 from '../../../public/loja.png'
import Imagem02 from '../../../public/atendimento.png'

import style from './SecaoSobre.module.css'

export default function SecaoSobre(){
    return(
        <div id="sobre"  className={style.container}>
            <div className={style.introducao}>
                <h3>Quem Somos nós?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>

            <div className={style.box}>
                <div className={style.box2}>
                    <div className={style.box3_imagem}>
                        <Image src={Imagem01} className={style.imagem}/>
                    </div>
                    <div className={style.box3}>
                        <h4>Nossas Filiais</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                </div>
                <div className={style.box2}>
                    <div className={style.box3}>
                        <h4>Atendimento flexível</h4>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <div className={style.box3_imagem}>
                        <Image src={Imagem02} className={style.imagem}/>
                    </div>
                </div>
            </div>
        </div>
    );
}