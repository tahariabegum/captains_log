import React from 'react'

export default function Index( {logs} ) {
    return (
        <div>

            <nav>
                <a href = '/logs/new'> Create Log </a>
            </nav>

            <ul>
                {logs.map((log, i) => (
                <li key = {i}> 
                    <a href  = {`/logs/${i}`}>
                        {log.title}
                    </a>
                </li>
                ))}
            </ul>

            
        </div>
    )
}