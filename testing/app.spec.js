import assert from 'assert'
import sum from '../src/testing_pur.js'
import {expect} from 'chai'

describe('for testing', ()=>{
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