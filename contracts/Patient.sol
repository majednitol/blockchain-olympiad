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
        string credentialType;
        string credentialIssuer;
        string credentialValue;
        string dateIssued;
        bool isAdded;
        bool dataAccess;
    }

    mapping(address => Patient) allPatient;
    mapping(address => PatientParient) public allPatientParient;
    mapping(address => Credential) public allCredential;
    mapping(address => mapping(address => bool)) public accessList;
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
            !allPatient[_patient].isAdded,
            "You have already added yourself"
        );
        Patient storage newPatient = allPatient[_patient];

        newPatient.patient = _patient;
        newPatient.name = _name;
        newPatient.age = _age;
        newPatient.patientId = _patientId;
        newPatient.gender = _gender;
        newPatient.birthDay = _birthDay;
        newPatient.bloodGroup = _bloodGroup;
        newPatient.nid = _nid;
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
        require(
            _patient == msg.sender || accessList[_patient][msg.sender],
            "user don't have access in your data"
        );
        Patient memory patient = allPatient[_patient];

        return (
            patient.patient,
            patient.name,
            patient.age,
            patient.patientId,
            patient.gender,
            patient.birthDay,
            patient.bloodGroup,
            patient.nid,
            patient.isAdded
        );
    }

    function addCredential(
        address _issuerAddress,
        string memory _credentialType,
        string memory _credentialIssuer,
        string memory _credentialValue,
        string memory _dateIssued
    ) public {
        require(
            !allCredential[_issuerAddress].isAdded,
            "You have already added your Credential"
        );
        Credential storage newCredential = allCredential[_issuerAddress];

        newCredential.issuerAddress = _issuerAddress;
        newCredential.credentialType = _credentialType;
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
            _issuerAddress == msg.sender ||
                accessList[_issuerAddress][msg.sender],
            "user don't have access in your data"
        );
        Credential memory credential = allCredential[_issuerAddress];

        return (
            credential.issuerAddress,
            credential.credentialType,
            credential.credentialIssuer,
            credential.credentialValue,
            credential.dateIssued,
            credential.isAdded
        );
    }

    function grantAccess(address _patientAddress) public {
        accessList[msg.sender][_patientAddress] = true;
    }

    function revokeAccess(address _patientAddress) public {
        accessList[msg.sender][_patientAddress] = false;
    }

    function checkAccess(address _patientAddress) public view returns (bool) {
        return accessList[msg.sender][_patientAddress];
    }
}
