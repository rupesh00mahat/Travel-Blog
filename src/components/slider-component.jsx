import React from 'react'

function SliderComponent(props) {
  return (
    <div id='slider-component'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button>more</button>
    </div>
  )
}

export default SliderComponent