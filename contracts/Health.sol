// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Patient.sol";

contract Helth {
    PatientData public Patient;
    address public admin;

    constructor(PatientData _PatientContract) {
        Patient = _PatientContract;
        admin = msg.sender;
    }

    struct Doctor {
        address doctor;
        string name;
        uint256 age;
        uint256 doctorId;
        uint256 nid;
        bool isAdded;
        bool dataAccress;
    }
    struct PharmacyCompany {
        address pharmacyCompany;
        string name;
        uint256 pharmacyCompanyId;
        bool isAdded;
        bool dataAccress;
    }

    struct Pharmaciest {
        address pharmaciest;
        string name;
        uint256 pharmaciestId;
        bool isAdded;
        bool dataAccress;
    }

    struct FoodIndusty {
        address foodIndusty;
        string name;
        uint256 foodIndustyId;
        bool isAdded;
        bool dataAccress;
    }

    struct Hospital {
        address hospital;
        string name;
        uint256 hospitalId;
        bool isAdded;
        bool dataAccress;
    }

    struct Pharmacy {
        address pharmacy;
        string name;
        uint256 pharmacyId;
        bool isAdded;
        bool dataAccress;
    }

    struct DataAnalyst {
        address dataAnalyst;
        string name;
        uint256 dataAnalystId;
        bool isAdded;
        bool dataAccress;
    }

    mapping(address => Doctor) public allDoctor;
    mapping(address => PharmacyCompany) public allPharmacyCompany;
    mapping(address => Pharmaciest) public allPharmaciest;
    mapping(address => FoodIndusty) public allFoodIndusty;
    mapping(address => Hospital) public allHospital;
    mapping(address => Pharmacy) public allPharmacy;
    mapping(address => DataAnalyst) public allDataAnalyst;

    //all address

    address[] public allDoctorAddress;
    address[] public allPharmacyCompanyAddress;
    address[] public allPharmaciestAddress;
    address[] public allFoodIndustyAddress;
    address[] public allHospitalAddress;
    address[] public allPharmacyAddress;
    address[] public allDataAnalystAddress;

    address[] public allAddress;

    address public ContractOwner;

    function addDoctor(
        address _doctor,
        string memory _name,
        uint256 _age,
        uint256 _doctorId,
        uint256 _nid
    ) public {
        require(
            allDoctor[_doctor].isAdded == false,
            "you already added yourself"
        );
        Doctor storage newDoctor = allDoctor[_doctor];

        newDoctor.doctor = _doctor;
        newDoctor.name = _name;
        newDoctor.age = _age;
        newDoctor.doctorId = _doctorId;
        newDoctor.nid = _nid;
        newDoctor.isAdded = true;
        allDoctorAddress.push(_doctor);
    }

    function viewDoctor(
        address _doctor
    )
        public
        view
        returns (address, string memory, uint256, uint256, uint256, bool)
    {
        Doctor storage newDoctor = allDoctor[_doctor];
        // require(
        //     Patient.accressList[_doctor][msg.sender] == true,
        //     "user alredy have accress in your data"
        // );
        return (
            newDoctor.doctor,
            newDoctor.name,
            newDoctor.age,
            newDoctor.doctorId,
            newDoctor.nid,
            newDoctor.isAdded
        );
    }

    function addPharmacyCompany(
        address _pharmacyCompany,
        string memory _name,
        uint256 _pharmacyCompanyId
    ) public {
        require(
            allPharmacyCompany[_pharmacyCompany].isAdded == false,
            "you already added yourself"
        );
        PharmacyCompany storage newPharmacyCompany = allPharmacyCompany[
            _pharmacyCompany
        ];

        newPharmacyCompany.pharmacyCompany = _pharmacyCompany;
        newPharmacyCompany.name = _name;
        newPharmacyCompany.pharmacyCompanyId = _pharmacyCompanyId;
        newPharmacyCompany.isAdded = true;
        allPharmacyCompanyAddress.push(_pharmacyCompany);
    }

    function viewPharmacyCompany(
        address _pharmacyCompany
    ) public view returns (address, string memory, uint256, bool) {
        require(
            Patient.accressList(_pharmacyCompany, msg.sender) == true,
            "user alredy have accress in your data"
        );
        PharmacyCompany storage newPharmacyCompany = allPharmacyCompany[
            _pharmacyCompany
        ];

        return (
            newPharmacyCompany.pharmacyCompany,
            newPharmacyCompany.name,
            newPharmacyCompany.pharmacyCompanyId,
            newPharmacyCompany.isAdded
        );
    }

    function addPharmaciest(
        address _pharmaciest,
        string memory _name,
        uint256 _pharmaciestId
    ) public {
        require(
            allPharmaciest[_pharmaciest].isAdded == false,
            "you already added yourself"
        );
        Pharmaciest storage newPharmaciest = allPharmaciest[_pharmaciest];

        newPharmaciest.pharmaciest = _pharmaciest;
        newPharmaciest.name = _name;
        newPharmaciest.pharmaciestId = _pharmaciestId;
        newPharmaciest.isAdded = true;
        allPharmaciestAddress.push(_pharmaciest);
    }

    function viewPharmaciest(
        address _pharmaciest
    ) public view returns (address, string memory, uint256, bool) {
        require(
            Patient.accressList(_pharmaciest, msg.sender) == true,
            "user alredy have accress in your data"
        );
        Pharmaciest storage newPharmaciest = allPharmaciest[_pharmaciest];

        return (
            newPharmaciest.pharmaciest,
            newPharmaciest.name,
            newPharmaciest.pharmaciestId,
            newPharmaciest.isAdded
        );
    }

    function addFoodIndusty(
        address _foodIndusty,
        string memory _name,
        uint256 _foodIndustyId
    ) public {
        require(
            allFoodIndusty[_foodIndusty].isAdded == false,
            "you already added yourself"
        );
        FoodIndusty storage newFoodIndusty = allFoodIndusty[_foodIndusty];

        newFoodIndusty.foodIndusty = _foodIndusty;
        newFoodIndusty.name = _name;
        newFoodIndusty.foodIndustyId = _foodIndustyId;
        newFoodIndusty.isAdded = true;
        allFoodIndustyAddress.push(_foodIndusty);
    }

    function viewFoodIndusty(
        address _foodIndusty
    ) public view returns (address, string memory, uint256, bool) {
        require(
            Patient.accressList(_foodIndusty, msg.sender) == true,
            "user alredy have accress in your data"
        );
        FoodIndusty storage newFoodIndusty = allFoodIndusty[_foodIndusty];

        return (
            newFoodIndusty.foodIndusty,
            newFoodIndusty.name,
            newFoodIndusty.foodIndustyId,
            newFoodIndusty.isAdded
        );
    }

    function addHospital(
        address _hospital,
        string memory _name,
        uint256 _hospitalId
    ) public {
        require(
            allHospital[_hospital].isAdded == false,
            "you already create your profile"
        );
        Hospital storage newHospital = allHospital[_hospital];

        newHospital.hospital = _hospital;
        newHospital.name = _name;
        newHospital.hospitalId = _hospitalId;

        newHospital.isAdded = true;
        allHospitalAddress.push(_hospital);
    }

    function viewHospital(
        address _hospital
    ) public view returns (address, string memory, uint256, bool) {
        require(
            Patient.accressList(_hospital, msg.sender) == true,
            "user alredy have accress in your data"
        );
        Hospital storage newHospital = allHospital[_hospital];

        return (
            newHospital.hospital,
            newHospital.name,
            newHospital.hospitalId,
            newHospital.isAdded
        );
    }

    function addDataAnalyst(
        address _dataAnalyst,
        string memory _name,
        uint256 _dataAnalystId
    ) public {
        require(
            allDataAnalyst[_dataAnalyst].isAdded == false,
            "you already added yourself"
        );
        DataAnalyst storage newDataAnalyst = allDataAnalyst[_dataAnalyst];

        newDataAnalyst.dataAnalyst = _dataAnalyst;
        newDataAnalyst.name = _name;
        newDataAnalyst.dataAnalystId = _dataAnalystId;

        newDataAnalyst.isAdded = true;
        allDataAnalystAddress.push(_dataAnalyst);
    }

    function viewDataAnalyst(
        address _dataAnalyst
    ) public view returns (address, string memory, uint256, bool) {
        require(
            Patient.accressList(_dataAnalyst, msg.sender) == true,
            "user alredy have accress in your data"
        );
        DataAnalyst storage newDataAnalyst = allDataAnalyst[_dataAnalyst];

        return (
            newDataAnalyst.dataAnalyst,
            newDataAnalyst.name,
            newDataAnalyst.dataAnalystId,
            newDataAnalyst.isAdded
        );
    }

    function addPharmacy(
        address _pharmacy,
        string memory _name,
        uint256 _pharmacyId
    ) public {
        require(
            allPharmacy[_pharmacy].isAdded == false,
            "you already added yourself"
        );
        Pharmacy storage newPharmacy = allPharmacy[_pharmacy];

        newPharmacy.pharmacy = _pharmacy;
        newPharmacy.name = _name;
        newPharmacy.pharmacyId = _pharmacyId;

        newPharmacy.isAdded = true;
        allPharmacyAddress.push(_pharmacy);
    }

    function viewPharmacy(
        address _pharmacy
    ) public view returns (address, string memory, uint256, bool) {
        require(
            Patient.accressList(_pharmacy, msg.sender) == true,
            "user alredy have accress in your data"
        );
        Pharmacy storage newPharmacy = allPharmacy[_pharmacy];

        return (
            newPharmacy.pharmacy,
            newPharmacy.name,
            newPharmacy.pharmacyId,
            newPharmacy.isAdded
        );
    }

    // accress and revoke function
}
