
const RepositoryList = () => {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="#">Acessar repositório</a>
                </li>
                <li>
                    <strong>axios</strong>
                    <p>HTTP AJAX requests</p>

                    <a href="#">Acessar repositório</a>
                </li>
                <li>
                    <strong>React</strong>
                    <p>Liberay for components</p>

                    <a href="#">Acessar repositório</a>
                </li>
            </ul>
        </section>
    )
}

export default RepositoryList;