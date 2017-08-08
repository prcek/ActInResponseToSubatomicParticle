

//import isElectron from 'is-electron';

var Datastore = require('nedb');

var test_db = null;

//if (isElectron()) {
    test_db = new Datastore({ filename: 'test.db', autoload: true });
//} else {
//    test_db = new Datastore();
//}




function doInsert() {
    return new Promise(function(resolve,reject){
        var doc = {
            text: "ahoj"
        }
        test_db.insert(doc,function (err, newDoc) {
            if (err) {
                reject(err);
            } else {
                resolve("new");
            }
        });
    });
}

function doFind() {
    return new Promise(function(resolve,reject){
        test_db.find({},function (err, docs) {
            resolve(docs);  
        });
    });

}
 




module.exports = {
  doInsert: doInsert,
  doFind: doFind
};

