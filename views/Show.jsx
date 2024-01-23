import React from 'react' 

export default function Show ( { logs }) {
    return(
        <div>
            <h1> {logs.title} </h1>
            <p> {logs.entry} </p>
            <p> {logs.shipIsBroken} </p>
            <br/> <br/>

            <a href = '/logs'> Back </a>
        </div>
    )
}