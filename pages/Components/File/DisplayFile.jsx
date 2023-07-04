

import React, { useState, useContext } from 'react';
import Styles from './DisplayFile.module.css';
import { HealthContext } from '@/context/Health';

const DisplayFile = () => {
    const { account, AddNewPatient, transferData, AddMedicalResearchLab, AddNewpathologist, AddNewPharmacyCompany, AddDoctor, PharmacyCompanyAllData, getPathologistAllData, getMedicalResearchLabAData, doctorAllData, patientAllData, fetchData, userName, doctorData, patientData, PharmacyCompany, MedicalResearchLab, contractData, Pathologist } = useContext(HealthContext)
    const [data, setData] = useState('')
    const getData = async () => {
        let dataArray;

        try {
            console.log("jjjjjj", contractData);
            dataArray = await contractData[1].displayImage()

            console.log("data image", dataArray);
        } catch (error) {
            alert(error)
        }

        const isEmpty = Object.keys(dataArray).length === 0
        if (!isEmpty) {
            const str = dataArray.toString()
            const str_array = str.split(",")
            // console.log(str_array);
            const images = str_array.map((item, i) => {
                return (
                    <a href={item} key={i} target="_blank" rel="noreferrer">
                        <img src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} alt="" className={Styles.image - list} />
                    </a>
                )
            })
            console.log("images", images);
            setData(images)

        }
        else {
            alert("No image to display")
        }
    }



    return (
        <div>
            \<div className={Styles.imagelist}>
                {data}

            </div>

            <button className={Styles.button} onClick={getData}>
                Get data
            </button>


        </div>
    )
}

export default DisplayFile