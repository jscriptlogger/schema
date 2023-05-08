import { Suite } from 'sarg';
import { expect } from 'chai';
import convert from '../converter';
import { valueNumber, valueObject, valueString } from '../src/value';

const suite = new Suite();

suite.test('it should convert number value', () => {
  expect(convert(1)).to.be.deep.equal(
    valueNumber({
      value: 1,
    })
  );
});

suite.test('it should convert string value', () => {
  expect(convert('xxx')).to.be.deep.equal(
    valueString({
      value: 'xxx',
    })
  );
});

suite.test('it should convert deep objects', () => {
  expect(
    convert({
      a: 1,
      b: '',
    })
  ).to.be.deep.equal(
    valueObject({
      value: [
        [valueString({ value: 'a' }), valueNumber({ value: 1 })],
        [valueString({ value: 'b' }), valueString({ value: '' })],
      ],
    })
  );
});

suite.test('it should convert deep objects with number as keys', () => {
  expect(
    convert({
      a: 1,
      b: '',
      3: 4,
    })
  ).to.be.deep.equal(
    valueObject({
      value: [
        [valueString({ value: '3' }), valueNumber({ value: 4 })],
        [valueString({ value: 'a' }), valueNumber({ value: 1 })],
        [valueString({ value: 'b' }), valueString({ value: '' })],
      ],
    })
  );
});

export default suite;
