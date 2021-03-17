var orm = require('../config/orm.js');

var burgers ={
  selectAll: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },

  insertOne: ( cols, values, cb) => {
    orm.insertOne('burgers', cols, values, (res) => {
      cb(res);
    });
  },

  updateOne: (objColValues, status, cb) => {
    orm.updateOne ('burgers',objColValues, status, (res) =>{
      cb(res);
    });
  }
}

module.exports = burgers;