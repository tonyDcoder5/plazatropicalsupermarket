import React from 'react'


export default function ContainerOne({content = {}}){

    const pageData = content || {
        title: "Loading content", 
        description: "...",
        image: require("../assets/img/test_image_2.png"),
    }


    return(
        <div className='container-one'>
            <img src={require("../assets/img/test_image_2.png")} alt="container media" />
            <h2>{pageData.title}</h2>
            <p>{pageData.description}</p>
        </div>
    )
}