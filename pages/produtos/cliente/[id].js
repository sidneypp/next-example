import { useRouter } from 'next/router';

function Produtos() {
    const router = useRouter();
    const { id } = router.query;

    return <div>
        <p>Desse jeito, toda a página fica estática, menos o atributo id</p>
        <p>Pontos importantes:</p>
        <li>Todo processamento de dados dinâmicos é feito no client-side</li>
        <li>Como o processamento de dados dinâmicos é feito no client-side(em tempo de execução), isso prejudica o SEO, pois esses dados não existem estáticamente</li>
        <p>Id do Produto: {id}</p>
    </div>
}

export default Produtos;