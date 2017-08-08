


var Datastore = require('nedb');


var test_db = new Datastore({ filename: 'test.db', autoload: true });




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
 

function doClean(){
    return new Promise(function(resolve,reject){
        test_db.remove({},{multi: true},function (err, numRemoved) {
            resolve("ok");
        });
    })
}



module.exports = {
  doInsert: doInsert,
  doFind: doFind,
  doClean: doClean
};

