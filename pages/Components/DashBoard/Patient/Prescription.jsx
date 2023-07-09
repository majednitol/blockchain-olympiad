import React from 'react'
import FileUpload from '../../File/FileUpload'
import DisplayFile from '../../File/DisplayFile'



import BoxButton from '../../BoxButton';
const Prescription = () => {
    return (
        <div>


            <BoxButton name="Upload File" />



            <div >
                <FileUpload />
                <DisplayFile />
            </div>


        </div>
    )
}

export default Prescription



