<<<<<<< Updated upstream
import styles from '../../styles/listarProdutos.module.css';

export default function ListarProdutos({ lista }) {
    return (
        <div className={styles.container}>
            <ul className={styles.bloco}>
                {lista.map(produto => (
                    <li className={styles.li} key={produto.id}>
                        <img className={styles.foto} src={produto.image} alt={produto.title} />
                        <div className={styles.content}>
                            <h2 className={styles.titulo}>{produto.title}</h2>
                            <p className={styles.valor}>R$ {produto.price}</p>
                            <button className={styles.botao}>Obter</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
=======
<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function Home() {

    const [lista, setLista] = useState([]);

    useEffect(() => {

        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
            } catch {
                alert('Ocorreu um erro na comunicação com o servidor!');
            }
        }

        receberListaProdutos();
    }, []);

    return (
        <>
            <h1>Lista de Produtos</h1>
            <ul>
                {lista.map(produto => (
                    <li key={produto.id}>
                        <h2>{produto.title}</h2>
                        <p>{produto.description}</p>
                        <p>Preço: ${produto.price}</p>
                        <img src={produto.image} alt={produto.title} width={100} />
=======
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
>>>>>>> ab3477114f9597cb35c7ecf129e6036a4731ba92
                    </li>
                ))}
            </ul>
        </>
<<<<<<< HEAD
    );
}
=======
    )
}
>>>>>>> ab3477114f9597cb35c7ecf129e6036a4731ba92
>>>>>>> Stashed changes
