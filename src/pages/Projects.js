import { useState, useEffect } from 'react';
import { RepositoryItem } from "../components/RepositoryItem";
import "../styles/RepositoryItem.css"


export const Projects = () => {

    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        fetch('https://api.github.com/users/h-chagas/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []
);

    return (
        <section className="repository-list">
        <h1 className='h1-repo'>Repository List</h1>
        <ul className='ul-repo'>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository} />
            })}
        </ul>
    </section>
    )
}