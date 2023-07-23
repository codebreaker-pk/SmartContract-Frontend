# SimpleContract with React Frontend

This project demonstrates a simple Ethereum smart contract called SimpleContract, along with a React frontend to interact with the contract. The purpose of this project is to showcase how to deploy and interact with a smart contract on a local Ethereum development environment using Hardhat and Metamask.
## Discription
This project is a decentralized application (DApp) that interacts with a simple smart contract deployed on the Ethereum blockchain. The smart contract, written in Solidity, allows users to store and manipulate an integer value. The frontend of the application, built using React, enables users to connect their Ethereum wallet (e.g., Metamask), view the contract's current value, increment or decrement the value, and set a new value.

The project demonstrates how to use Ethereum's smart contracts and web3.js library to interact with the blockchain and update the contract state through a user-friendly web interface. Developers can use this project as a starting point to build more complex DApps or experiment with Ethereum smart contracts.

To use the application, you need to have Metamask installed on your browser and an Ethereum local network running using Hardhat. The frontend connects to the local network through web3.js to interact with the deployed smart contract. Users can connect their wallet, view the contract's value, and perform actions like incrementing, decrementing, and setting a new value on the blockchain.

Feel free to fork and modify this project for your specific needs or use it as a learning resource to understand Ethereum DApp development and smart contract integration with React. Happy coding!
## Functionality

The SimpleContract smart contract includes the following functions:

1. `getValue()`: This function allows anyone to view the current value stored in the contract.

2. `setValue(uint256 _newValue)`: Only the contract owner can use this function to set a new value in the contract.

3. `incrementValue()`: Only the contract owner can use this function to increment the current value by one.

4. `decrementValue()`: Only the contract owner can use this function to decrement the current value by one.

5. `withdraw()`: Only the contract owner can use this function to withdraw the contract's balance (if any) to the owner's address.

The React frontend provides a user-friendly interface to connect a wallet (using MetaMask), view the contract value, increment or decrement the value, set a new value, and withdraw funds (if you are the contract owner).

## How to Use

Follow the steps below to deploy the SimpleContract smart contract on a local Ethereum development environment and interact with it using the React frontend.

### Prerequisites

1. Install Node.js and npm (Node Package Manager) on your system.
2. Install the MetaMask browser extension to connect to your local Ethereum network.

### Smart Contract Deployment

1. Clone the repository: ```
git clone https://github.com/codebreaker-pk/SmartContract-Frontend.git```
2.  Navigate to the project directory:`cd my-dapp`
3. Install project dependencies by running: `npm install`

4. Start the local Ethereum network (Hardhat's built-in node) by running: `npx hardhat node`

5. In a new terminal, deploy the contract to the local network by running: `npx hardhat run deploy.js --network localhost`

6. Note down the deployed contract address as it will be required in the frontend.

### Frontend Setup and Running

1. In the `App.js` file, replace `contractAddress` variable with the address of the deployed contract.

2. Start the React frontend by running: `npm start`

3. Open the application in your browser, and if you are using MetaMask, make sure you are connected to your local Ethereum network.

4. Click the "Connect Wallet" button to connect your wallet to the application.

5. The wallet address will be displayed, and you can see the current contract value.

6. Use the "Increment Value" and "Decrement Value" buttons to change the contract value.

7. Enter a new value in the input field and click "Set Value" to update the contract value.

8. Click "Withdraw" to withdraw the contract's balance (if any) to the contract owner's address.

### Note

- Make sure you have Ether in your wallet to perform transactions on the local network.
- The frontend assumes you are using MetaMask; if using a different wallet, make sure to adjust the provider setup accordingly.


## Author

**Prashant Kumar**

- GitHub: [github.com/codebreaker-pk](https://github.com/codebreaker-pk)
- Email: official.pk.900@gmail.com

## License
This project is licensed under the [MIT License](LICENCE)
