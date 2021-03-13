const connection = require('./connection.js');


// Helper function for mySQL
function questionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

// Helper function - convert object key/value pairs to mySQL
function objToSql(obj){
  var arr=[];

  for (var key in obj) {
    var value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + '=' + value);
    }
  }
  // Translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
// Select all burgers
  all: function(tableName, cb) {
    var queryString = '* SELECT * FROM * '+tableName+';';
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },
// Create new burger
  createNew: function(tableName, cols, values, cb){
    var queryString = 'INSERT INTO '+tableName;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += questionMarks(values.length);
    queryString += ') ';

    connectio.query(queryString, values, function(error, result){
      if (error){
        throw error;
      }
      cb(result);
    });
  },
  updateOne: function(tablename, objColValues, status, cb){
    var queryString = 'UPDATE '+tablename;
    queryString += 'SET '
    queryString += objColValues(objColValues);
    queryString += 'WHERE ';
    queryString += status;

    connection.query(queryString, function(error, result){
      if (error) {
        throw error;
      }
      cb(result);
    });
  }

}