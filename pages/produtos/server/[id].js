export async function getServerSideProps(context) {
    const { id } = context.query;

    return {
        props: {
            id
        }
    }
}

function Produtos(props) {
    return <div>
        <p>Desse jeito, toda a página fica estática, incluído o atributo id</p>
        <p>Pontos importantes:</p>
        <li>Todo processamento de dados dinâmicos é feito no server-side</li>
        <li>Como o processamento de dados dinâmicos é feito no server-side, isso pode prejudicar a performance do site em caso de picos de acesso</li>
        <p>Id do Produto: {props.id}</p>
    </div>
}

export default Produtos;