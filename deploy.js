const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'jar pass sustain among pupil point become hello filter carry because hedgehog'
    ,'https://rinkeby.infura.io/v3/f4f630c70ad34fbfa2b3b2ca70a95cfb'        
);

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from accounts', accounts[0]);
   
    const result = await new web3.eth.Contract(JSON.parse(interface))
                    .deploy({data: '0x' + bytecode, arguments: ['Hello World']})
                    .send({from: accounts[0], gas: '900000' });

    console.log('Contract deployed to', result.options.address);
};

deploy();