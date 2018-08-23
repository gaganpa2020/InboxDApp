const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const {interface, bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach(async ()=>{

    //Get the list of all the account.
    
    //Using promise 
    // web3.eth.getAccounts()
    // .then(fetchedAccounts => {
    //     console.log(fetchedAccounts);        
    // });

    //Use asyn/await 
    accounts = await web3.eth.getAccounts();

    //Use on of the account to deploy contract.
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['hi there']})
    .send({from: accounts[0], gas: '1000000' });
});

describe('Inbox',()=>{
    it('Deploy a contract', ()=>{
        assert.ok(inbox.options.address);
    });      

    it('has a default message', async ()=>{
        let message = await inbox.methods.message().call();
        console.log(message);
    });

    it('It can change the message, Call method', async ()=>{
        await inbox.methods.SetMessage("bye there!").call();
        let message = await inbox.methods.message().call();
        console.log(message);
    });

    it('It can change the message, send transaction to the function.', async ()=>{
        let transactionData = await inbox.methods.SetMessage("bye there!").send({from: accounts[0]});
        let message = await inbox.methods.message().call();
        console.log(message);
    });
}); 

/*
* Test cases with Mocha
class Car{
    park(){
      return "stopped";   
    }

    drive(){
      return "vroom";        
    }
}

let car;
beforeEach(()=>{
    car = new Car();
});

describe('Car',()=>{
    it('can park', ()=>{
        assert.equal(car.park(),'stopped');    
   });  
   
   it('can drive', ()=>{   
    assert.equal(car.drive(),'vroom');    
});  
});
*/