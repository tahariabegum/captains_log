import React from 'react' 
export default function New () {
    return (
        <div>
            <form action = "/logs" method = "POST" >
                <br/> <br/>
                Title: <input type = "text" />
                <br/> <br/>
                Entry: <input type = "textarea" /> 
                <br/> <br/>
                shipIsBroken: <input type =  "checkbox" />
                <br/> <br/>
                <input type = "Submit" />
            </form>
        </div>
    )
}