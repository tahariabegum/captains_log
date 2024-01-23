import React from 'react'

export default function Index( {logs} ) {
    return (
        <div>
            <ul>
                {logs.map((logs, i) => 
                <li key = {i}> 
                    {logs.title}
                </li>
                )}
            </ul>

            <nav>
                <a href = '/logs/new'> Create Log </a>
            </nav>
        </div>
    )
}