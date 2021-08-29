import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"
import "../styles/repositories.scss"

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {
                    repositories && repositories.map(repo => <RepositoryItem key={repo.id} repository={repo} />)
                }
            </ul>
        </section>
    )
}