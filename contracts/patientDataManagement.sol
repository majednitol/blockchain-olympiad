// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract MedicalData {
    struct Patient {
        address patientAddress;
        uint patientID;
        string name;
        string gender;
        uint256 age;
        string location;
        bool isAdded;
        string userType;
        PatientPersonalData patientPersonalData;
    }

    struct PatientPersonalData {
        uint256 height;
        string Blood;
        string PreviousDiseases;
        string Medicinedrugs;
        string BadHabits;
        string ChronicDiseases;
        string HealthAllergies;
        string BirthDefects;
    }

    struct PathologistTest {
        string Allries;
        string Cancer;
        string HormoneProblem;
        uint256 DiabatiesLevel;
    }

    struct Doctor {
        address DoctorAddress;
        uint256 doctorID;
        string name;
        string specialty;
        uint256 consultationFee;
        uint256 BMDCNumber;
        uint256 yearOfExperience;
        address[] allPatientsAddressSharedToDoctor;
        bool isAdded;
        string userType;
    }
    mapping(address => PatientPersonalData) public patientData;
    string[] public MedicalResearchLabReports;

    struct Pathologist {
        address pathologistAddress;
        uint256 pathologistID;
        string name;
        uint256 licenseNumber;
        string specializationArea;
        uint256 totalExperience;
        bool isAdded;
        address[] allPatientsAddressSharedTopathologist;
        string userType;
    }

    struct MedicalResearchLab {
        address labAddress;
        uint256 labID;
        string name;
        uint256 licenseID;
        string researchArea;
        uint256 labRating;
        bool isAdded;
        address[] allPatientsAddressSharedToMedicalResearchLab;
        string userType;
    }

    struct PharmacyCompany {
        address pharmacyCompanyAddress;
        uint256 companyID;
        string name;
        uint256 licenseID;
        string productInformation;
        uint256 pharmacyRating;
        bool isAdded;
        address[] allPatientAddressSharedToPharmacyCompany;
        string userType;
    }

    struct Access {
        address user;
        bool access;
    }
    mapping(address => string[]) value;
    mapping(address => mapping(address => bool)) ownership;
    mapping(address => Access[]) accessList;
    mapping(address => mapping(address => bool)) previousData;
    mapping(address => string) private accounts;
    mapping(address => Patient) patients;
    mapping(address => Doctor) doctors;

    mapping(address => Pathologist) pathologists;
    mapping(address => MedicalResearchLab) medicalResearchLabs;
    mapping(address => PharmacyCompany) pharmacyCompanies;

    string[] public TopMedichine;

    // Setters and Getters for Patient struct
    function setPatient(
        uint patientID,
        string memory name,
        string memory gender,
        uint256 age,
        string memory location
    ) public {
        address user = msg.sender;
        require(
            patients[user].isAdded == false,
            "You have already created your profile"
        );

        Patient storage patient = patients[user];

        patient.patientAddress = user;
        patient.patientID = patientID;
        patient.name = name;
        patient.gender = gender;
        patient.age = age;
        accounts[user] = "Patient";
        patient.location = location;
        patient.isAdded = true;
        patient.userType = "Patient";
    }

    function addLabReport(string memory report) external {
        MedicalResearchLabReports.push(report);
    }

    function addImageURL(address _user, string memory url) external {
        value[_user].push(url);
    }

    // function allow(address user) external {
    //     ownership[msg.sender][user] = true;

    //     if (previousData[msg.sender][user]) {
    //         for (uint256 i = 0; i < accessList[msg.sender].length; i++) {
    //             if (accessList[msg.sender][i].user == user) {
    //                 accessList[msg.sender].push(Access(user, true));
    //             }
    //         }
    //     } else {
    //         accessList[msg.sender].push(Access(user, true));
    //         previousData[msg.sender][user] = true;
    //     }
    // }

    // function disallow(address user) public {
    //     ownership[msg.sender][user] = false;
    //     for (uint256 i = 0; i < accessList[msg.sender].length; i++) {
    //         if (accessList[msg.sender][i].user == user) {
    //             accessList[msg.sender][i].access = false;
    //         }
    //     }
    // }

    function displayImage(address user) public view returns (string[] memory) {
        return value[user];
    }

    function getDoctor(
        address _doctorAddress
    ) public view returns (Doctor memory) {
        require(doctors[_doctorAddress].isAdded, "Doctor does not exist");
        // require(
        //     _doctorAddress == msg.sender ||
        //         ownership[_doctorAddress][msg.sender],
        //     "you don't have accress"
        // );
        return doctors[_doctorAddress];
    }

    function getPatient(
        address _patientAddress
    ) public view returns (Patient memory) {
        require(patients[_patientAddress].isAdded, "Patient does not exist");
        // require(
        //     _patientAddress == msg.sender ||
        //         ownership[_patientAddress][msg.sender],
        //     "you don't have accress"
        // );
        return patients[_patientAddress];
    }

    // Setters and Getters for Doctor struct
    function setDoctor(
        uint256 doctorID,
        string memory name,
        string memory specialty,
        uint256 consultationFee,
        uint256 BMDCNumber,
        uint256 yearOfExperience
    ) public {
        address user = msg.sender;
        require(
            doctors[user].isAdded == false,
            "you already create your profile"
        );

        Doctor storage doctor = doctors[user];

        doctor.DoctorAddress = user;
        doctor.doctorID = doctorID;
        doctor.name = name;
        doctor.specialty = specialty;
        doctor.consultationFee = consultationFee;
        doctor.BMDCNumber = BMDCNumber;
        doctor.yearOfExperience = yearOfExperience;
        doctor.userType = "Doctor";
        doctor.isAdded = true;
        accounts[user] = "Doctor";
    }

    // Setters and Getters for Hospital struct

    // Setters and Getters for Pathologist struct
    function setPathologist(
        uint256 pathologistID,
        string memory name,
        uint256 licenseNumber,
        string memory specializationArea,
        uint256 totalExperience
    ) public {
        address user = msg.sender;
        require(
            pathologists[user].isAdded == false,
            "you already create your profile"
        );

        Pathologist storage pathologist = pathologists[user];

        pathologist.pathologistAddress = user;
        pathologist.pathologistID = pathologistID;
        pathologist.name = name;
        pathologist.licenseNumber = licenseNumber;
        pathologist.specializationArea = specializationArea;

        pathologist.totalExperience = totalExperience;
        accounts[user] = "Pathologist";
        pathologist.isAdded = true;
        pathologist.userType = "Pathologist";
    }

    // Setters and Getters for MedicalResearchLab struct
    function setMedicalResearchLab(
        uint256 labID,
        string memory name,
        uint256 licenseID,
        string memory researchArea,
        uint256 labRating
    ) public {
        address user = msg.sender;
        require(
            medicalResearchLabs[user].isAdded == false,
            "you already create your profile"
        );

        MedicalResearchLab storage lab = medicalResearchLabs[user];

        lab.labAddress = user;
        lab.labID = labID;
        lab.name = name;
        lab.licenseID = licenseID;
        lab.researchArea = researchArea;
        lab.labRating = labRating;
        lab.isAdded = true;
        accounts[user] = "MedicalResearchLab";
        lab.userType = "MedicalResearchLab";
    }

    // Setters and Getters for PharmacyCompany struct
    function setPharmacyCompany(
        uint256 companyID,
        string memory name,
        uint256 licenseID,
        string memory productInformation,
        uint256 pharmacyRating
    ) public {
        address user = msg.sender;
        require(
            pharmacyCompanies[user].isAdded == false,
            "you already create your profile"
        );

        PharmacyCompany storage company = pharmacyCompanies[user];

        company.pharmacyCompanyAddress = user;
        company.companyID = companyID;
        company.name = name;
        company.licenseID = licenseID;
        company.productInformation = productInformation;
        company.pharmacyRating = pharmacyRating;
        company.isAdded = true;
        accounts[user] = "PharmacyCompany";
        company.userType = "PharmacyCompany";
    }

    function transferData(
        string memory entityType1,
        string memory entityType2,
        address user2
    ) public {
        if (keccak256(bytes(entityType1)) == keccak256("Patient")) {
            require(patients[msg.sender].isAdded, "Patient does not exist");
            // require(
            //     patients[user1].data.length > 0,
            //     "No data available to transfer"
            // );

            if (keccak256(bytes(entityType2)) == keccak256("Doctor")) {
                require(
                    doctors[user2].BMDCNumber != 0,
                    "Doctor does not exist"
                );

                doctors[user2].allPatientsAddressSharedToDoctor.push(
                    msg.sender
                );
            } else if (
                keccak256(bytes(entityType2)) == keccak256("Pathologist")
            ) {
                require(
                    pathologists[user2].pathologistAddress != address(0),
                    "Pathologist does not exist"
                );

                pathologists[user2].allPatientsAddressSharedTopathologist.push(
                    msg.sender
                );
            } else if (
                keccak256(bytes(entityType2)) == keccak256("MedicalResearchLab")
            ) {
                require(
                    medicalResearchLabs[user2].labAddress != address(0),
                    "Medical Research Lab does not exist"
                );
                medicalResearchLabs[user2]
                    .allPatientsAddressSharedToMedicalResearchLab
                    .push(msg.sender);
            } else if (
                keccak256(bytes(entityType2)) == keccak256("PharmacyCompany")
            ) {
                require(
                    pharmacyCompanies[user2].pharmacyCompanyAddress !=
                        address(0),
                    "Pharmacy Company does not exist"
                );

                pharmacyCompanies[user2]
                    .allPatientAddressSharedToPharmacyCompany
                    .push(msg.sender);
            } else {
                revert("Unsupported entity type");
            }
        }
    }

    function getPathologist(
        address _pathologistAddress
    ) public view returns (Pathologist memory) {
        require(
            pathologists[_pathologistAddress].isAdded,
            "pathologists does not exist"
        );

        return pathologists[_pathologistAddress];
    }

    function getPharmacyCompany(
        address _pharmacyCompanyAddress
    ) public view returns (PharmacyCompany memory) {
        require(
            pharmacyCompanies[_pharmacyCompanyAddress].isAdded,
            "Pharmacy Companies does not exist"
        );

        return pharmacyCompanies[_pharmacyCompanyAddress];
    }

    function getMedicalResearchLab(
        address _labAddress
    ) public view returns (MedicalResearchLab memory) {
        require(
            medicalResearchLabs[_labAddress].isAdded,
            "Medical Research lab does not exist"
        );

        return medicalResearchLabs[_labAddress];
    }

    function setPatientPersonalData(
        address user,
        uint256 height,
        string memory blood,
        string memory previousDiseases,
        string memory medicineDrugs,
        string memory badHabits,
        string memory chronicDiseases,
        string memory healthAllergies,
        string memory birthDefects
    ) external {
        patientData[user] = PatientPersonalData(
            height,
            blood,
            previousDiseases,
            medicineDrugs,
            badHabits,
            chronicDiseases,
            healthAllergies,
            birthDefects
        );
    }

    function addTopMedichine(string memory medichine) public {
        TopMedichine.push(medichine);
    }
}
