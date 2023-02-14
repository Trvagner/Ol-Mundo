import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.tiulo}>
                    Olá Mundo
                </h1>
                <p className={styles.paragrafo}>
                    Boas Vindas ao meu espaço pessoal! Eu sou Vagner R. Torres, 
                    Programador junior! Aqui aprendendo vários conhecimentos e tecnologias!
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=" "
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Vagner R. Torres"
                />
            </div>
        </div>
    )
}
