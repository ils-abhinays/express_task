import assert from 'assert'
import {sum, sub, hello} from '../src/apptest.js'
import {expect} from 'chai'

describe('for testing sum', ()=>{
    it('it able to sum 2 digit', ()=>{
        const result = sum(3,3);
        // assert.equal(result, 6);
        expect(result).to.be.eq(6);
        console.log(result);
    });
    it('it able to sum 1 digit', ()=>{
        const result = sum(3);
        expect(result).to.be.eq(3);
    });
    it('it able to sum empty data', ()=>{
        const result = sum();
        expect(result).to.be.eq(0);
    });
    it('when someone type str instead num', ()=>{
        const result = sum('x',4);
        expect(result).to.be.eq(0);
    });
});

describe('for testing subtraction', ()=>{
    it('it able to sub 2 digit', ()=>{
        const result = sub(3,3);
        expect(result).to.be.eq(0);
    });
    it('it able to sub 1 digit', ()=>{
        const result = sub(3);
        expect(result).to.be.eq(3);
    });
    it('it able to sub empty data', ()=>{
        const result = sub();
        expect(result).to.be.eq(0);
    });
    it('when someone type str instead num', ()=>{
        const result = sub('x',4);
        expect(result).to.be.eq(0);
    });
});


describe('str testing', ()=>{
    it('one', ()=>{
        const result = hello('meena');
        expect(result).to.be.eq('hello meena');
    });
});

