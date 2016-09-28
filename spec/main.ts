///<reference path="../typings/globals/mocha/index.d.ts"/>
///<reference path="../typings/globals/chai/index.d.ts"/>
import * as Chai from 'chai';
import {HelloTS} from "../src/main";
const expect = Chai.expect;



describe('HelloTS', () => {
  describe('Some event', () => {
    it('should result in something', () => {
      let hello = new HelloTS();
      expect(hello.sayHello()).to.eq('hello'); //aside: chai is not type checked :()
      expect(hello.sayHello()).to.eq('hell'); //aside: chai is not type checked :()
    });
  });
});
