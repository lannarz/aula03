import styles from '../../styles/listarProdutos.module.css'

export default function ListarProdutos({lista}) {
    return(
        <>


            <ul className={styles.bloco}>
                {lista.map(produto => (
                    <li className={styles.li} key={produto.id}>
                        <button className={styles.botao}>Comprar</button>
                        <h2 className={styles.titulo}> {produto.title}</h2>
                        <p className={styles.valor}>Valor: R${produto.price}</p>
                        <img className={styles.foto} src={produto.image} alt={produto.title} width={200}/>
                       
                    </li>
                ))}
            </ul>
        </>
    )
}