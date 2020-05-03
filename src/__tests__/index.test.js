var TaxiFareCalc = require('../TaxiFareCalc');
var App = require('../index');

test('Test Taxi fare calc ', () => {
  let taxiFareCalc = new TaxiFareCalc();
  expect(taxiFareCalc.calc('1公里，等待0分钟\n')).toBe('收费6元\n');
  expect(taxiFareCalc.calc('3公里，等待0分钟\n')).toBe('收费7元\n');
  expect(taxiFareCalc.calc('10公里，等待0分钟\n')).toBe('收费13元\n');
  expect(taxiFareCalc.calc('2公里，等待3分钟\n')).toBe('收费7元\n');
  expect(taxiFareCalc.calc('2公里，等待3分钟\n3公里，等待0分钟\n')).toBe('收费7元\n收费7元\n');
  expect(taxiFareCalc.parse('1公里，等待0分钟\n')).toStrictEqual(["1公里，等待0分钟"]);
});
