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
        Parent parent;
        bool isAdded;
        string[] data;
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
        string[] data;
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
        string[] data;
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
        string[] data;
    }

    struct MedicalResearchLab {
        string labID;
        string name;
        uint256 licenseID;
        string researchArea;
        uint256 labRating;
        bool isAdded;
        string[] data;
    }

    struct PharmacyCompany {
        string companyID;
        string name;
        uint256 licenseID;
        string productInformation;
        uint256 pharmacyRating;
        bool isAdded;
        string[] data;
    }

    struct MedicalInsurance {
        string insuranceID;
        string name;
        uint256 licenseID;
        string insuranceType;
        string companyReview;
        bool isAdded;
        string[] data;
    }

    struct Parent {
        string parentID;
        string name;
        int256 parentIDNumber;
        uint256 phoneNumber;
        string NIDInfo;
        bool isAdded;
        string[] data;
    }

    struct DataScientist {
        string scientistID;
        string name;
        uint256 licenseNumber;
        string about;
        uint256 yearExperience;
        bool isAdded;
        string[] data;
    }
    enum UserType {
        Doctor,
        Hospital,
        Pathologist,
        MedicalResearchLab,
        PharmacyCompany,
        MedicalInsurance,
        DataScientist
    }
    struct Entity {
        UserType userType;
        string[] data;
    }
    mapping(address => Entity) public entities;

    mapping(address => UserType) public userType;
    mapping(address => Patient) private patients;
    mapping(address => Doctor) private doctors;
    mapping(address => Hospital) private hospitals;
    mapping(address => Pathologist) private pathologists;
    mapping(address => MedicalResearchLab) private medicalResearchLabs;
    mapping(address => PharmacyCompany) private pharmacyCompanies;
    mapping(address => MedicalInsurance) private medicalInsurances;
    mapping(address => DataScientist) private dataScientists;

    constructor() {
        // Initialize contract state or perform any required setup here
    }

    modifier onlyUserType(string memory userType) {
        require(isUserExists(msg.sender, userType), "User not authorized");
        _;
    }

    function isUserExists(
        address userAddress,
        string memory userType
    ) private view returns (bool) {
        if (keccak256(bytes(userType)) == keccak256(bytes("patient"))) {
            return patients[userAddress].isAdded;
        } else if (keccak256(bytes(userType)) == keccak256(bytes("doctor"))) {
            return doctors[userAddress].isAdded;
        } else if (keccak256(bytes(userType)) == keccak256(bytes("hospital"))) {
            return hospitals[userAddress].isAdded;
        } else if (
            keccak256(bytes(userType)) == keccak256(bytes("pathologist"))
        ) {
            return pathologists[userAddress].isAdded;
        } else if (
            keccak256(bytes(userType)) == keccak256(bytes("medicalResearchLab"))
        ) {
            return medicalResearchLabs[userAddress].isAdded;
        } else if (
            keccak256(bytes(userType)) == keccak256(bytes("pharmacyCompany"))
        ) {
            return pharmacyCompanies[userAddress].isAdded;
        } else if (
            keccak256(bytes(userType)) == keccak256(bytes("medicalInsurance"))
        ) {
            return medicalInsurances[userAddress].isAdded;
        } else if (
            keccak256(bytes(userType)) == keccak256(bytes("dataScientist"))
        ) {
            return dataScientists[userAddress].isAdded;
        } else {
            revert("Invalid user type");
        }
    }

    function addPatient(
        string memory _patientID,
        string memory _name,
        string memory _gender,
        uint256 _age,
        string memory _bloodGroup,
        string memory _location,
        string memory _parentID,
        string[] memory _data
    ) external {
        require(!patients[msg.sender].isAdded, "Patient already exists");

        Parent memory parent = Parent({
            parentID: _parentID,
            name: "",
            parentIDNumber: 0,
            phoneNumber: 0,
            NIDInfo: "",
            isAdded: false,
            data: new string[](0)
        });

        patients[msg.sender] = Patient({
            patientID: _patientID,
            name: _name,
            gender: _gender,
            age: _age,
            bloodGroup: _bloodGroup,
            location: _location,
            parent: parent,
            isAdded: true,
            data: new string[](0)
        });
    }

    function getPatient()
        external
        view
        onlyUserType("patient")
        returns (
            string memory patientID,
            string memory name,
            string memory gender,
            uint256 age,
            string memory bloodGroup,
            string memory location,
            Parent memory parent,
            bool isAdded,
            string[] memory data
        )
    {
        Patient storage patient = patients[msg.sender];
        return (
            patient.patientID,
            patient.name,
            patient.gender,
            patient.age,
            patient.bloodGroup,
            patient.location,
            patient.parent,
            patient.isAdded,
            patient.data
        );
    }

    // Add functions for other user types (doctor, hospital, pathologist, etc.) here
    // ...

    function addDoctor(
        string memory _doctorID,
        string memory _name,
        string memory _specialty,
        uint256 _consultationFee,
        uint256 _BMDCNumber,
        string memory _yearOfExperience,
        uint256 _joiningDate,
        uint256 _totalRating,
        string memory _aboutDoctors,
        string memory _chamberLocation,
        string[] memory _data
    ) external {
        require(!doctors[msg.sender].isAdded, "Doctor already exists");

        doctors[msg.sender] = Doctor({
            doctorID: _doctorID,
            name: _name,
            specialty: _specialty,
            consultationFee: _consultationFee,
            BMDCNumber: _BMDCNumber,
            yearOfExperience: _yearOfExperience,
            joiningDate: _joiningDate,
            totalRating: _totalRating,
            aboutDoctors: _aboutDoctors,
            chamberLocation: _chamberLocation,
            isAdded: true,
            data: new string[](0)
        });
    }

    function getDoctor()
        external
        view
        onlyUserType("doctor")
        returns (
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
            bool isAdded,
            string[] memory data
        )
    {
        Doctor storage doctor = doctors[msg.sender];
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
            doctor.chamberLocation,
            doctor.isAdded,
            doctor.data
        );
    }

    function addHospital(
        string memory _hospitalID,
        string memory _name,
        string memory _location,
        uint256 _contactNumber,
        string memory _hospitalSpecialty,
        string memory _serviceInformation,
        string memory _patientRating,
        string[] memory _data
    ) external {
        require(!hospitals[msg.sender].isAdded, "Hospital already exists");

        hospitals[msg.sender] = Hospital({
            hospitalID: _hospitalID,
            name: _name,
            location: _location,
            contactNumber: _contactNumber,
            hospitalSpecialty: _hospitalSpecialty,
            serviceInformation: _serviceInformation,
            patientRating: _patientRating,
            isAdded: true,
            data: new string[](0)
        });
    }

    function getHospital()
        external
        view
        onlyUserType("hospital")
        returns (
            string memory hospitalID,
            string memory name,
            string memory location,
            uint256 contactNumber,
            string memory hospitalSpecialty,
            string memory serviceInformation,
            string memory patientRating,
            bool isAdded,
            string[] memory data
        )
    {
        Hospital storage hospital = hospitals[msg.sender];
        return (
            hospital.hospitalID,
            hospital.name,
            hospital.location,
            hospital.contactNumber,
            hospital.hospitalSpecialty,
            hospital.serviceInformation,
            hospital.patientRating,
            hospital.isAdded,
            hospital.data
        );
    }

    function addPathologist(
        string memory _pathologistID,
        string memory _name,
        uint256 _licenseNumber,
        string memory _specializationArea,
        string memory _serviceArea,
        uint256 _totalExperience,
        uint256 _totalRating,
        string memory _review,
        string[] memory _data
    ) external {
        require(
            !pathologists[msg.sender].isAdded,
            "Pathologist already exists"
        );

        pathologists[msg.sender] = Pathologist({
            pathologistID: _pathologistID,
            name: _name,
            licenseNumber: _licenseNumber,
            specializationArea: _specializationArea,
            serviceArea: _serviceArea,
            totalExperience: _totalExperience,
            totalRating: _totalRating,
            review: _review,
            isAdded: true,
            data: new string[](0)
        });
    }

    function getPathologist()
        external
        view
        onlyUserType("pathologist")
        returns (
            string memory pathologistID,
            string memory name,
            uint256 licenseNumber,
            string memory specializationArea,
            string memory serviceArea,
            uint256 totalExperience,
            uint256 totalRating,
            string memory review,
            bool isAdded,
            string[] memory data
        )
    {
        Pathologist storage pathologist = pathologists[msg.sender];
        return (
            pathologist.pathologistID,
            pathologist.name,
            pathologist.licenseNumber,
            pathologist.specializationArea,
            pathologist.serviceArea,
            pathologist.totalExperience,
            pathologist.totalRating,
            pathologist.review,
            pathologist.isAdded,
            pathologist.data
        );
    }

    // ...
    // ...

    function addMedicalResearchLab(
        string memory _labID,
        string memory _name,
        uint256 _licenseID,
        string memory _researchArea,
        uint256 _labRating
    ) external {
        require(
            !medicalResearchLabs[msg.sender].isAdded,
            "Medical Research Lab already exists"
        );

        medicalResearchLabs[msg.sender] = MedicalResearchLab({
            labID: _labID,
            name: _name,
            licenseID: _licenseID,
            researchArea: _researchArea,
            labRating: _labRating,
            isAdded: true,
            data: new string[](0)
        });
    }

    function getMedicalResearchLab()
        external
        view
        onlyUserType("medicalResearchLab")
        returns (
            string memory labID,
            string memory name,
            string memory _researchArea,
            bool isAdded,
            string[] memory data
        )
    {
        MedicalResearchLab storage lab = medicalResearchLabs[msg.sender];
        return (lab.labID, lab.name, lab.researchArea, lab.isAdded, lab.data);
    }

    function addPharmacyCompany(
        string memory _companyID,
        string memory _name,
        uint256 _licenseID,
        string memory _productInformation,
        uint256 _pharmacyRating,
        string memory _services,
        string[] memory _data
    ) external {
        require(
            !pharmacyCompanies[msg.sender].isAdded,
            "Pharmacy Company already exists"
        );

        pharmacyCompanies[msg.sender] = PharmacyCompany({
            companyID: _companyID,
            name: _name,
            licenseID: _licenseID,
            productInformation: _productInformation,
            pharmacyRating: _pharmacyRating,
            isAdded: true,
            data: new string[](0)
        });
    }

    function getPharmacyCompany()
        external
        view
        onlyUserType("pharmacyCompany")
        returns (
            string memory companyID,
            string memory name,
            uint256 _licenseID,
            string memory _productInformation,
            uint256 _pharmacyRating,
            string[] memory data
        )
    {
        PharmacyCompany storage company = pharmacyCompanies[msg.sender];
        return (
            company.companyID,
            company.name,
            company.licenseID,
            company.productInformation,
            company.pharmacyRating,
            company.data
        );
    }

    function addMedicalInsurance(
        string memory _insuranceID,
        string memory _name,
        string memory _companyReview,
        uint256 _licenseID,
        string memory _insuranceType,
        string[] memory _data
    ) external {
        require(
            !medicalInsurances[msg.sender].isAdded,
            "Medical Insurance already exists"
        );

        medicalInsurances[msg.sender] = MedicalInsurance({
            insuranceID: _insuranceID,
            name: _name,
            licenseID: _licenseID,
            insuranceType: _insuranceType,
            companyReview: _companyReview,
            isAdded: true,
            data: new string[](0)
        });
    }

    function getMedicalInsurance()
        external
        view
        onlyUserType("medicalInsurance")
        returns (
            string memory insuranceID,
            string memory name,
            uint256 licenseID,
            string memory insuranceType,
            string memory companyReview,
            bool isAdded,
            string[] memory data
        )
    {
        MedicalInsurance storage insurance = medicalInsurances[msg.sender];
        return (
            insurance.insuranceID,
            insurance.name,
            insurance.licenseID,
            insurance.insuranceType,
            insurance.companyReview,
            insurance.isAdded,
            insurance.data
        );
    }

    function addDataScientist(
        string memory _scientistID,
        string memory _name,
        uint256 _licenseNumber,
        string memory _about,
        uint256 _yearExperience
    ) external {
        require(
            !dataScientists[msg.sender].isAdded,
            "Data Scientist already exists"
        );

        dataScientists[msg.sender] = DataScientist({
            scientistID: _scientistID,
            name: _name,
            licenseNumber: _licenseNumber,
            about: _about,
            yearExperience: _yearExperience,
            isAdded: true,
            data: new string[](0)
        });
    }

    function getDataScientist()
        external
        view
        onlyUserType("dataScientist")
        returns (
            string memory scientistID,
            string memory name,
            uint256 licenseNumber,
            string memory about,
            uint256 yearExperience,
            string[] memory data
        )
    {
        DataScientist storage scientist = dataScientists[msg.sender];
        return (
            scientist.scientistID,
            scientist.name,
            scientist.licenseNumber,
            scientist.about,
            scientist.yearExperience,
            scientist.data
        );
    }

    // ...
    // ...

    modifier onlyAuthorizedUser() {
        require(
            userType[msg.sender] == UserType.Doctor ||
                userType[msg.sender] == UserType.Hospital ||
                userType[msg.sender] == UserType.Pathologist ||
                userType[msg.sender] == UserType.MedicalResearchLab ||
                userType[msg.sender] == UserType.PharmacyCompany ||
                userType[msg.sender] == UserType.MedicalInsurance ||
                userType[msg.sender] == UserType.DataScientist,
            "Unauthorized user"
        );
        _;
    }

    function transferData(
        address _recipient,
        uint256 _dataIndex
    ) external onlyAuthorizedUser {
        require(_recipient != address(0), "Invalid recipient address");

        UserType senderUserType = userType[msg.sender];
        UserType recipientUserType = userType[_recipient];

        require(
            senderUserType != recipientUserType,
            "Invalid recipient user type"
        );

        if (senderUserType == UserType.Doctor) {
            require(
                doctors[msg.sender].isAdded,
                "Sender Doctor does not exist"
            );
            require(
                doctors[_recipient].isAdded,
                "Recipient Doctor does not exist"
            );
            require(
                _dataIndex < doctors[msg.sender].data.length,
                "Invalid data index"
            );

            doctors[_recipient].data.push(doctors[msg.sender].data[_dataIndex]);
        } else if (senderUserType == UserType.Hospital) {
            require(
                hospitals[msg.sender].isAdded,
                "Sender Hospital does not exist"
            );
            require(
                hospitals[_recipient].isAdded,
                "Recipient Hospital does not exist"
            );
            require(
                _dataIndex < hospitals[msg.sender].data.length,
                "Invalid data index"
            );

            hospitals[_recipient].data.push(
                hospitals[msg.sender].data[_dataIndex]
            );
        } else if (senderUserType == UserType.Pathologist) {
            require(
                pathologists[msg.sender].isAdded,
                "Sender Pathologist does not exist"
            );
            require(
                pathologists[_recipient].isAdded,
                "Recipient Pathologist does not exist"
            );
            require(
                _dataIndex < pathologists[msg.sender].data.length,
                "Invalid data index"
            );

            pathologists[_recipient].data.push(
                pathologists[msg.sender].data[_dataIndex]
            );
        } else if (senderUserType == UserType.MedicalResearchLab) {
            require(
                medicalResearchLabs[msg.sender].isAdded,
                "Sender Medical Research Lab does not exist"
            );
            require(
                medicalResearchLabs[_recipient].isAdded,
                "Recipient Medical Research Lab does not exist"
            );
            require(
                _dataIndex < medicalResearchLabs[msg.sender].data.length,
                "Invalid data index"
            );

            medicalResearchLabs[_recipient].data.push(
                medicalResearchLabs[msg.sender].data[_dataIndex]
            );
        } else if (senderUserType == UserType.PharmacyCompany) {
            require(
                pharmacyCompanies[msg.sender].isAdded,
                "Sender Pharmacy Company does not exist"
            );
            require(
                pharmacyCompanies[_recipient].isAdded,
                "Recipient Pharmacy Company does not exist"
            );
            require(
                _dataIndex < pharmacyCompanies[msg.sender].data.length,
                "Invalid data index"
            );

            pharmacyCompanies[_recipient].data.push(
                pharmacyCompanies[msg.sender].data[_dataIndex]
            );
        } else if (senderUserType == UserType.MedicalInsurance) {
            require(
                medicalInsurances[msg.sender].isAdded,
                "Sender Medical Insurance does not exist"
            );
            require(
                medicalInsurances[_recipient].isAdded,
                "Recipient Medical Insurance does not exist"
            );
            require(
                _dataIndex < medicalInsurances[msg.sender].data.length,
                "Invalid data index"
            );

            medicalInsurances[_recipient].data.push(
                medicalInsurances[msg.sender].data[_dataIndex]
            );
        } else if (senderUserType == UserType.DataScientist) {
            require(
                dataScientists[msg.sender].isAdded,
                "Sender Data Scientist does not exist"
            );
            require(
                dataScientists[_recipient].isAdded,
                "Recipient Data Scientist does not exist"
            );
            require(
                _dataIndex < dataScientists[msg.sender].data.length,
                "Invalid data index"
            );

            dataScientists[_recipient].data.push(
                dataScientists[msg.sender].data[_dataIndex]
            );
        }
    }

    // ...
    function grantAccess(address _user) external onlyAuthorizedUser {
        require(_user != address(0), "Invalid user address");
        userType[_user] = UserType.DataScientist;
    }

    function revokeAccess(address _user) external onlyAuthorizedUser {
        require(
            userType[_user] == UserType.DataScientist,
            "User is not a Data Scientist"
        );
        userType[_user] = UserType.Doctor;
    }

    // Data addition function
    // ...

    // Data addition function
    function addData(string memory _data) external onlyAuthorizedUser {
        require(bytes(_data).length > 0, "Data cannot be empty");
        entities[msg.sender].data.push(_data);
    }

    // ...
}
