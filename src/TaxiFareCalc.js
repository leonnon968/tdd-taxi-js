const _ = require('lodash');

class TaxiFareCalc {
    calc(tripDetail) {
        if (arguments.length !== 1) throw new TypeError();
        if (typeof tripDetail !== 'string' || tripDetail.trim() === '') throw new TypeError();
        this.allFares = '';
        let trips = this.parse(tripDetail);
        _.each(trips, t => {
            let [x, y] = _.map(t.match(/^(\d+)[\u4E00-\u9FA5]{2}[，][\u4E00-\u9FA5]{2}(\d+)[\u4E00-\u9FA5]{2}$/).slice(1, 3), each => parseInt(each));
            this.allFares += this.calculateFare(x, y);
        })
        return this.allFares;
    }

    parse(tripDetail) {
        return _
            .chain(tripDetail)
            .split(/\n/)
            .compact()
            .value();
    }

    calculateFare(mileage, waitTime) {
        let fare = 0;
        if (mileage > 2 && mileage <= 8) {
            fare += 6 + (mileage - 2) * 0.8;
        } else if (mileage > 8) {
            fare += 6 + 6 * 0.8 + (mileage - 8) * 1.2;
        } else if (mileage >= 0 && mileage <= 2) {
            fare = 6;
        }
        return (`收费${Math.round(fare + waitTime * 0.25)}元\n`);
    }
}
module.exports = TaxiFareCalc;