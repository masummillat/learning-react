import React from 'react'

const Instructions = ({steps})=>
    <section>
        <h1>Cooking Instructions</h1>
        {steps.map((steps,i)=>
            <p key={i}>{steps}</p>
        )}
    </section>

export  default Instructions