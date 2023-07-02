






import React, { useState } from 'react'
import BoxButton from '../../BoxButton';

const MediResearchLabPersonalData = () => {
    const [name, setName] = useState('');
    const [labID, setlabID] = useState('');
    const [researchArea, setresearchArea] = useState('');

    const [licenseID, setlicenseID] = useState('');
    const [labRating, setlabRating] = useState('');
    const [errors, setErrors] = useState({});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'labID') {
            setlabID(value);
        } else if (name === 'licenseID') {
            setlicenseID(value);
        } else if (name === 'researchArea') {
            setresearchArea(value);
        }
        else if (name === 'labRating') {
            setlabRating(value);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!labID) {
            newErrors.labID = 'Please enter your labID';
        } else {
            newErrors.labID = " "
        }
        if (!name) {
            newErrors.name = 'Please enter your name';
        } else {
            newErrors.name = " "
        }
        if (!researchArea) {
            newErrors.researchArea = 'Please enter your researchArea';
        } else {
            newErrors.researchArea = " "
        }

        if (!labRating) {
            newErrors.labRating = 'Please enter your labRating';
        } else {
            newErrors.labRating = " "
        }

        if (!licenseID) {
            newErrors.licenseID = 'Please enter your licenseID';
        } else {
            newErrors.licenseID = " "
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm() || (name !== " " && labID !== "" && researchArea !== " " && licenseID !== " " && labRating !== " ")) {
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
                <BoxButton name="Medical ResearchLab Personal Data" />
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
                                    <label for="recipient-name" class="col-form-label">labID :</label>
                                    <input type="number" class="form-control"
                                        id="labID"
                                        name="labID"
                                        placeholder='Enter your labID'
                                        value={labID}
                                        onChange={handleInputChange}
                                    />
                                    {errors.labID && <span>{errors.labID}</span>}
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
                                    <label for="recipient-name" class="col-form-label">licenseID :</label>
                                    <input type="number" class="form-control" id="licenseID"
                                        name="licenseID"
                                        value={licenseID}
                                        placeholder='Enter your licenseID'
                                        onChange={handleInputChange}
                                    />
                                    {errors.licenseID && <span>{errors.licenseID}</span>}
                                </div>  <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">researchArea :</label>
                                    <input type="text" class="form-control" id="researchArea"
                                        name="researchArea"
                                        value={researchArea}
                                        onChange={handleInputChange}
                                        placeholder='Enter your researchArea'
                                    />
                                    {errors.researchArea && <span>{errors.researchArea}</span>}
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">labRating :</label>
                                    <input type="number" class="form-control" id="researchArea"
                                        name="researchArea"
                                        value={labRating}
                                        onChange={handleInputChange}
                                        placeholder='Enter your labRating'
                                    />
                                    {errors.labRating && <span>{errors.labRating}</span>}
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

export default MediResearchLabPersonalData