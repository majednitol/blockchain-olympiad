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
        bool isAdded;
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
        bool isAdded;
    }

    struct Hospital {
        string hospitalID;
        string name;
        string location;
        uint256 contactNumber;
        string hospitalSpecialty;
        string serviceInformation;
        string patientRating;
        bool isAdded;
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
        bool isAdded;
    }

    struct MedicalResearchLab {
        string labID;
        string name;
        uint256 licenseID;
        string researchArea;
        string labRating;
        bool isAdded;
    }

    struct PharmacyCompany {
        string companyID;
        string name;
        uint256 licenseID;
        string productInformation;
        string pharmacyRating;
        bool isAdded;
    }

    struct MedicalInsurance {
        string insuranceID;
        string name;
        uint256 licenseID;
        string insuranceType;
        string companyReview;
        bool isAdded;
    }

    struct Parent {
        string parentID;
        string name;
        int256 parentIDNumber;
        uint256 phoneNumber;
        string NIDInfo;
        bool isAdded;
    }

    struct DataScientist {
        string scientistID;
        string name;
        uint256 licenseNumber;
        string about;
        uint256 yearExperience;
        bool isAdded;
    }

    mapping(address => Patient) private patients;
    mapping(address => Doctor) private doctors;
    mapping(address => Hospital) private hospitals;
    mapping(address => Pathologist) private pathologists;
    mapping(address => MedicalResearchLab) private medicalResearchLabs;
    mapping(address => PharmacyCompany) private pharmacyCompanies;
    mapping(address => MedicalInsurance) private medicalInsurances;
    mapping(address => Parent) private parents;
    mapping(address => DataScientist) private dataScientists;
    mapping(address => mapping(address => bool)) accressList;
    address[] public allPatientsAddress;
    address[] public allDoctorAddress;
    address[] public allPharmacyCompanyAddress;
    address[] public allpathologistsAddress;
    address[] public allmedicalResearchLabsAddress;
    address[] public allHospitalAddress;
    address[] public allparentsAddress;
    address[] public allmedicalInsurancesAddress;
    address[] public allDataScientistsAddress;

    // Setters and Getters for Patient struct
    function setPatient(
        address user,
        string memory patientID,
        string memory name,
        string memory gender,
        uint256 age,
        string memory bloodGroup,
        string memory location,
        string memory parentInformation,
        int256 parentNumber,
        bool isAdded
    ) public {
        require(
            patients[user].isAdded == false,
            "you already create your profile"
        );
        patients[user] = Patient(
            patientID,
            name,
            gender,
            age,
            bloodGroup,
            location,
            parentInformation,
            parentNumber,
            isAdded = true
        );
        allPatientsAddress.push(user);
    }

    function getPatient(
        address user
    )
        public
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
        Patient memory patient = patients[user];
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
        address user,
        string memory doctorID,
        string memory name,
        string memory specialty,
        uint256 consultationFee,
        uint256 BMDCNumber,
        string memory yearOfExperience,
        uint256 joiningDate,
        uint256 totalRating,
        string memory aboutDoctors,
        string memory chamberLocation,
        bool isAdded
    ) public {
        require(
            doctors[user].isAdded == false,
            "you already create your profile"
        );
        doctors[user] = Doctor(
            doctorID,
            name,
            specialty,
            consultationFee,
            BMDCNumber,
            yearOfExperience,
            joiningDate,
            totalRating,
            aboutDoctors,
            chamberLocation,
            isAdded = true
        );
        allDoctorAddress.push(user);
    }

    function getDoctor(
        address user
    )
        public
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
        Doctor memory doctor = doctors[user];
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
        address user,
        string memory hospitalID,
        string memory name,
        string memory location,
        uint256 contactNumber,
        string memory hospitalSpecialty,
        string memory serviceInformation,
        string memory patientRating,
        bool isAdded
    ) public {
        require(
            hospitals[user].isAdded == false,
            "you already create your profile"
        );
        hospitals[user] = Hospital(
            hospitalID,
            name,
            location,
            contactNumber,
            hospitalSpecialty,
            serviceInformation,
            patientRating,
            isAdded = true
        );
        allHospitalAddress.push(user);
    }

    function getHospital(
        address user
    )
        public
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
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        Hospital memory hospital = hospitals[user];
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
        address user,
        string memory pathologistID,
        string memory name,
        uint256 licenseNumber,
        string memory specializationArea,
        string memory serviceArea,
        uint256 totalExperience,
        uint256 totalRating,
        string memory review,
        bool isAdded
    ) public {
        require(
            pathologists[user].isAdded == false,
            "you already create your profile"
        );
        pathologists[user] = Pathologist(
            pathologistID,
            name,
            licenseNumber,
            specializationArea,
            serviceArea,
            totalExperience,
            totalRating,
            review,
            isAdded = true
        );
        allpathologistsAddress.push(user);
    }

    function getPathologist(
        address user
    )
        public
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
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        Pathologist memory pathologist = pathologists[user];
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
        address user,
        string memory labID,
        string memory name,
        uint256 licenseID,
        string memory researchArea,
        string memory labRating,
        bool isAdded
    ) public {
        require(
            medicalResearchLabs[user].isAdded == false,
            "you already create your profile"
        );
        medicalResearchLabs[user] = MedicalResearchLab(
            labID,
            name,
            licenseID,
            researchArea,
            labRating,
            isAdded = true
        );
        allmedicalResearchLabsAddress.push(user);
    }

    function getMedicalResearchLab(
        address user
    )
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory
        )
    {
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        MedicalResearchLab memory lab = medicalResearchLabs[user];
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
        address user,
        string memory companyID,
        string memory name,
        uint256 licenseID,
        string memory productInformation,
        string memory pharmacyRating,
        bool isAdded
    ) public {
        require(
            pharmacyCompanies[user].isAdded == false,
            "you already create your profile"
        );
        pharmacyCompanies[user] = PharmacyCompany(
            companyID,
            name,
            licenseID,
            productInformation,
            pharmacyRating,
            isAdded = true
        );
        allparentsAddress.push(user);
    }

    function getPharmacyCompany(
        address user
    )
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory
        )
    {
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        PharmacyCompany memory company = pharmacyCompanies[user];
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
        address user,
        string memory insuranceID,
        string memory name,
        uint256 licenseID,
        string memory insuranceType,
        string memory companyReview,
        bool isAdded
    ) public {
        require(
            medicalInsurances[user].isAdded == false,
            "you already create your profile"
        );
        medicalInsurances[user] = MedicalInsurance(
            insuranceID,
            name,
            licenseID,
            insuranceType,
            companyReview,
            isAdded = true
        );
        allmedicalInsurancesAddress.push(user);
    }

    function getMedicalInsurance(
        address user
    )
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory
        )
    {
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        MedicalInsurance memory insurance = medicalInsurances[user];
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
        address user,
        string memory parentID,
        string memory name,
        int256 parentIDNumber,
        uint256 phoneNumber,
        string memory NIDInfo,
        bool isAdded
    ) public {
        parents[user] = Parent(
            parentID,
            name,
            parentIDNumber,
            phoneNumber,
            NIDInfo,
            isAdded = true
        );
        allparentsAddress.push(user);
    }

    function getParent(
        address user
    )
        public
        view
        returns (string memory, string memory, int256, uint256, string memory)
    {
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        Parent memory parent = parents[user];
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
        address user,
        string memory scientistID,
        string memory name,
        uint256 licenseNumber,
        string memory about,
        uint256 yearExperience,
        bool isAdded
    ) public {
        dataScientists[user] = DataScientist(
            scientistID,
            name,
            licenseNumber,
            about,
            yearExperience,
            isAdded = true
        );
        allDataScientistsAddress.push(user);
    }

    function getDataScientist(
        address user
    )
        public
        view
        returns (string memory, string memory, uint256, string memory, uint256)
    {
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        DataScientist memory scientist = dataScientists[user];
        return (
            scientist.scientistID,
            scientist.name,
            scientist.licenseNumber,
            scientist.about,
            scientist.yearExperience
        );
    }

    function accressDataAnyone(address user) public {
        require(msg.sender != user, "you can't accress yourself ");
        require(
            accressList[msg.sender][user] = true,
            "user alredy have accress in your data"
        );
    }

    function revokeDataAnyone(address user) public {
        require(msg.sender != user, "you can't revoke yourself ");
        require(
            accressList[msg.sender][user] = false,
            "user alredy revoked from  data accress"
        );
    }
}
