import React from 'react'
import Styles from './BoxButton.module.css';

const BoxButton = ({ name }) => {
    return (
        <div className={Styles.box}>
            {name}
        </div>
    )
}

export default BoxButton