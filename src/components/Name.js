import React from 'react'

const Name = (props) => {
    console.log(props)
    return <p>{props.firstName + ' ' + props.lastName}</p>
}

export default Name