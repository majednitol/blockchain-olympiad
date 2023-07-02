import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className='w-32 h-10 px-5 bg-indigo-600 rounded-md'>
                {name}
            </button>
        </div>
    )
}

export default Button