import React from 'react'
import "../styles/RepositoryItem.css"

export const RepositoryItem = ({ key, repository }) => {
  return (
    <div className='section-repo'>
        <a 
            href={repository.html_url} 
            target='_blank' rel="noreferrer"
            className='a-repo'
            >
            <li className='li-repo'>
                    <h1>{repository.name}</h1>
                    <p className='p-repo'>{repository.description}</p>
                    
            </li>
        </a>
    </div>
  )
}

