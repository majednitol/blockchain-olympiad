import React, { useState } from 'react'
import Styles from './Patient.module.css';
import Button from '../Button';
import BoxButton from '../BoxButton';
import InputFeild from '../InputFeild';
const Patient = () => {

    const [show, setShow] = useState(false)
    const btn = [
        { id: 1, title: "Personal Details" },
        { id: 2, title: "Personal Health Data" },
        { id: 3, title: "prescription" },
        { id: 4, title: "Share Data" },
    ]
    return (
        <div className='m-14'>

            {show && (<div className={Styles.daw}>
                <div>
                    <InputFeild />
                    <InputFeild />
                    <InputFeild />
                    <InputFeild />
                    <InputFeild />
                </div>
                <button onClick={() => setShow(false)}>hide</button>
                <Button name="Login" />
            </div>)}

            {/* <button onClick={() => setShow(true)}>show</button> */}



            {btn.map((el, i) => (
                <div className='text-white inline'>
                    <BoxButton name={el.title} setShow={setShow} />
                </div>
            ))}
        </div>
    )
}

export default Patient