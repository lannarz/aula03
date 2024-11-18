import { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";
import styles from '../styles/listarProdutos.module.css'

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

    const orderAZ = () => {
        const listaOrdenada = [...lista].sort((a, b) => a.title.localeCompare(b.title));
        setLista(listaOrdenada)
    }

    const orderZA = () => {
        const listaOrdenada = [...lista].sort((a, b) => b.title.localeCompare(a.title));
        setLista(listaOrdenada)
    }

    const crescente = () => {
        const listaOrdenada = [...lista].sort((a, b) => a.price-b.price);
        setLista(listaOrdenada)
    }
    
    const decrescente = () => {
        const listaOrdenada = [...lista].sort((a, b) => b.price-a.price);
        setLista(listaOrdenada)
    }
    



    return (
        <>

           <h1 className={styles.lp}>Produtos Disponíveis</h1>


            <div className={styles.filtros}>
            <button className={styles.az} onClick={() => orderAZ()}>
                AZ
            </button>

            <button className={styles.za} onClick={() => orderZA()}>
                ZA
            </button>

            <button className={styles.cre}onClick={() => crescente()}>
                Preço crescente
            </button>

            <button className={styles.decre} onClick={() => decrescente()}>
                Preço decrescente
            </button>
            </div>

           <ListarProdutos lista={lista}/>
        </>
    );
}