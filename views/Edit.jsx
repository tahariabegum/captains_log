import React from 'react'

export default function Index( {logs, i } ) {
    return (
        <div>
            <h1> Edit Log </h1>
            <form action = {`/logs/${i}?_method=PUT`} method = "POST"> 
            Title: <input type = 'text' name = 'title' defaultValue = {logs.title} />
            <br/><br/>
            Entry: <input type = 'textarea' name = 'entry' defaultValue = {logs.entry} />
            <br/> <br/>
            Is Ship Broken: <input type = 'checkbox' name = 'shipIsBroken' defaultChecked = {logs.shipIsBroken} />
            <br/><br/>
            <input type = 'Update' name = '' value = 'Update Log' />
            </form>
        </div>
    )
}