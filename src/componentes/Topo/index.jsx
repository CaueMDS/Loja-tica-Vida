import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/logo.png'

import styles from "./Topo.module.css"

export default function Topo(){
    return(
        <div className={styles.container}>
            <Image src={Logo} alt="logomarca" className={styles.imagem}/>
            <nav className={styles.links}>
                <Link className={styles.link} href="#produtos">PRODUTOS</Link>
                <Link className={styles.link} href="#sobre">SOBRE</Link>
                <Link className={styles.link} href="#contatos">CONTATOS</Link>
            </nav>   
        </div>
    )
}