import React, { useState } from 'react'
import BoxButton from '../../BoxButton';


const PathologistPersonalData = () => {
    const [name, setName] = useState('');
    const [pathologistID, setpathologistID] = useState('');
    const [specializationArea, setspecializationArea] = useState('');
    const [totalExperience, settotalExperience] = useState('');

    const [licenseNumber, setlicenseNumber] = useState('');
    const [errors, setErrors] = useState({});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'pathologistID') {
            setpathologistID(value);
        } else if (name === 'licenseNumber') {
            setlicenseNumber(value);
        } else if (name === 'totalExperience') {
            settotalExperience(value);
        } else if (name === 'specializationArea') {
            setspecializationArea(value);
        }

    };

    const validateForm = () => {
        const newErrors = {};

        if (!pathologistID) {
            newErrors.pathologistID = 'Please enter your pathologistID';
        } else {
            newErrors.pathologistID = " "
        }
        if (!name) {
            newErrors.name = 'Please enter your name';
        } else {
            newErrors.name = " "
        }
        if (!specializationArea) {
            newErrors.specializationArea = 'Please enter your specializationArea';
        } else {
            newErrors.specializationArea = " "
        }



        if (!licenseNumber) {
            newErrors.licenseNumber = 'Please enter your licenseNumber';
        } else {
            newErrors.licenseNumber = " "
        }



        if (!totalExperience) {
            newErrors.totalExperience = 'Please enter your totalExperience';
        }
        else {
            newErrors.totalExperience = " "
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm() && (name !== " " && totalExperience !== " " && pathologistID !== "" && specializationArea !== " " && licenseNumber !== " ")) {
            // Perform form submission

            console.log('Form submitted');
        }
        else {
            console.log("please fill up all feild");
        }
    };


    return (
        <div>

            <button type="" class="m-xl-5 align-content-center justify-content-center  d-flex align-content-sm-center" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                <BoxButton name="DoctorPersonalData" />
            </button>



            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title " id="exampleModalLabel">Sign Up</h5>
                            <button type="button" class="btn-close mx-3" data-bs-dismiss="modal" aria-label="Close">Close</button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">pathologistID :</label>
                                    <input type="number" class="form-control"
                                        id="pathologistID"
                                        name="pathologistID"
                                        placeholder='Enter your pathologistID'
                                        value={pathologistID}
                                        onChange={handleInputChange}
                                    />
                                    {errors.pathologistID && <span>{errors.pathologistID}</span>}
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">name :</label>
                                    <input type="text" class="form-control"
                                        id="name"
                                        name="name"
                                        value={name}
                                        placeholder='Enter your name'
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && <span>{errors.name}</span>}
                                </div> <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">licenseNumber :</label>
                                    <input type="number" class="form-control" id="licenseNumber"
                                        name="licenseNumber"
                                        value={licenseNumber}
                                        placeholder='Enter your licenseNumber'
                                        onChange={handleInputChange}
                                    />
                                    {errors.licenseNumber && <span>{errors.licenseNumber}</span>}
                                </div> <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">totalExperience :</label>
                                    <input type="number" class="form-control" id="totalExperience"
                                        name="totalExperience"
                                        value={totalExperience}
                                        placeholder='Enter your totalExperience'
                                        onChange={handleInputChange}
                                    />
                                    {errors.totalExperience && <span>{errors.totalExperience}</span>}
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">serviceArea :</label>
                                    <input type="text" class="form-control" id="specializationArea"
                                        name="specializationArea"
                                        value={specializationArea}
                                        onChange={handleInputChange}
                                        placeholder='Enter your specializationArea'
                                    />
                                    {errors.specializationArea && <span>{errors.specializationArea}</span>}
                                </div>
                                <div class="modal-footer">
                                    <button type="btn btn-dark" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                    <button type="submit btn btn-primary" onClick={() => { handleSubmit }} class="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default PathologistPersonalData