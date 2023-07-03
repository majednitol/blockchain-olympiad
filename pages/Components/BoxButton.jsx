import React from 'react'
import Styles from './BoxButton.module.css';

const BoxButton = ({ name, handleFunction }) => {
    return (
        <div className={Styles.box} onClick={() => { handleFunction() }}>
            {name}
        </div>
    )
}

export default BoxButton