import React from 'react'
import FileUpload from '../../File/FileUpload'
import DisplayFile from '../../File/DisplayFile'
import 'reactjs-popup/dist/index.css';
import Styles from './Prescription.module.css';
import Popup from 'reactjs-popup';
import BoxButton from '../../BoxButton';
const Prescription = () => {
    return (
        <div>

            <Popup
                trigger={<button className={Styles.button}>
                    <BoxButton name="Upload File" handleFunction={() => { }} />
                </button>}
                modal
                nested
            >
                {close => (
                    <div className={Styles.modal}>
                        <button className={Styles.close} onClick={close}>
                            &times;
                        </button>

                        <div className={Styles.content}>
                            <FileUpload />
                            <DisplayFile />
                        </div>

                    </div>
                )}
            </Popup>
        </div>
    )
}

export default Prescription



