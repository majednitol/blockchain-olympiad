// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Patient.sol";

contract Helth is MedicalData {
    address public ownerOfContract;

    constructor() {
        ownerOfContract = msg.sender;
    }

    struct Doctor {
        address doctor;
        string name;
        uint256 doctorId;
    }

    struct PharmacyCompany {
        address pharmacyCompany;
        string name;
        uint256 companyId;
    }

    struct Pharmaciest {
        address pharmaciest;
        string name;
        uint256 pharmaciestId;
    }

    struct FoodIndusty {
        address foodIndusty;
        string name;
        uint256 foodIndustyId;
    }

    struct Hospital {
        address hospital;
        string name;
        uint256 hospitalId;
    }

    struct Pharmacy {
        address pharmacy;
        string name;
        uint256 pharmacyId;
    }

    struct DataAnalyst {
        address dataAnalyst;
        string name;
        uint256 analystId;
    }

    mapping(address => Doctor) public allDoctor;
    mapping(address => PharmacyCompany) public allPharmacyCompany;
    mapping(address => Pharmaciest) public allPharmaciest;
    mapping(address => FoodIndusty) public allFoodIndusty;
    mapping(address => Hospital) public allHospital;
    mapping(address => Pharmacy) public allPharmacy;
    mapping(address => DataAnalyst) public allDataAnalyst;
    address[] public allDoctorAddress;
    address[] public allPharmacyCompanyAddress;
    address[] public allPharmaciestAddress;
    address[] public allFoodIndustyAddress;
    address[] public allHospitalAddress;
    address[] public allPharmacyAddress;
    address[] public allDataAnalystAddress;

    function addDoctor(
        address _doctor,
        string memory _name,
        uint256 _doctorId
    ) public {
        require(!isDoctorAdded(_doctor), "Doctor already added");
        Doctor storage newDoctor = allDoctor[_doctor];

        newDoctor.doctor = _doctor;
        newDoctor.name = _name;
        newDoctor.doctorId = _doctorId;
        allDoctorAddress.push(_doctor);
    }

    function isDoctorAdded(address _doctor) public view returns (bool) {
        return allDoctor[_doctor].doctor == msg.sender;
    }

    function addPharmacyCompany(
        address _pharmacyCompany,
        string memory _name,
        uint256 _companyId
    ) public {
        require(
            !isPharmacyCompanyAdded(_pharmacyCompany),
            "Pharmacy Company already added"
        );
        PharmacyCompany storage newPharmacyCompany = allPharmacyCompany[
            _pharmacyCompany
        ];

        newPharmacyCompany.pharmacyCompany = _pharmacyCompany;
        newPharmacyCompany.name = _name;
        newPharmacyCompany.companyId = _companyId;
        allPharmacyCompanyAddress.push(_pharmacyCompany);
    }

    function isPharmacyCompanyAdded(
        address _pharmacyCompany
    ) public view returns (bool) {
        return
            allPharmacyCompany[_pharmacyCompany].pharmacyCompany == msg.sender;
    }

    function addPharmaciest(
        address _pharmaciest,
        string memory _name,
        uint256 _pharmaciestId
    ) public {
        require(!isPharmaciestAdded(_pharmaciest), "Pharmaciest already added");
        Pharmaciest storage newPharmaciest = allPharmaciest[_pharmaciest];

        newPharmaciest.pharmaciest = _pharmaciest;
        newPharmaciest.name = _name;
        newPharmaciest.pharmaciestId = _pharmaciestId;
        allPharmaciestAddress.push(_pharmaciest);
    }

    function isPharmaciestAdded(
        address _pharmaciest
    ) public view returns (bool) {
        return allPharmaciest[_pharmaciest].pharmaciest == msg.sender;
    }

    function addFoodIndusty(
        address _foodIndusty,
        string memory _name,
        uint256 _foodIndustyId
    ) public {
        require(
            !isFoodIndustyAdded(_foodIndusty),
            "Food Industry already added"
        );
        FoodIndusty storage newFoodIndusty = allFoodIndusty[_foodIndusty];

        newFoodIndusty.foodIndusty = _foodIndusty;
        newFoodIndusty.name = _name;
        newFoodIndusty.foodIndustyId = _foodIndustyId;
        allFoodIndustyAddress.push(_foodIndusty);
    }

    function isFoodIndustyAdded(
        address _foodIndusty
    ) public view returns (bool) {
        return allFoodIndusty[_foodIndusty].foodIndusty == msg.sender;
    }

    function addHospital(
        address _hospital,
        string memory _name,
        uint256 _hospitalId
    ) public {
        require(!isHospitalAdded(_hospital), "Hospital already added");
        Hospital storage newHospital = allHospital[_hospital];

        newHospital.hospital = _hospital;
        newHospital.name = _name;
        newHospital.hospitalId = _hospitalId;
        allHospitalAddress.push(_hospital);
    }

    function isHospitalAdded(address _hospital) public view returns (bool) {
        return allHospital[_hospital].hospital == msg.sender;
    }

    function addPharmacy(
        address _pharmacy,
        string memory _name,
        uint256 _pharmacyId
    ) public {
        require(!isPharmacyAdded(_pharmacy), "Pharmacy already added");
        Pharmacy storage newPharmacy = allPharmacy[_pharmacy];

        newPharmacy.pharmacy = _pharmacy;
        newPharmacy.name = _name;
        newPharmacy.pharmacyId = _pharmacyId;
        allPharmacyAddress.push(_pharmacy);
    }

    function isPharmacyAdded(address _pharmacy) public view returns (bool) {
        return allPharmacy[_pharmacy].pharmacy == msg.sender;
    }

    function addDataAnalyst(
        address _dataAnalyst,
        string memory _name,
        uint256 _analystId
    ) public {
        require(
            !isDataAnalystAdded(_dataAnalyst),
            "Data Analyst already added"
        );
        DataAnalyst storage newDataAnalyst = allDataAnalyst[_dataAnalyst];

        newDataAnalyst.dataAnalyst = _dataAnalyst;
        newDataAnalyst.name = _name;
        newDataAnalyst.analystId = _analystId;
        allDataAnalystAddress.push(_dataAnalyst);
    }

    function isDataAnalystAdded(
        address _dataAnalyst
    ) public view returns (bool) {
        return allDataAnalyst[_dataAnalyst].dataAnalyst == msg.sender;
    }

    function viewDoctorData(
        address _doctor
    ) public view returns (string memory, uint256) {
        require(
            _doctor == msg.sender || accessList[_doctor][msg.sender],
            "user don't have access in your data"
        );
        Doctor storage doctor = allDoctor[_doctor];
        return (doctor.name, doctor.doctorId);
    }

    function viewPharmacyCompanyData(
        address _pharmacyCompany
    ) public view returns (string memory, uint256) {
        require(
            _pharmacyCompany == msg.sender ||
                accessList[_pharmacyCompany][msg.sender],
            "user don't have access in your data"
        );
        PharmacyCompany storage company = allPharmacyCompany[_pharmacyCompany];
        return (company.name, company.companyId);
    }

    function viewPharmaciestData(
        address _pharmaciest
    ) public view returns (string memory, uint256) {
        require(
            _pharmaciest == msg.sender || accessList[_pharmaciest][msg.sender],
            "user don't have access in your data"
        );
        Pharmaciest storage pharmaciest = allPharmaciest[_pharmaciest];
        return (pharmaciest.name, pharmaciest.pharmaciestId);
    }

    function viewFoodIndustyData(
        address _foodIndusty
    ) public view returns (string memory, uint256) {
        require(
            _foodIndusty == msg.sender || accessList[_foodIndusty][msg.sender],
            "user don't have access in your data"
        );
        FoodIndusty storage foodIndusty = allFoodIndusty[_foodIndusty];
        return (foodIndusty.name, foodIndusty.foodIndustyId);
    }

    function viewHospitalData(
        address _hospital
    ) public view returns (string memory, uint256) {
        require(
            _hospital == msg.sender || accessList[_hospital][msg.sender],
            "user don't have access in your data"
        );
        Hospital storage hospital = allHospital[_hospital];
        return (hospital.name, hospital.hospitalId);
    }

    function viewPharmacyData(
        address _pharmacy
    ) public view returns (string memory, uint256) {
        require(
            _pharmacy == msg.sender || accessList[_pharmacy][msg.sender],
            "user don't have access in your data"
        );
        Pharmacy storage pharmacy = allPharmacy[_pharmacy];
        return (pharmacy.name, pharmacy.pharmacyId);
    }

    function viewDataAnalystData(
        address _dataAnalyst
    ) public view returns (string memory, uint256) {
        require(
            _dataAnalyst == msg.sender || accessList[_dataAnalyst][msg.sender],
            "user don't have access in your data"
        );
        DataAnalyst storage dataAnalyst = allDataAnalyst[_dataAnalyst];
        return (dataAnalyst.name, dataAnalyst.analystId);
    }
}
