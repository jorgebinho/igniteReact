import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'Jorge Almeida',
    description: 'Ignite',
    link: 'https://github.com/jorgebinho/igniteReact'
}

 export function RepositoryList() {
     return (
         <section className="repository-list">
             <h1>Lista de repositórios</h1>

             <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
             </ul>
         </section>
     )
 }