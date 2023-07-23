//src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import SimpleContractABI from './contracts/SimpleContract.json';

const App = () => {
  const [contractValue, setContractValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [walletAddress, setWalletAddress] = useState(''); 
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; 

  useEffect(() => {
    const initializeProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        setProvider(new ethers.providers.Web3Provider(provider));
      } else {
        console.error('Please install Metamask to interact with the wallet.');
      }
    };

    initializeProvider();
  }, []);

  useEffect(() => {
    if (provider) {
      const signer = provider.getSigner();
      setContract(new ethers.Contract(contractAddress, SimpleContractABI.abi, signer));
    }
  }, [provider]);

  const getContractValue = async () => {
    if (contract) {
      try {
        const value = await contract.getValue();
        setContractValue(value.toString());
      } catch (error) {
        console.error('Error getting contract value:', error);
      }
    }
  };

  useEffect(() => {
    if (contract) {
      getContractValue();
    }
  }, [contract]);

  const incrementValue = async () => {
    if (contract) {
      try {
        await contract.incrementValue();
        getContractValue();
      } catch (error) {
        console.error('Error incrementing value:', error);
      }
    }
  };

  const decrementValue = async () => {
    if (contract) {
      try {
        await contract.decrementValue();
        getContractValue();
      } catch (error) {
        console.error('Error decrementing value:', error);
      }
    }
  };

  const handleInputChange = (event) => {
    setNewValue(event.target.value);
  };

  const setValue = async () => {
    if (!newValue || !contract) return;
    try {
      // Parse the new value to an integer (assuming it's a number)
      const parsedValue = parseInt(newValue);
      await contract.setValue(parsedValue);
      getContractValue();
      setNewValue('');
    } catch (error) {
      console.error('Error setting value:', error);
    }
  };

  const connectWallet = async () => {
    if (provider) {
      try {
        const accounts = await provider.send('eth_requestAccounts', []);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Error connecting to the wallet:', error);
      }
    }
  };

  const getOwnerAddress = async () => {
    if (contract) {
      try {
        const ownerAddress = await contract.getOwner();
        console.log('Owner Address:', ownerAddress);
      } catch (error) {
        console.error('Error retrieving owner address:', error);
      }
    }
  };

  useEffect(() => {
    if (contract) {
      getOwnerAddress();
    }
  }, [contract]);

  return (
    <div className="App">
      <h1>SimpleContract Frontend</h1>
      <p>Wallet Address: {walletAddress}</p>
      <p>Contract Value: {contractValue}</p>
      <button onClick={connectWallet}>Connect Wallet</button>
      <button onClick={incrementValue}>Increment Value</button>
      <button onClick={decrementValue}>Decrement Value</button>
      <br />
      <input type="number" value={newValue} onChange={handleInputChange} />
      <button onClick={setValue}>Set Value</button>
    </div>
  );
};

export default App;