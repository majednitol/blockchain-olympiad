// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract MedicalData {
    struct Patient {
        address patientAddress;
        uint256 patientID;
        string name;
        string gender;
        uint256 age;
        string location;
        bool isAdded;
        string userType;
        string[] imgUrl;
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
        string[] imgUrl;
        string userType;
    }
    mapping(address => PatientPersonalData) private patientData;

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
        string[] MedicalResearchLabReports;
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
        string[] TopMedichine;
    }

    mapping(address => uint256) public accounts;
    mapping(address => Patient) patients;
    mapping(address => Doctor) doctors;

    mapping(address => Pathologist) pathologists;
    mapping(address => MedicalResearchLab) medicalResearchLabs;
    mapping(address => PharmacyCompany) pharmacyCompanies;

    // Setters and Getters for Patient struct
    function setPatient(
        uint256 patientID,
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
        accounts[user] = 5;
        patient.location = location;
        patient.isAdded = true;
        patient.userType = "Patient";
    }

    enum EntityType {
        Unknown,
        Doctor,
        Pathologist,
        MedicalResearchLab,
        PharmacyCompany,
        Patient
    }

    function addLabReport(string memory report) external {
        medicalResearchLabs[msg.sender].MedicalResearchLabReports.push(report);
    }

    function add(address _user, string memory url) external {
        if(accounts[msg.sender] == uint256(EntityType.Doctor)){
            require(patients[_user].isAdded, "Doctor  does not exist");
            doctors[_user].imgUrl.push(url);
            patients[_user].imgUrl.push(url);

        }
        else if (accounts[msg.sender] == uint256(EntityType.Patient)){
            require(patients[_user].isAdded, "Patient does not exist");
            patients[_user].imgUrl.push(url);
        }
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

    // function displayImage() public view returns (string[] memory) {
    //     return patients[msg.sender].imgUrl;
    // }

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
        accounts[user] = 1;
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
        accounts[user] = 2;
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
        accounts[user] = 3;
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
        accounts[user] = 4;
        company.userType = "PharmacyCompany";
    }

    function transferDataByPatient(address useraddress) public {
        uint256 user0 = accounts[useraddress];

        if (5 == uint256(EntityType.Patient)) {
            require(patients[msg.sender].isAdded, "Patient does not exist");

            if (
                user0 == uint256(EntityType.Doctor) &&
                5 == uint256(EntityType.Patient)
            ) {
                require(
                    doctors[useraddress].BMDCNumber != 0,
                    "Doctor does not exist"
                );
                doctors[useraddress].allPatientsAddressSharedToDoctor.push(
                    msg.sender
                );
            } else if (
                user0 == uint256(EntityType.Pathologist) &&
                5 == uint256(EntityType.Patient)
            ) {
                require(
                    pathologists[useraddress].pathologistAddress != address(0),
                    "Pathologist does not exist"
                );
                pathologists[useraddress]
                .allPatientsAddressSharedTopathologist
                .push(msg.sender);
            } else if (
                user0 == uint256(EntityType.MedicalResearchLab) &&
                5 == uint256(EntityType.Patient)
            ) {
                require(
                    medicalResearchLabs[useraddress].labAddress != address(0),
                    "Medical Research Lab does not exist"
                );
                medicalResearchLabs[useraddress]
                .allPatientsAddressSharedToMedicalResearchLab
                .push(msg.sender);
            } else if (
                user0 == uint256(EntityType.PharmacyCompany) &&
                5 == uint256(EntityType.Patient)
            ) {
                require(
                    pharmacyCompanies[useraddress].pharmacyCompanyAddress !=
                    address(0),
                    "Pharmacy Company does not exist"
                );
                pharmacyCompanies[useraddress]
                .allPatientAddressSharedToPharmacyCompany
                .push(msg.sender);
            } else {
                revert("Don't have any kinds of account");
            }
        }
    }

    function transferDataByDoctor(address useraddress) public {
        uint256 user0 = accounts[useraddress];

        if (1 == uint256(EntityType.Doctor)) {
            require(patients[msg.sender].isAdded, "Doctor does not exist");

            if (
                user0 == uint256(EntityType.Pathologist) &&
                1 == uint256(EntityType.Doctor)
            ) {
                require(
                    pathologists[useraddress].pathologistAddress != address(0),
                    "Pathologist does not exist"
                );
                pathologists[useraddress]
                .allPatientsAddressSharedTopathologist
                .push(msg.sender);
            } else {
                revert("Don't have any kinds of account");
            }
        }
    }

    function transferDataByPathologist(address useraddress) public {
        uint256 user0 = accounts[useraddress];

        if (2 == uint256(EntityType.Pathologist)) {
            require(patients[msg.sender].isAdded, "Pathologist does not exist");

            if (
                user0 == uint256(EntityType.Doctor) &&
                2 == uint256(EntityType.Pathologist)
            ) {
                require(
                    doctors[useraddress].BMDCNumber != 0,
                    "Doctor does not exist"
                );
                doctors[useraddress].allPatientsAddressSharedToDoctor.push(
                    msg.sender
                );
            } else {
                revert("Don't have any kinds of account");
            }
        }
    }

    function ConnectedAccountType(
        address useraddress
    ) public view returns (uint) {
        uint256 user0 = accounts[useraddress];

        if (user0 == uint256(EntityType.Doctor)) {
            return user0;
        } else if (user0 == uint256(EntityType.Patient)) {
            return user0;
        } else if (user0 == uint256(EntityType.Pathologist)) {
            return user0;
        } else if (user0 == uint256(EntityType.MedicalResearchLab)) {
            return user0;
        } else if (user0 == uint256(EntityType.PharmacyCompany)) {
            return user0;
        } else {
            revert("No account have any entity type");
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
        uint256 height,
        string memory blood,
        string memory previousDiseases,
        string memory medicineDrugs,
        string memory badHabits,
        string memory chronicDiseases,
        string memory healthAllergies,
        string memory birthDefects
    ) external {
        patientData[msg.sender] = PatientPersonalData(
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
        pharmacyCompanies[msg.sender].TopMedichine.push(medichine);
    }

    // function addaddress(address user) public {
    //     medicalResearchLabs[user]
    //         .allPatientsAddressSharedToMedicalResearchLab
    //         .push(msg.sender);
    // }
}
