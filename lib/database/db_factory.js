var MongoDBHelper   = require("./mongodb_helper");
var SQLiteHelper    = require("./sqlite_helper");
var config          = require('../../iot').config;

function DB_Factory() {
    'use strict';
    return;
}

DB_Factory.prototype.DBClass = SQLiteHelper;

DB_Factory.prototype.selectDB = function () {
    'use strict';
    if (config.db === 'sqlite3' || config.db === 'sqlite') {
        this.DBClass = SQLiteHelper;
    } else if (config.db === "mongodb") {
        this.DBClass = MongoDBHelper;
    }
    return this.DBClass;
};

module.exports = DB_Factory;