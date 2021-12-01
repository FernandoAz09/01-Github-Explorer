export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>

            <p>{props. repository.description ?? 'Description'}</p>

            <a href={props.repository.link ?? 'link'}>
                Acessar repositório
            </a>
        </li>
    )
}