import React from 'react'

export default function Index( {logs} ) {
    return (
        <div>
            <ul>
                {logs.map((log, i) => 
                <li key = {i}> 
                    {log.title}
                </li>)}
            </ul>

            <nav>
                <a href = '/log/new'> Create Log </a>
            </nav>
        </div>
    )
}