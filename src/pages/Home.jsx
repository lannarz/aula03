<<<<<<< Updated upstream
=======
<<<<<<< HEAD
export default function ListarProdutos({lista}) {
    return(
        <>
            {lista.map(produto => (
                <div key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.descripition}</p>
                    <p>Preço: {produto.price}</p>
                    <img src={produto.image} alt={produto.title} width={200}/>
                </div>
            ))}
        </>
    )
=======
>>>>>>> Stashed changes
import { useEffect, useState } from "react";
import ListarProdutos from "./ListarProdutos";

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
            <h1>Produtos Disponíveis</h1>
           <ListarProdutos lista={lista}/>
        </>
    );
<<<<<<< Updated upstream
=======
>>>>>>> ab3477114f9597cb35c7ecf129e6036a4731ba92
>>>>>>> Stashed changes
}