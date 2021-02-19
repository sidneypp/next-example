export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        },
        {
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    await delay(5000);
    const { id } = context.params;

    return {
        props: {
            id
        }
    }
}

function Produtos(props) {
    return <div>
        <p>Desse jeito, toda a página fica estática, incluído o atributo id, com algumas ressalvas</p>
        <p>Pontos importantes:</p>
        <li>Essa página tem um delay de 5 segundos(que representa uma consulta em uma API)</li>
        <li>A página 1 e 2 já foram criadas estáticamente e não terão esse delay, pois ele já foi processado durante o build do projeto</li>
        <li>Ao acessar pela primeira vez uma nova página, o processamento será feito via server-side e será necessário aguardar os 5 segundos do delay</li>
        <li>Ao acessar pela segunda vez uma página, o next terá criado uma página estática, aumentando em inúmeras vezes a performance e não será necessário aguardar novamente o delay de 5 segundos</li>
        <li>A chance de indisponibilidade, em casos de pico de acesso é praticamente zero</li>
        <li>O SEO não é prejudicado, pois todos os dados dinâmicos já foram processados</li>
        <p>Id do Produto: {props.id}</p>
    </div>
}

export default Produtos;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}