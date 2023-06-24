// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract MedicalData {
    struct Patient {
        string patientID;
        string name;
        string gender;
        uint256 age;
        string bloodGroup;
        string location;
        string parentInformation;
        int256 parentNumber;
    }

    struct Doctor {
        string doctorID;
        string name;
        string specialty;
        uint256 consultationFee;
        uint256 BMDCNumber;
        string yearOfExperience;
        uint256 joiningDate;
        uint256 totalRating;
        string aboutDoctors;
        string chamberLocation;
    }

    struct Hospital {
        string hospitalID;
        string name;
        string location;
        uint256 contactNumber;
        string hospitalSpecialty;
        string serviceInformation;
        string patientRating;
    }

    struct Pathologist {
        string pathologistID;
        string name;
        uint256 licenseNumber;
        string specializationArea;
        string serviceArea;
        uint256 totalExperience;
        uint256 totalRating;
        string review;
    }

    struct MedicalResearchLab {
        string labID;
        string name;
        uint256 licenseID;
        string researchArea;
        string labRating;
    }

    struct PharmacyCompany {
        string companyID;
        string name;
        uint256 licenseID;
        string productInformation;
        string pharmacyRating;
    }

    struct MedicalInsurance {
        string insuranceID;
        string name;
        uint256 licenseID;
        string insuranceType;
        string companyReview;
    }

    struct Parent {
        string parentID;
        string name;
        int256 parentIDNumber;
        uint256 phoneNumber;
        string NIDInfo;
    }

    struct DataScientist {
        string scientistID;
        string name;
        uint256 licenseNumber;
        string about;
        uint256 yearExperience;
    }

    mapping(uint256 => Patient) private patients;
    mapping(uint256 => Doctor) private doctors;
    mapping(uint256 => Hospital) private hospitals;
    mapping(uint256 => Pathologist) private pathologists;
    mapping(uint256 => MedicalResearchLab) private medicalResearchLabs;
    mapping(uint256 => PharmacyCompany) private pharmacyCompanies;
    mapping(uint256 => MedicalInsurance) private medicalInsurances;
    mapping(uint256 => Parent) private parents;
    mapping(uint256 => DataScientist) private dataScientists;

    // Setters and Getters for Patient struct
    function setPatient(
        uint256 id,
        string memory patientID,
        string memory name,
        string memory gender,
        uint256 age,
        string memory bloodGroup,
        string memory location,
        string memory parentInformation,
        int256 parentNumber
    ) external {
        patients[id] = Patient(
            patientID,
            name,
            gender,
            age,
            bloodGroup,
            location,
            parentInformation,
            parentNumber
        );
    }

    function getPatient(
        uint256 id
    )
        external
        view
        returns (
            string memory,
            string memory,
            string memory,
            uint256,
            string memory,
            string memory,
            string memory,
            int256
        )
    {
        Patient memory patient = patients[id];
        return (
            patient.patientID,
            patient.name,
            patient.gender,
            patient.age,
            patient.bloodGroup,
            patient.location,
            patient.parentInformation,
            patient.parentNumber
        );
    }

    // Setters and Getters for Doctor struct
    function setDoctor(
        uint256 id,
        string memory doctorID,
        string memory name,
        string memory specialty,
        uint256 consultationFee,
        uint256 BMDCNumber,
        string memory yearOfExperience,
        uint256 joiningDate,
        uint256 totalRating,
        string memory aboutDoctors,
        string memory chamberLocation
    ) external {
        doctors[id] = Doctor(
            doctorID,
            name,
            specialty,
            consultationFee,
            BMDCNumber,
            yearOfExperience,
            joiningDate,
            totalRating,
            aboutDoctors,
            chamberLocation
        );
    }

    function getDoctor(
        uint256 id
    )
        external
        view
        returns (
            string memory,
            string memory,
            string memory,
            uint256,
            uint256,
            string memory,
            uint256,
            uint256,
            string memory,
            string memory
        )
    {
        Doctor memory doctor = doctors[id];
        return (
            doctor.doctorID,
            doctor.name,
            doctor.specialty,
            doctor.consultationFee,
            doctor.BMDCNumber,
            doctor.yearOfExperience,
            doctor.joiningDate,
            doctor.totalRating,
            doctor.aboutDoctors,
            doctor.chamberLocation
        );
    }

    // Setters and Getters for Hospital struct
    function setHospital(
        uint256 id,
        string memory hospitalID,
        string memory name,
        string memory location,
        uint256 contactNumber,
        string memory hospitalSpecialty,
        string memory serviceInformation,
        string memory patientRating
    ) external {
        hospitals[id] = Hospital(
            hospitalID,
            name,
            location,
            contactNumber,
            hospitalSpecialty,
            serviceInformation,
            patientRating
        );
    }

    function getHospital(
        uint256 id
    )
        external
        view
        returns (
            string memory,
            string memory,
            string memory,
            uint256,
            string memory,
            string memory,
            string memory
        )
    {
        Hospital memory hospital = hospitals[id];
        return (
            hospital.hospitalID,
            hospital.name,
            hospital.location,
            hospital.contactNumber,
            hospital.hospitalSpecialty,
            hospital.serviceInformation,
            hospital.patientRating
        );
    }

    // Setters and Getters for Pathologist struct
    function setPathologist(
        uint256 id,
        string memory pathologistID,
        string memory name,
        uint256 licenseNumber,
        string memory specializationArea,
        string memory serviceArea,
        uint256 totalExperience,
        uint256 totalRating,
        string memory review
    ) external {
        pathologists[id] = Pathologist(
            pathologistID,
            name,
            licenseNumber,
            specializationArea,
            serviceArea,
            totalExperience,
            totalRating,
            review
        );
    }

    function getPathologist(
        uint256 id
    )
        external
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory,
            uint256,
            uint256,
            string memory
        )
    {
        Pathologist memory pathologist = pathologists[id];
        return (
            pathologist.pathologistID,
            pathologist.name,
            pathologist.licenseNumber,
            pathologist.specializationArea,
            pathologist.serviceArea,
            pathologist.totalExperience,
            pathologist.totalRating,
            pathologist.review
        );
    }

    // Setters and Getters for MedicalResearchLab struct
    function setMedicalResearchLab(
        uint256 id,
        string memory labID,
        string memory name,
        uint256 licenseID,
        string memory researchArea,
        string memory labRating
    ) external {
        medicalResearchLabs[id] = MedicalResearchLab(
            labID,
            name,
            licenseID,
            researchArea,
            labRating
        );
    }

    function getMedicalResearchLab(
        uint256 id
    )
        external
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory
        )
    {
        MedicalResearchLab memory lab = medicalResearchLabs[id];
        return (
            lab.labID,
            lab.name,
            lab.licenseID,
            lab.researchArea,
            lab.labRating
        );
    }

    // Setters and Getters for PharmacyCompany struct
    function setPharmacyCompany(
        uint256 id,
        string memory companyID,
        string memory name,
        uint256 licenseID,
        string memory productInformation,
        string memory pharmacyRating
    ) external {
        pharmacyCompanies[id] = PharmacyCompany(
            companyID,
            name,
            licenseID,
            productInformation,
            pharmacyRating
        );
    }

    function getPharmacyCompany(
        uint256 id
    )
        external
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory
        )
    {
        PharmacyCompany memory company = pharmacyCompanies[id];
        return (
            company.companyID,
            company.name,
            company.licenseID,
            company.productInformation,
            company.pharmacyRating
        );
    }

    // Setters and Getters for MedicalInsurance struct
    function setMedicalInsurance(
        uint256 id,
        string memory insuranceID,
        string memory name,
        uint256 licenseID,
        string memory insuranceType,
        string memory companyReview
    ) external {
        medicalInsurances[id] = MedicalInsurance(
            insuranceID,
            name,
            licenseID,
            insuranceType,
            companyReview
        );
    }

    function getMedicalInsurance(
        uint256 id
    )
        external
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory
        )
    {
        MedicalInsurance memory insurance = medicalInsurances[id];
        return (
            insurance.insuranceID,
            insurance.name,
            insurance.licenseID,
            insurance.insuranceType,
            insurance.companyReview
        );
    }

    // Setters and Getters for Parent struct
    function setParent(
        uint256 id,
        string memory parentID,
        string memory name,
        int256 parentIDNumber,
        uint256 phoneNumber,
        string memory NIDInfo
    ) external {
        parents[id] = Parent(
            parentID,
            name,
            parentIDNumber,
            phoneNumber,
            NIDInfo
        );
    }

    function getParent(
        uint256 id
    )
        external
        view
        returns (string memory, string memory, int256, uint256, string memory)
    {
        Parent memory parent = parents[id];
        return (
            parent.parentID,
            parent.name,
            parent.parentIDNumber,
            parent.phoneNumber,
            parent.NIDInfo
        );
    }

    // Setters and Getters for DataScientist struct
    function setDataScientist(
        uint256 id,
        string memory scientistID,
        string memory name,
        uint256 licenseNumber,
        string memory about,
        uint256 yearExperience
    ) external {
        dataScientists[id] = DataScientist(
            scientistID,
            name,
            licenseNumber,
            about,
            yearExperience
        );
    }

    function getDataScientist(
        uint256 id
    )
        external
        view
        returns (string memory, string memory, uint256, string memory, uint256)
    {
        DataScientist memory scientist = dataScientists[id];
        return (
            scientist.scientistID,
            scientist.name,
            scientist.licenseNumber,
            scientist.about,
            scientist.yearExperience
        );
    }
}
