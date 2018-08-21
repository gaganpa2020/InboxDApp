const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let accounts;
beforeEach(()=>{
//Get the list of all the account.
web3.eth.getAccounts();

//Use on of the account to deploy contract.
});

describe('Inbox',()=>{
    it('get accounts', ()=>{
 
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