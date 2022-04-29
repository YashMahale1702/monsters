import React from 'react'

import './card.styles.scss'

export const Card = (props) => {
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="" draggable="false"/>
        <h1 className='card-container_name'>{props.monster.name}</h1>
        <p className='card-container_email'>{props.monster.email}</p>
    </div>
  )
}

