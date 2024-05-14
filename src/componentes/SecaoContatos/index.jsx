import Image from 'next/image'

import Local from '../../../public/local.png'
import Fone from '../../../public/telefone.png'
import Email from '../../../public/email.png'

import Face from '../../../public/fb.png'
import Insta from '../../../public/ig.png'
import Twitter from '../../../public/tt.png'

import style from './SecaoContatos.module.css'

export default function SecaoContatos(){
    return(
        <div id="contatos" className={style.container}>
            <div className={style.textos}>
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>
            <div className={style.contatos}>
                <div className={style.box}>
                    <h3>Nossos Contatos</h3>
                    <p><Image src={Local} className={style.icone}/> Nova Iguaçu, RJ</p>
                    <p><Image src={Fone} className={style.icone}/> (21) 9999-9999</p>
                    <p><Image src={Email} className={style.icone}/> contato@oticavida.com</p>
                </div>
                <div className={style.box}>
                    <h3>Nossas Redes Sociais</h3>
                    <p><Image src={Face} className={style.icone}/> /OticaVida</p>
                    <p><Image src={Insta} className={style.icone}/> @oticavidarj</p>
                    <p><Image src={Twitter} className={style.icone}/> @oticavidarj</p>
                </div>
            </div>
            
        </div>
    )
}