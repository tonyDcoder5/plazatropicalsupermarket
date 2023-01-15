import React from 'react'
import ContainerOne from './ContainerOne'


export default function NotFound(){

    const prompt = {
        title: "Not Found",
        description: "Click to return home",
        image: "",
      };
    

    return(
        <div className='not-found'>
            <h2>{prompt.title}</h2>
            <a href='/'><h3>{prompt.description}</h3></a>
        </div>
    )
}