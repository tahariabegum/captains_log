import React from 'react' 

export default function Show ( { logs }) {
    return(
        <div>
            <h1> {logs.title} </h1>
            <h4> {logs.entry} </h4>
            <p> {logs.shipIsBroken} </p>
            <br/> <br/>
            <a href = {`/logs/${logs.id}/edit`}> Edit </a> 
            <a href = '/logs'> Back </a>
        </div>
    )
}