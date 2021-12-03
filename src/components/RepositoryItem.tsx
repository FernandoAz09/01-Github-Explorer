interface RepositoryItemProps { // Convenção mais utilizada no React // interface ou type + nome do componente + props
    repository: {
        name: string
        description: string
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps) { // o formato do objeto é no formato que demos anteriormente
    return (
        <li>
            <strong>{props.repository.name}</strong>

            <p>{props. repository.description}</p>

            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>
    )
}