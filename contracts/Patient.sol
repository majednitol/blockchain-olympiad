// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PatientData {
    struct PatientParient {
        string name;
        address patientParient;
        uint256 age;
        string gender;
        uint256 birthDay;
        string bloodGroup;
        uint256 nid;
        bool isAdded;
    }
    struct Patient {
        address patient;
        string name;
        uint256 age;
        uint256 patientId;
        string gender;
        uint256 birthDay;
        string bloodGroup;
        PatientParient patientParient;
        uint256 nid;
        bool isAdded;
        address[] dataHash;
    }

    struct Credential {
        address issuerAddress;
        string credentielType;
        string credentialIssuer;
        string credentialValue;
        string dateIssued;
        bool isAdded;
        bool dataAccress;
    }

    mapping(address => Patient) public allPatient;
    mapping(address => PatientParient) public allPatientParient;
    mapping(address => Credential) public allCredential;
    mapping(address => mapping(address => bool)) public accressList;
    address[] public allPatientAddress;
    address[] public allPatientParientAddress;
    address[] public allCredentialAddress;

    function addPatient(
        address _patient,
        string memory _name,
        uint256 _age,
        uint256 _patientId,
        string memory _gender,
        uint256 _birthDay,
        string memory _bloodGroup,
        uint256 _nid
    ) public {
        require(
            allPatient[_patient].isAdded == false,
            "you already added yourself"
        );
        Patient storage newPatient = allPatient[_patient];

        newPatient.patient = _patient;
        newPatient.name = _name;
        newPatient.age = _age;
        newPatient.patientId = _patientId;
        newPatient.gender = _gender;
        newPatient.birthDay = _birthDay;
        newPatient.nid = _nid;
        newPatient.bloodGroup = _bloodGroup;
        newPatient.isAdded = true;
        allPatientAddress.push(_patient);
    }

    function viewPatient(
        address _patient
    )
        public
        view
        returns (
            address,
            string memory,
            uint256,
            uint256,
            string memory,
            uint256,
            string memory,
            uint256,
            bool
        )
    {
        Patient memory newPatient = allPatient[_patient];

        return (
            newPatient.patient,
            newPatient.name,
            newPatient.age,
            newPatient.patientId,
            newPatient.gender,
            newPatient.birthDay,
            newPatient.bloodGroup,
            newPatient.nid,
            newPatient.isAdded
        );
    }

    function addCredential(
        address _issuerAddress,
        string memory _credentielType,
        string memory _credentialIssuer,
        string memory _credentialValue,
        string memory _dateIssued
    ) public {
        require(
            allCredential[_issuerAddress].isAdded == false,
            "you already added your Credential"
        );
        Credential storage newCredential = allCredential[_issuerAddress];

        newCredential.issuerAddress = _issuerAddress;
        newCredential.credentielType = _credentielType;
        newCredential.credentialIssuer = _credentialIssuer;
        newCredential.credentialValue = _credentialValue;
        newCredential.dateIssued = _dateIssued;
        newCredential.isAdded = true;
        allCredentialAddress.push(_issuerAddress);
    }

    function viewCredential(
        address _issuerAddress
    )
        public
        view
        returns (
            address,
            string memory,
            string memory,
            string memory,
            string memory,
            bool
        )
    {
        require(
            accressList[_issuerAddress][msg.sender] == true,
            "user alredy have accress in your data"
        );
        Credential storage newCredential = allCredential[_issuerAddress];

        return (
            newCredential.issuerAddress,
            newCredential.credentielType,
            newCredential.credentialIssuer,
            newCredential.credentialValue,
            newCredential.dateIssued,
            newCredential.isAdded
        );
    }

    function addPatientParient(
        string memory _name,
        address _patientParient,
        uint256 _age,
        string memory _gender,
        uint256 _birthDay,
        string memory _bloodGroup,
        uint256 _nid
    ) public {
        require(
            allPatientParient[_patientParient].isAdded == false,
            "you already create your profile"
        );
        PatientParient storage newPatientParient = allPatientParient[
            _patientParient
        ];

        newPatientParient.name = _name;
        newPatientParient.patientParient = _patientParient;
        newPatientParient.age = _age;

        newPatientParient.gender = _gender;
        newPatientParient.birthDay = _birthDay;
        newPatientParient.bloodGroup = _bloodGroup;
        newPatientParient.nid = _nid;

        newPatientParient.isAdded = true;
        allPatientParientAddress.push(_patientParient);
    }

    function viewPatientParient(
        address _patientParient
    )
        public
        view
        returns (
            string memory,
            address,
            uint256,
            string memory,
            uint256,
            string memory,
            uint256,
            bool
        )
    {
        require(
            _patientParient == msg.sender ||
                accressList[_patientParient][msg.sender] == true,
            "user alredy have accress in your data"
        );
        PatientParient memory newPatientParient = allPatientParient[
            _patientParient
        ];

        return (
            newPatientParient.name,
            newPatientParient.patientParient,
            newPatientParient.age,
            newPatientParient.gender,
            newPatientParient.birthDay,
            newPatientParient.bloodGroup,
            newPatientParient.nid,
            newPatientParient.isAdded
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
