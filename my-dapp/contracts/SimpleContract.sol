//contracts/SimpleContract.sol
// //SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract SimpleContract {
//     uint256 private value;
//     address private owner;
//     function getOwner() external view returns (address) {
//         return owner;
//     }

//     constructor() {
//         owner = msg.sender;
//     }

//     function getValue() external view returns (uint256) {
//         return value;
//     }

//     function setValue(uint256 _newValue) external {
//         require(msg.sender == owner, "Only the contract owner can set the value");
//         value = _newValue;
//     }

//     function incrementValue() external {
//         value++;
//     }

//     function decrementValue() external {
//         value--;
//     }
// }


pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 private value;
    address private owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {} // Allow the contract to receive Ether

    function getValue() external view returns (uint) {
        return value;
    }

    function setValue(uint _newValue) external onlyOwner {
        value = _newValue;
    }

    function incrementValue() external onlyOwner {
        value++;
    }

    function decrementValue() external onlyOwner {
        value--;
    }

    function withdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}




