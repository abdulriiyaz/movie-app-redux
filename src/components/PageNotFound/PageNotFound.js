import React from 'react'
import pnf from '../../images/pnf.jpg'
import './PageNotFound.scss'

const PageNotFound = () => {
    return (
        <div className="not-found">
        <img src={pnf} alt="404"/>            
        </div>
    )
}

export default PageNotFound
