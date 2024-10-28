import styles from '../../styles/listarProdutos.module.css'

export default function ListarProdutos({lista}) {
    return(
        <>
            <ul className={styles.bloco}>
                {lista.map(produto => (
                    <li className={styles.li} key={produto.id}>
                        <h2 className={styles.titulo}> {produto.title}</h2>
                        <p>{produto.descripition}</p>
                        <p className={styles.valor}>Valor: R${produto.price}</p>
                        <img className={styles.foto} src={produto.image} alt={produto.title} width={200}/>
                    </li>
                ))}
            </ul>
        </>
    )
}