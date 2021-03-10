
interface RepositotyItemProps{

  repository :{
    name:string,
    description:string,
    html_url:string,
  }
}

export function RepositoryItem(props : RepositotyItemProps) {
  
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
