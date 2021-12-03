import { useEffect, useState } from "react" // hooks do React
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

interface Repository{
    name: string
    description: string
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]) // Carregando uma LISTA sempre com um ARRAY VAZIO ([]) // hook para alterar o estado

    useEffect(() => { // uso do hook para fazer chamada API para mostrar os dados dos repositorios da rocketseat
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json()) // então ( transformar a resposta em resposta .json)
        .then(data => setRepositories(data)) // então (com os dados em json, preecher o estado que será alterado) 
    }, []) // Sempre utilizar o 2º parametro, senão um loop infinito acontece

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => { // map() percorrendo o array para retornar de forma dinamica as informações.
                return <RepositoryItem key={repository.name} repository={repository} /> //resolvendo erro utilizando a propriedade key
                })}
            </ul>
        </section>
    )
}