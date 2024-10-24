import React from 'react'

import './Button.css'

const Button = ({ clickHandler, title, actionType }) => {
    
    return (
        <button className={`button ${actionType}`} type='submit' onClick={clickHandler}>{title}</button>
    )
    
}

export default Button