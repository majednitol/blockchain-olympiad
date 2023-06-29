// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract MedicalData {
    struct Patient {
        address patientAddress;
        string patientID;
        string name;
        string gender;
        uint256 age;
        string bloodGroup;
        string location;
        string NIDInfo;
        bool isAdded;
        string[] data;
    }

    struct Doctor {
        address DoctorAddress;
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
        string[] data;
    }

    struct Pathologist {
        address pathologistAddress;
        string pathologistID;
        string name;
        uint256 licenseNumber;
        string specializationArea;
        string serviceArea;
        uint256 totalExperience;
        uint256 totalRating;
        string review;
        bool isAdded;
        string[] data;
    }

    struct MedicalResearchLab {
        address labAddress;
        string labID;
        string name;
        uint256 licenseID;
        string researchArea;
        string labRating;
        bool isAdded;
        string[] data;
    }

    struct PharmacyCompany {
        address pharmacyCompanyAddress;
        string companyID;
        string name;
        uint256 licenseID;
        string productInformation;
        string pharmacyRating;
        bool isAdded;
        string[] data;
    }

    mapping(address => Patient) private patients;
    mapping(address => Doctor) private doctors;

    mapping(address => Pathologist) private pathologists;
    mapping(address => MedicalResearchLab) private medicalResearchLabs;
    mapping(address => PharmacyCompany) private pharmacyCompanies;

    mapping(address => mapping(address => bool)) public accressList;
    address[] public allPatientsAddress;
    address[] public allDoctorAddress;
    address[] public allPharmacyCompanyAddress;
    address[] public allpathologistsAddress;
    address[] public allmedicalResearchLabsAddress;
    address[] public allHospitalAddress;
    address[] public allparentsAddress;

    // Setters and Getters for Patient struct
    function setPatient(
        string memory patientID,
        string memory name,
        string memory gender,
        uint256 age,
        string memory bloodGroup,
        string memory location,
        string memory NIDInfo
    ) public {
        address user = msg.sender;
        require(
            patients[user].isAdded == false,
            "You have already created your profile"
        );

        Patient storage patient = patients[user];

        patient.patientID = patientID;
        patient.name = name;
        patient.gender = gender;
        patient.age = age;
        patient.bloodGroup = bloodGroup;
        patient.location = location;
        patient.isAdded = true;

        patient.NIDInfo = NIDInfo;

        allPatientsAddress.push(user);
    }

    modifier onlyPatient(address user) {
        require(patients[user].isAdded, "Patient does not exist");

        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        _;
    }

    modifier onlyDoctor(address user) {
        require(doctors[user].isAdded, "Doctor does not exist");

        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        _;
    }

    modifier onlyPathologist(address user) {
        require(pathologists[user].isAdded, "pathologists does not exist");
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        _;
    }

    modifier onlyMedicalResearchLab(address user) {
        require(
            medicalResearchLabs[user].isAdded,
            "Medical Research lab does not exist"
        );
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        _;
    }

    modifier onlyPharmacyCompany(address user) {
        require(
            pharmacyCompanies[user].isAdded,
            "Pharmacy Companies does not exist"
        );
        require(
            msg.sender == user || accressList[user][msg.sender] == true,
            "user don't have accress in your data"
        );
        _;
    }

    function getDoctor(
        address _doctorAddress
    ) public view onlyDoctor(_doctorAddress) returns (Doctor memory) {
        return doctors[_doctorAddress];
    }

    function getPatient(
        address _patientAddress
    ) public view onlyPatient(_patientAddress) returns (Patient memory) {
        return patients[_patientAddress];
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
        string memory chamberLocation
    ) public {
        require(
            doctors[user].isAdded == false,
            "you already create your profile"
        );

        Doctor storage doctor = doctors[user];
        doctor.doctorID = doctorID;
        doctor.name = name;
        doctor.specialty = specialty;
        doctor.consultationFee = consultationFee;
        doctor.BMDCNumber = BMDCNumber;
        doctor.yearOfExperience = yearOfExperience;
        doctor.joiningDate = joiningDate;
        doctor.totalRating = totalRating;
        doctor.aboutDoctors = aboutDoctors;
        doctor.chamberLocation = chamberLocation;
        doctor.isAdded = true;
        allDoctorAddress.push(user);
    }

    // Setters and Getters for Hospital struct

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
        string memory review
    ) public {
        require(
            pathologists[user].isAdded == false,
            "you already create your profile"
        );

        Pathologist storage pathologist = pathologists[user];

        pathologist.pathologistID = pathologistID;
        pathologist.name = name;
        pathologist.licenseNumber = licenseNumber;
        pathologist.specializationArea = specializationArea;
        pathologist.serviceArea = serviceArea;
        pathologist.totalExperience = totalExperience;
        pathologist.totalRating = totalRating;
        pathologist.review = review;
        pathologist.isAdded = true;
        allpathologistsAddress.push(user);
    }

    // Setters and Getters for MedicalResearchLab struct
    function setMedicalResearchLab(
        address user,
        string memory labID,
        string memory name,
        uint256 licenseID,
        string memory researchArea,
        string memory labRating
    ) public {
        require(
            medicalResearchLabs[user].isAdded == false,
            "you already create your profile"
        );

        MedicalResearchLab storage lab = medicalResearchLabs[user];

        lab.labID = labID;
        lab.name = name;
        lab.licenseID = licenseID;
        lab.researchArea = researchArea;
        lab.labRating = labRating;
        lab.isAdded = true;
        allmedicalResearchLabsAddress.push(user);
    }

    // Setters and Getters for PharmacyCompany struct
    function setPharmacyCompany(
        address user,
        string memory companyID,
        string memory name,
        uint256 licenseID,
        string memory productInformation,
        string memory pharmacyRating
    ) public {
        require(
            pharmacyCompanies[user].isAdded == false,
            "you already create your profile"
        );

        PharmacyCompany storage company = pharmacyCompanies[user];

        company.companyID = companyID;
        company.name = name;
        company.licenseID = licenseID;
        company.productInformation = productInformation;
        company.pharmacyRating = pharmacyRating;
        company.isAdded = true;

        allparentsAddress.push(user);
    }

    // Setters and Getters for Parent struct

    // Setters and Getters for DataScientist struct

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

    // Add data to patient's data array
    function addData(string memory entityType, string memory data) public {
        if (keccak256(bytes(entityType)) == keccak256("Patient")) {
            patients[msg.sender].data.push(data);
        } else if (keccak256(bytes(entityType)) == keccak256("Doctor")) {
            doctors[msg.sender].data.push(data);
        } else if (keccak256(bytes(entityType)) == keccak256("Pathologist")) {
            pathologists[msg.sender].data.push(data);
        } else if (
            keccak256(bytes(entityType)) == keccak256("MedicalResearchLab")
        ) {
            medicalResearchLabs[msg.sender].data.push(data);
        } else if (
            keccak256(bytes(entityType)) == keccak256("PharmacyCompany")
        ) {
            pharmacyCompanies[msg.sender].data.push(data);
        } else {
            revert("Invalid entity type");
        }
    }

    function transferData(
        string memory entityType1,
        string memory entityType2,
        address user1,
        address user2
    ) public {
        if (keccak256(bytes(entityType1)) == keccak256("Patient")) {
            require(patients[user1].isAdded, "Patient does not exist");
            require(
                patients[user1].data.length > 0,
                "No data available to transfer"
            );

            if (keccak256(bytes(entityType2)) == keccak256("Doctor")) {
                require(
                    doctors[user2].BMDCNumber != 0,
                    "Doctor does not exist"
                );

                string[] storage patientData = patients[user1].data;
                string[] storage doctorData = doctors[user2].data;

                for (uint256 i = 0; i < patientData.length; i++) {
                    doctorData.push(patientData[i]);
                }
            } else if (
                keccak256(bytes(entityType2)) == keccak256("Pathologist")
            ) {
                require(
                    pathologists[user2].pathologistAddress != address(0),
                    "Pathologist does not exist"
                );

                string[] storage patientData = patients[user1].data;
                string[] storage pathologistData = pathologists[user2].data;

                for (uint256 i = 0; i < patientData.length; i++) {
                    pathologistData.push(patientData[i]);
                }
            } else if (
                keccak256(bytes(entityType2)) == keccak256("MedicalResearchLab")
            ) {
                require(
                    medicalResearchLabs[user2].labAddress != address(0),
                    "Medical Research Lab does not exist"
                );

                string[] storage patientData = patients[user1].data;
                string[] storage labData = medicalResearchLabs[user2].data;

                for (uint256 i = 0; i < patientData.length; i++) {
                    labData.push(patientData[i]);
                }
            } else if (
                keccak256(bytes(entityType2)) == keccak256("PharmacyCompany")
            ) {
                require(
                    pharmacyCompanies[user2].pharmacyCompanyAddress !=
                        address(0),
                    "Pharmacy Company does not exist"
                );

                string[] storage patientData = patients[user1].data;
                string[] storage companyData = pharmacyCompanies[user2].data;

                for (uint256 i = 0; i < patientData.length; i++) {
                    companyData.push(patientData[i]);
                }
            } else {
                revert("Unsupported entity type");
            }
        }
    }

    function getPathologist(
        address _pathologistAddress
    )
        public
        view
        onlyPathologist(_pathologistAddress)
        returns (Pathologist memory)
    {
        return pathologists[_pathologistAddress];
    }

    function getMedicalResearchLab(
        address _labAddress
    )
        public
        view
        onlyMedicalResearchLab(_labAddress)
        returns (MedicalResearchLab memory)
    {
        return medicalResearchLabs[_labAddress];
    }
}
