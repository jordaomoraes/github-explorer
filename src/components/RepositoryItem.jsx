export function RepositoryItem(props) {
  return (
    <ul>
       <li>
        <strong>{props.repository.name }</strong>
        <p>{props.repository?.description ?? "Sem descrição por padrão"}</p>
        <a href={props.repository.html_url}> Acessar respositorio</a>
      </li>
    </ul>
  );
}
