import React from 'react'
import ReactDOM from 'react-dom'

const target = document.getElementById('root')

const render = (Component) => {
    ReactDOM.render(<Component/>, target)
}

render(Root)