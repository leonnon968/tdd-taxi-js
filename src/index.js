var TaxiFareCalc = require('./TaxiFareCalc');
const fs = require('fs')

export default function main(testDataFile = 'src/fixtures/testData.txt') {
  fs.readFile(testDataFile, (err, data) => {
    if (err) throw err;
    let taxiFareCalc = new TaxiFareCalc();
    const receipt = taxiFareCalc.calc(data.toString());
    return receipt;
  })
}
main();
