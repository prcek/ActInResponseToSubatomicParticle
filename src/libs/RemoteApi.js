
const pMap = require('p-map');
import Neo from './Neo';
var axios = require('axios');

//https://jsonplaceholder.typicode.com/todos

var remote_api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 5000,
  headers: {'x-remoteapi-secret': 'supersecrettoken'}
});



function updateNeo() {
    return new Promise(function(resolve,reject){
        remote_api.get("/todos").then(res=>{
            Neo.doClean().then((x)=>{
                pMap(res.data.slice(0,10).map(Neo.fixId),Neo.doInsertTodo,{concurency:1}).then((r)=>{
                    resolve("ok");
                })
            })
        });
    });
}


module.exports = {
  updateNeo: updateNeo
};
