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
        address[] personalDoctor;
    }
    //  doctor ar phatolist er position change korci
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

    struct Doctor {
        address DoctorAddress;
        uint256 doctorID;
        string name;
        string specialty;
        uint256 consultationFee;
        uint256 BMDCNumber;
        uint256 yearOfExperience;
        address[] PatientToDoctor; //data share of all patient
        string[] patientTest;
        // data share of all patient
        bool isAdded;
        address[] TreatedPatient;
        string userType;
    }

    struct Pathologist {
        address pathologistAddress;
        uint256 pathologistID;
        string name;
        uint256 licenseNumber;
        string specializationArea;
        uint256 totalExperience;
        bool isAdded;
        address[] PatientToPathologiest; //allPatientsAddressSharedTopathologist
        string[] pathologistTest;
        string userType;
    }

    // struct PathologistTest {
    //     string Allergies;
    //     string Cancer;
    //     string HormoneProblem;
    //     uint256 DiabatiesLevel;
    // }

    struct MedicalResearchLab {
        address labAddress;
        uint256 labID;
        string name;
        uint256 licenseID;
        string researchArea;
        uint256 labRating;
        bool isAdded;
        address[] PatientToMedRcLab; // allPatientsAddressSharedToMedicalResearchLab
        string[] PatientLabReport; // MedicalResearchLabReports
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
        address[] PatientToPharmacy; // allPatientAddressSharedToPharmacyCompany
        string userType;
        string[] TopMedichine;
    }

    mapping(address => uint256) public accounts;
    mapping(address => Patient) patients;
    mapping(address => Doctor) doctors;

    mapping(address => Pathologist) pathologists; //pathologistTests
    mapping(address => MedicalResearchLab) medicalResearchLabs;
    mapping(address => PharmacyCompany) pharmacyCompanies;

    // Problem 1

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

    function addPrescription(address _user, string memory url) external {
        //Docto or Patient addPrescription
        if (accounts[msg.sender] == uint256(EntityType.Doctor)) {
            require(doctors[msg.sender].isAdded, "Doctor doesn't exist");
            // doctors[msg.sender].imgUrl.push(url);
            if (accounts[_user] == uint256(EntityType.Pathologist)) {
                pathologists[_user].pathologistTest.push(url);
            } else if (accounts[_user] == uint256(EntityType.Patient)) {
                doctors[msg.sender].TreatedPatient.push(_user);
                patients[_user].imgUrl.push(url);
                patients[_user].personalDoctor.push(msg.sender);
            } else {
                revert("You don't addPrescription in this  entity ");
            }
        } else if (accounts[msg.sender] == uint256(EntityType.Patient)) {
            require(patients[msg.sender].isAdded, "Patient doesn't exist");
            patients[msg.sender].imgUrl.push(url);
        } else if (accounts[msg.sender] == uint256(EntityType.Pathologist)) {
            require(
                pathologists[msg.sender].isAdded,
                "pathologists doesn't exist"
            );
            doctors[_user].patientTest.push(url);
        } else if (
            accounts[msg.sender] == uint256(EntityType.MedicalResearchLab)
        ) {
            require(
                medicalResearchLabs[msg.sender].isAdded,
                "medicalResearchLabs doesn't exist"
            );
            medicalResearchLabs[msg.sender].PatientLabReport.push(url);
        } else {
            revert("You don't addPrescription in this  entity ");
        }
    }

    function getDoctor(
        address _doctorAddress
    ) public view returns (Doctor memory) {
        require(doctors[_doctorAddress].isAdded, "Doctor doesn't exist");

        return doctors[_doctorAddress];
    }

    function getPatient(
        address _patientAddress
    ) public view returns (Patient memory) {
        require(patients[_patientAddress].isAdded, "Patient does not exist");
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
            "You already create your profile"
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
            "You already create your profile"
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
            "You already create your profile"
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
        lab.userType = "Medical Research Lab";
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
            "You already create your profile"
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
        company.userType = "Pharmacy Company";
    }

    function transferDataByPatient(address useraddress) public {
        uint256 user0 = accounts[useraddress];

        if (5 == uint256(EntityType.Patient)) {
            require(patients[msg.sender].isAdded, "Patient doesn't exist");

            if (
                user0 == uint256(EntityType.Doctor) &&
                5 == uint256(EntityType.Patient)
            ) {
                require(
                    doctors[useraddress].BMDCNumber != 0,
                    "Doctor doesn't exist"
                );
                doctors[useraddress].PatientToDoctor.push(msg.sender);
            } else if (
                user0 == uint256(EntityType.MedicalResearchLab) &&
                5 == uint256(EntityType.Patient)
            ) {
                require(
                    medicalResearchLabs[useraddress].labAddress != address(0),
                    "Medical Research Lab doesn't exist"
                );
                medicalResearchLabs[useraddress].PatientToMedRcLab.push(
                    msg.sender
                );
            } else if (
                user0 == uint256(EntityType.PharmacyCompany) &&
                5 == uint256(EntityType.Patient)
            ) {
                require(
                    pharmacyCompanies[useraddress].pharmacyCompanyAddress !=
                    address(0),
                    "Pharmacy Company doesn't exist"
                );
                pharmacyCompanies[useraddress].PatientToPharmacy.push(
                    msg.sender
                );
            } else {
                revert("Patient can transfer data without pathologists ");
            }
        }
    }

    function showSharedPrescription(address patientAddress) public view returns (string[] memory imageUrl) {
        return patients[patientAddress].imgUrl;
    }

    //    function transferDataByDoctor(address useraddress) public {
    //        uint256 user0 = accounts[useraddress];
    //
    //        if (1 == uint256(EntityType.Doctor)) {
    //            require(doctors[msg.sender].isAdded, "Doctor doesn't exist");
    //
    //            if (
    //                user0 == uint256(EntityType.Pathologist) &&
    //                1 == uint256(EntityType.Doctor)
    //            ) {
    //                require(
    //                    pathologists[useraddress].pathologistAddress != address(0),
    //                    "Pathologist does not exist"
    //                );
    //                pathologists[useraddress].PatientToPathologiest.push(
    //                    msg.sender
    //                );
    //            } else {
    //                revert("Doctor can transfer data only pathologists ");
    //            }
    //        }
    //    }

    //    function transferDataByPathologist(address useraddress) public {
    //        uint256 user0 = accounts[useraddress];
    //
    //        if (2 == uint256(EntityType.Pathologist)) {
    //            require(
    //                pathologists[msg.sender].isAdded,
    //                "Pathologist doesn't exist"
    //            );
    //
    //            if (
    //                user0 == uint256(EntityType.Doctor) &&
    //                2 == uint256(EntityType.Pathologist)
    //            ) {
    //                require(
    //                    doctors[useraddress].BMDCNumber != 0,
    //                    "Doctor doesn't exist"
    //                );
    //                doctors[useraddress].PathologiestToDoctor.push(msg.sender);
    //            } else {
    //                revert("pathologists can transfer data only doctor");
    //            }
    //        }
    //    }

    function ConnectedAccountType(
        address useraddress
    ) public view returns (uint256) {
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
            revert("No account");
        }
    }

    function getPathologist(
        address _pathologistAddress
    ) public view returns (Pathologist memory) {
        require(
            pathologists[_pathologistAddress].isAdded,
            "Pathologists doesn't exist"
        );

        return pathologists[_pathologistAddress];
    }

    function getPharmacyCompany(
        address _pharmacyCompanyAddress
    ) public view returns (PharmacyCompany memory) {
        require(
            pharmacyCompanies[_pharmacyCompanyAddress].isAdded,
            "Pharmacy Companies doesn't exist"
        );

        return pharmacyCompanies[_pharmacyCompanyAddress];
    }

    function getMedicalResearchLab(
        address _labAddress
    ) public view returns (MedicalResearchLab memory) {
        require(
            medicalResearchLabs[_labAddress].isAdded,
            "Medical Research Lab doesn't exist"
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
        Patient storage patient = patients[msg.sender];
        patient.patientPersonalData.height = height;
        patient.patientPersonalData.Blood = blood;
        patient.patientPersonalData.PreviousDiseases = previousDiseases;
        patient.patientPersonalData.Medicinedrugs = medicineDrugs;
        patient.patientPersonalData.BadHabits = badHabits;
        patient.patientPersonalData.ChronicDiseases = chronicDiseases;
        patient.patientPersonalData.HealthAllergies = healthAllergies;
        patient.patientPersonalData.BirthDefects = birthDefects;
    }

    function addTopMedichine(string memory medichine) public {
        pharmacyCompanies[msg.sender].TopMedichine.push(medichine);
    }
}
