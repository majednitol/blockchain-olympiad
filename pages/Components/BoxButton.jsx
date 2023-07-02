import React from 'react'

const BoxButton = ({ name, setShow }) => {
    return (
        <button onClick={() => setShow(true)} className='w-64 px-5 text-2xl bg-indigo-600 rounded-md h-36'>
            {name}
        </button>
    )
}

export default BoxButton