const Web3 = require('web3');
const Web3EthContract = require('web3-eth-contract');
// create a web3 object connected to our NodETH node
var web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.testnet.fantom.network"));
web3.setProvider(new Web3.providers.WebsocketProvider('wss://wsapi.testnet.fantom.network'));

// define the ERC20 standard token ABI to interact with token contracts using


var erc20Abi = [
        {
                "anonymous": false,
                "inputs": [
                        {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                        },
                        {
                                "indexed": false,
                                "internalType": "string",
                                "name": "ipfsHash",
                                "type": "string"
                        },
                        {
                                "indexed": false,
                                "internalType": "string",
                                "name": "text",
                                "type": "string"
                        },
                        {
                                "indexed": false,
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                        }
                ],
                "name": "PostCreated",
                "type": "event"
        },
        {
                "inputs": [
                        {
                                "internalType": "string",
                                "name": "ipfsHash",
                                "type": "string"
                        },
                        {
                                "internalType": "string",
                                "name": "text",
                                "type": "string"
                        }
                ],
                "name": "createPost",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
        },
        {
                "inputs": [
                        {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "name": "followers",
                "outputs": [
                        {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                        },
                        {
                                "internalType": "string",
                                "name": "follower_address",
                                "type": "string"
                        },
                        {
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                        }
                ],
                "stateMutability": "view",
                "type": "function"
        },
        {
                "inputs": [
                        {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "name": "following",
                "outputs": [
                        {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                        },
                        {
                                "internalType": "string",
                                "name": "follower_address",
                                "type": "string"
                        },
                        {
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                        }
                ],
                "stateMutability": "view",
                "type": "function"
        },
        {
                "inputs": [],
                "name": "getPosts",
                "outputs": [
                        {
                                "components": [
                                        {
                                                "internalType": "uint256",
                                                "name": "id",
                                                "type": "uint256"
                                        },
                                        {
                                                "internalType": "string",
                                                "name": "ipfsHash",
                                                "type": "string"
                                        },
                                        {
                                                "internalType": "string",
                                                "name": "text",
                                                "type": "string"
                                        },
                                        {
                                                "internalType": "address",
                                                "name": "user",
                                                "type": "address"
                                        }
                                ],
                                "internalType": "struct DeSocial.Post[]",
                                "name": "",
                                "type": "tuple[]"
                        }
                ],
                "stateMutability": "view",
                "type": "function"
        },
        {
                "inputs": [],
                "name": "nextPostId",
                "outputs": [
                        {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "stateMutability": "view",
                "type": "function"
        },
        {
                "inputs": [
                        {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "name": "posts",
                "outputs": [
                        {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                        },
                        {
                                "internalType": "string",
                                "name": "ipfsHash",
                                "type": "string"
                        },
                        {
                                "internalType": "string",
                                "name": "text",
                                "type": "string"
                        },
                        {
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                        }
                ],
                "stateMutability": "view",
                "type": "function"
        }
];


        var contractAddress = "0xB41d7cA89C5DF6Aa0cd5347eC44DE114f7fe6B0C"
        var address = "0x6341948Cf6A2EeDBdcf43eb0552abe450e336d66"


        var contract = new web3.eth.Contract(erc20Abi, contractAddress, {from: address})
        console.log(contract)
