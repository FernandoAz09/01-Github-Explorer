import { RepositoryItem } from "./RepositoryItem"
import { useEffect, useState } from "react" // hooks do React

import '../styles/repositories.scss'

//https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]) // Carregando uma LISTA sempre com um ARRAY VAZIO ([]) // hook para alterar o estado

    useEffect(() => { // uso do hook para fazer chamada API para mostrar os dados dos repositorios da rocketseat
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json()) // então ( transformar a resposta em resposta .json)
        .then(data => setRepositories(data)) // então (com os dados em json, preecher o estado que será alterado) 
    }, []) // Sempre utilizar o 2º parametro, senão um loop infinito acontece

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}